<p align="center">
  <img src="https://avatars2.githubusercontent.com/u/71650913?s=200&v=4" height="100px"/>
  <br><br>
  <b>UI Devtools for TailwindCSS</b>
  <br><br/><br><br/>
  <i>This package is available only to my sponsors on GitHub <br/> Sponsors until it reaches it's sustainability goal. Enjoy, <br/> and thanks for the support!</i>
</p>

&nbsp;

&nbsp;

#### Install

```
yarn add --dev ui-devtools/tailwind
```

or

```
npm install --dev ui-devtools/tailwind
```

_Note: There is no @ in front of ui-devtools/tailwind. This will install the package from this github repository and not npm while it's private._

&nbsp;

Make sure you already have `tailwindcss` installed. If not, run

```
yarn add tailwindcss
```

&nbsp;

#### Usage

Three steps:

&nbsp;

&nbsp;

**01**

&nbsp;

Wrap your application root with `<Devtools>` (probably in src/index.js or pages/\_app.js). This will render the visual editor inside your application for dev environment.

&nbsp;

```
import { Devtools } from '@ui-devtools/tailwind'
import App from './App'

ReactDOM.render(
  <Devtools>
    <App />
  </Devtools>,
  document.getElementById('root')
)

```

&nbsp;

&nbsp;

**02**

&nbsp;

```
npx devtools-server -c path-to/tailwind.config.js
```

Run this command in the terminal to start the server that provides the theme and syncs changes back to source. You can skip the -c flag to use the default config.

&nbsp;

&nbsp;

**03**

&nbsp;

Lastly, to connect the two, add `@ui-devtools/tailwind/babel` to your babel config in plugins and restart your app.

```json5
{
  plugins: ['@ui-devtools/tailwind/babel']
}
```

&nbsp;

If you are using create-react-app, I recommend using [customize-cra](https://github.com/arackaf/customize-cra) to add the plugin. ([see example](https://github.com/ui-devtools/ui-devtools/blob/main/packages/example/config-overrides.js))

&nbsp;

#### Something's not working?

No worries, I'm here to help. Feel free to create an issue or reach out to me on [twitter](https://twitter.com/siddharthkp)/[email](https://sid.st/email).

&nbsp;

#### Upgrades

I'm constantly shipping upgrades, if you want to jump to a [specific release](https://github.com/ui-devtools/tailwind/releases), you can install that release by it's tag/version. Example:

&nbsp;

```
yarn add ui-devtools/tailwind#0.5.6
```

&nbsp;

#### Contribute / How does it work?

Hop over to the source code: [ui-devtools/ui-devtools](https://github.com/ui-devtools/ui-devtools)

&nbsp;
