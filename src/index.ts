import * as components from './components';

const Plugin = {
  install(Vue, options = {}) {

    if (this.installed) { return; }
    this.installed = true;

    Vue.component('vhover-item', components.VHover);
    Vue.component('vhover-list', components.VHoverList);
  },
};

if (typeof window !== 'undefined' && window['Vue']) {
  window['Vue'].use(Plugin);
}

export default Plugin;

