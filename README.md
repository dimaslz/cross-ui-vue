# CrossUI Vue
[WIP] Wrapper to easy use for [CrossUI Web Components](https://github.com/dimaslz/cross-ui-core) in your Vue applications.

**Remember:** At the moment, CrossUI has TailwindCSS dependency.

## Installation
npm users: `npm install @cross-ui/vue`

yarn users: `yarn add @cross-ui/vue`

Is necessary to add `tailwind.config.js` and `postcss.config.js` config.

`npx tailwindcss init -p`

Now, in your main module, commonly `main.js` file (check [`/playground/src/main.js`](./playground/src/main.js))
```javascript
[...]
import CrossUIVueSetup from '@cross-ui/vue/setup';

Vue.use(CrossUIVueSetup);
[...]
```

And in your main css file, for example styles.scss (in playground project, you can see it in [`/playground/src/App.vue`](/playground/src/App.vue) in `<style lang="scss">`)
```scss
@import '@cross-ui/core/dist/cross-ui/cross-ui';
```

## Author
```js
{
	name: "Dimas López",
	role: "FullStack Software development",
	alias: "dimaslz",
	twitter: "https://twitter.com/dimaslz",
	site: "https://dimaslz.dev",
	linkedin: "https://www.linkedin.com/in/dimaslopezzurita"
}
```