# videogular-autohide-cursor

Videogular Autohide-Cursor plugin

## How to install

Install [Videogular](http://www.videogular.com/) `Hide Cursor` plugin with Bower:

`bower install videogular-autohide-cursor`

## How to use

Add the vg-autohide-cursor directive to your `videogular` element:

```html
<videogular vg-autohide-cursor="config.autohideCursor.enabled" vg-autohide-cursor-time="config.autohideCursor.time">
	<video class='videoPlayer' preload='metadata'>
		<source type="video/type" src="path/to/video" />
	</video>
</videogular>
```

Additionally, you will need to add the module and videogular to your application:

```js
"use strict";
angular.module("videogularApp",
    [
        "com.2fdevs.videogular",
        "com.javiercejudo.videogular.plugins.autohide-cursor"
    ]
);
```
