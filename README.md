# v-hover
[![NPM version][npm-image]][npm-url]
>  Direction-aware hover effect for Vue2.0.

## Installation

```bash
npm install v-hover -S
```

## How to use
Include plugin in your entry file e.g. `main.js`.

```JavaScript
import VHover from 'v-hover'

Vue.use(VHover)
```

in template:

```HTML
<vhover-list>
  <vhover-item imageUrl="/assets/img/vue.png" link="http://www.vuejs.org"></vhover-item>
  <vhover-item imageUrl="/assets/img/vue.png" link="http://www.vuejs.org"></vhover-item>
  <vhover-item imageUrl="/assets/img/vue.png" link="http://www.vuejs.org"></vhover-item>
</vhover-list>
```
you can custom `overlay` slot in `vhover-item` by:

```HTML
<vhover-item>
  <div slot="overlay">some thing...</div>
</vhover-item>
```

## Options
| Name      | Type          | Default  | Description               |
| ---       | ---           | ---      | ---                       |
| duration  | String        | "300ms"  | animation-duration        |
| className | String        | "vhover" | `vhover-item` class       |
| timingFn  | String        | "ease"   | animation-timing-function |

## License

MIT © masonz

[npm-image]: https://badge.fury.io/js/v-hover
[npm-url]: https://npmjs.org/package/v-hover
