# videogular-hide-cursor

Videogular `Hide Cursor` plugin

## Install

Install [Videogular](http://www.videogular.com/) `Hide Cursor` plugin with Bower:

`bower install videogular-hide-cursor`

## How to use
Add the vg-hide-cursor directive to your `videogular` element:

```html
<videogular vg-autohide-cursor="config.hideCursor.enabled" vg-hide-cursor-time="config.hideCursor.time">
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
        "com.javiercejudo.videogular.plugins.hide-cursor"
    ]
);
```
