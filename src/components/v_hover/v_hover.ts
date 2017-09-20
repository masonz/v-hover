import Vue from 'vue';
import Component from 'vue-class-component';
import { Prop, Watch } from 'vue-property-decorator';
import { HoverOption } from '../v_hover_list';
import './v_hover.scss';

@Component({
  name: 'vhover-item',
  template: require('./v_hover.html'),
})
export class VHover extends Vue {

  timingFn: string = null;
  duration: string = null;
  perspective: string = null;
  className: string = null;
  hoverClass: string = null;
  @Prop({ default: '' }) imageUrl: string;
  @Prop({ default: '' }) link: string;

  mounted() {
    this.$nextTick(() => {
      this.$el.addEventListener('mouseover', (ev) => this.handleHover(ev, this.$el, 'in'));
      this.$el.addEventListener('mouseout', (ev) => this.handleHover(ev, this.$el, 'out'));
    });
  }

  /**
    * Get direction when mouse hover
    * @param {MouseEvent} ev
    * @param {HTMLElement} el
    * @return {number}
    */
  getDirection(ev: MouseEvent, el: HTMLElement): number {
    const w = el.offsetWidth,
      h = el.offsetHeight,
      x = (ev.pageX - el.offsetLeft - (w / 2) * (w > h ? (h / w) : 1)),
      y = (ev.pageY - el.offsetTop - (h / 2) * (h > w ? (w / h) : 1)),
      d = Math.round(Math.atan2(y, x) / 1.57079633 + 5) % 4;
    return d;
  }

  /**
   * Handle hover event
   * @param {MouseEvent} ev
   * @param {HTMLElement} el
   * @param {string} state
   */
  handleHover(ev: MouseEvent, el: HTMLElement, state: string): void {
    let direction = this.getDirection(ev, el),
      class_suffix = '';

    this.hoverClass = null;

    switch (direction) {
      case 0: class_suffix = '-top'; break;
      case 1: class_suffix = '-right'; break;
      case 2: class_suffix = '-bottom'; break;
      case 3: class_suffix = '-left'; break;
    }
    this.hoverClass = state + class_suffix;
  }

  /**
   * Setting options.
   * @param {HoverOption} option
   */
  setOption(option: HoverOption): void {
    this.duration = option.duration;
    this.timingFn = option.timingFn;
    this.perspective = option.perspective;
    this.className = option.className;
  }

}
