# Component MyComponent and Directive v-my-directive

[![npm](https://img.shields.io/npm/v/quasar-ui-imlabs-design-system.svg?label=quasar-ui-imlabs-design-system)](https://www.npmjs.com/package/quasar-ui-imlabs-design-system)
[![npm](https://img.shields.io/npm/dt/quasar-ui-imlabs-design-system.svg)](https://www.npmjs.com/package/quasar-ui-imlabs-design-system)

**Compatible with Quasar UI v2 and Vue 3**.


# Component MyComponent
> Short description of the component



# Directive v-my-directive
> Short description of the directive


# Usage

## Quasar CLI project


Install the [App Extension](../app-extension).

**OR**:


Create and register a boot file:

```js
import Vue from 'vue'
import Plugin from 'quasar-ui-imlabs-design-system'
import 'quasar-ui-imlabs-design-system/dist/index.css'

Vue.use(Plugin)
```

**OR**:

```html
<style src="quasar-ui-imlabs-design-system/dist/index.css"></style>

<script>
import { Component as MyComponent, Directive } from 'quasar-ui-imlabs-design-system'

export default {
  
  components: {
    MyComponent
  },
  
  
  directives: {
    Directive
  }
  
}
</script>
```

## Vue CLI project

```js
import Vue from 'vue'
import Plugin from 'quasar-ui-imlabs-design-system'
import 'quasar-ui-imlabs-design-system/dist/index.css'

Vue.use(Plugin)
```

**OR**:

```html
<style src="quasar-ui-imlabs-design-system/dist/index.css"></style>

<script>
import { Component as MyComponent, Directive } from 'quasar-ui-imlabs-design-system'

export default {
  
  components: {
    MyComponent
  },
  
  
  directives: {
    Directive
  }
  
}
</script>
```

## UMD variant

Exports `window.imlabs_design_system`.

Add the following tag(s) after the Quasar ones:

```html
<head>
  <!-- AFTER the Quasar stylesheet tags: -->
  <link href="https://cdn.jsdelivr.net/npm/quasar-ui-imlabs-design-system/dist/index.min.css" rel="stylesheet" type="text/css">
</head>
<body>
  <!-- at end of body, AFTER Quasar script(s): -->
  <script src="https://cdn.jsdelivr.net/npm/quasar-ui-imlabs-design-system/dist/index.umd.min.js"></script>
</body>
```
If you need the RTL variant of the CSS, then go for the following (instead of the above stylesheet link):
```html
<link href="https://cdn.jsdelivr.net/npm/quasar-ui-imlabs-design-system/dist/index.rtl.min.css" rel="stylesheet" type="text/css">
```

# Setup
```bash
$ yarn
```

# Developing
```bash
# start dev in SPA mode
$ yarn dev

# start dev in UMD mode
$ yarn dev:umd

# start dev in SSR mode
$ yarn dev:ssr

# start dev in Cordova iOS mode
$ yarn dev:ios

# start dev in Cordova Android mode
$ yarn dev:android

# start dev in Electron mode
$ yarn dev:electron
```

# Building package
```bash
$ yarn build
```

# Adding Testing Components
in the `ui/dev/src/pages` you can add Vue files to test your component/directive. When using `yarn dev` to build the UI, any pages in that location will automatically be picked up by dynamic routing and added to the test page.

# Adding Assets
If you have a component that has assets, like language or icon-sets, you will need to provide these for UMD. In the `ui/build/script.javascript.js` file, you will find a couple of commented out commands that call `addAssets`. Uncomment what you need and add your assets to have them be built and put into the `ui/dist` folder.

# Donate
If you appreciate the work that went into this, please consider [donating to Quasar](https://donate.quasar.dev).

# License
MIT (c) Eduardo Noronha <eduardo.noronha@imlabs.com.br>
