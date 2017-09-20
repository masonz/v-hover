# v-hover
[![npm version](https://badge.fury.io/js/v-hover.svg)](https://badge.fury.io/js/v-hover)
> Direction-aware hover effect for Vue2.0, write by typescript.  [Demo](https://masonz.github.io/v-hover/)

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
    <vhover-item></vhover-item>
    <vhover-item></vhover-item>
    ...
</vhover-list>
```

you can custom `overlay` slot in `vhover-item` by:

```HTML
<vhover-item>
  <div slot="overlay">some thing...</div>
</vhover-item>
```

## Options

| Name        | Type          | Default  | Description               |
| ---         | ---           | ---      | ---                       |
| duration    | String        | "300ms"  | animation-duration        |
| className   | String        | "vhover" | `vhover-item` class       |
| timingFn    | String        | "ease"   | animation-timing-function |
| perspective | Boolean       | false    | perspective               |

## License

MIT © masonz
