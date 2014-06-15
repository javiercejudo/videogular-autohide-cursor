# videogular-autohide-cursor

Videogular Autohide-Cursor plugin

## How to install

Install [Videogular](http://www.videogular.com/) `Hide Cursor` plugin with Bower:

`bower install --save videogular-autohide-cursor`

Add the plugin and ng-debounce (installed by the command above as well) to your loaded scripts:

```html
<script src="bower_components/ng-debounce/angular-debounce.js"></script>
<script src="bower_components/videogular-autohide-cursor/hide-cursor.js"></script>
```

## How to use

Add the `vg-autohide-cursor` directive to your `videogular` element:

```html
<videogular vg-autohide-cursor="{{ config.autohideCursor.enabled }}"
            vg-autohide-cursor-time="{{ config.autohideCursor.time }}">
  <video class='videoPlayer' preload='metadata'>
    <source type="video/type" src="path/to/video" />
  </video>
</videogular>
```

Use the optional `vg-autohide-cursor-time` attribute to customise the delay
for hiding the cursor. The default is 1 second.

Additionally, you will need to add the plugin as a dependency of your application:

```js
angular.module("myVideogularApp", [
  "com.2fdevs.videogular",
  "com.javiercejudo.videogular.plugins.autohide-cursor"
]);
```
