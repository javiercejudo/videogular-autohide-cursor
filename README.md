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

If you are using a theme, you might need to use `vg-autohide-cursor-target` to specify
via a class which child element(s) cursors to hide.

```html
<videogular vg-autohide-cursor="{{ config.autohideCursor.enabled }}"
            vg-autohide-cursor-time="{{ config.autohideCursor.time }}"
            vg-autohide-cursor-target="overlayPlayContainer"
            vg-stretch="config.stretch" vg-autoplay="config.autoPlay" vg-theme="config.theme.url">
    <video class="videoPlayer" preload="auto">
        <source ng-src="{{ video.src }}" type="{{ video.type }}">
    </video>
    <vg-overlay-play vg-play-icon="config.theme.playIcon">
      <div vg-autohide-cursor="{{ config.autohideCursor.enabled }}"
           vg-autohide-cursor-time="{{ config.autohideCursor.time }}"
           class="overlayPlayContainer">
        <div class="iconButton ng-binding">&#xe000;</div>
      </div>
    </vg-overlay-play>
</videogular>
```

Additionally, you will need to add the plugin as a dependency of your application:

```js
angular.module("myVideogularApp", [
  "com.2fdevs.videogular",
  "com.javiercejudo.videogular.plugins.autohide-cursor"
]);
```
