import Vue from 'vue';
import Component from 'vue-class-component';
import { Prop, Watch } from 'vue-property-decorator';
import './v_hover_list.scss';

export class HoverOption {
  duration: string = null;
  timingFn: string = null;
  perspective: string = null;
  className: string = null;
}

@Component({
  name: 'vhover-list',
  template: require('./v_hover_list.html'),
})
export class VHoverList extends Vue {

  @Prop({ default: 'ease' }) timingFn: string;
  @Prop({ default: '300ms' }) duration: string;
  @Prop({ default: false }) perspective: boolean;
  @Prop({ default: 'vhover' }) className: string;
  options: HoverOption = new HoverOption();

  @Watch('options', { immediate: true, deep: true })
  updateOptions(val: HoverOption, oldVal: HoverOption) {
    this.$nextTick(() => {
      this.$slots.default.forEach((vnode: any) => {
        const tag = <String>vnode.tag || '';
        if (tag.indexOf('vhover-item') > -1) {
          vnode.componentInstance.setOption(val);
        }
      });
    });
  }

  mounted() {
    this.$nextTick(() => {
      this.options.timingFn = this.timingFn;
      this.options.duration = this.duration;
      this.options.className = this.className;
      this.options.perspective = this.perspective ? '400px' : 'inherit';
    });
  }

}
