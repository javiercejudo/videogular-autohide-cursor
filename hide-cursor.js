"use strict";

angular.module("com.javiercejudo.videogular.plugins.autohide-cursor", [])

  .constant('VG_AUTOHIDE_CURSOR_DEFAULT_TIME', 1000)

  .directive("vgAutohideCursor", [
    '$timeout', 'VG_AUTOHIDE_CURSOR_DEFAULT_TIME',
    function ($timeout, VG_AUTOHIDE_CURSOR_DEFAULT_TIME) {
      return function (scope, element, attrs) {
        var autoHideTime = VG_AUTOHIDE_CURSOR_DEFAULT_TIME, hideTimeout, vgAutohideCursorTime;

        element.on('mousemove', function () {
          element.css('cursor', 'auto');
          $timeout.cancel(hideTimeout);

          if (attrs.vgAutohideCursor === "false") {
            return;
          }

          if (angular.isDefined(attrs.vgAutohideCursorTime)) {
            vgAutohideCursorTime = attrs.vgAutohideCursorTime;

            if (parseInt(vgAutohideCursorTime, 10).toString() === vgAutohideCursorTime) {
              autoHideTime = parseInt(vgAutohideCursorTime, 10);
            }
          }

          hideTimeout = $timeout(function () {
            element.css('cursor', 'none');
          }, autoHideTime);
        });
      };
    }
  ]);
