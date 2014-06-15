"use strict";

angular.module("com.javiercejudo.videogular.plugins.autohide-cursor", ['debounce'])

  .constant('VG_AUTOHIDE_CURSOR_TIME_DEFAULT', 1000)
  .constant('VG_AUTOHIDE_CURSOR_DEBOUNCE', 50)

  .directive("vgAutohideCursor", [
    '$timeout', 'debounce', 'VG_AUTOHIDE_CURSOR_TIME_DEFAULT', 'VG_AUTOHIDE_CURSOR_DEBOUNCE',
    function ($timeout, debounce, VG_AUTOHIDE_CURSOR_TIME_DEFAULT, VG_AUTOHIDE_CURSOR_DEBOUNCE) {
      return function (scope, element, attrs) {
        var
          autoHideTime = VG_AUTOHIDE_CURSOR_TIME_DEFAULT,
          originalCursor = element.css('cursor'),
          vgAutohideCursorTime,
          hideTimeout;

        element.on('mousemove', function () {
          if (attrs.vgAutohideCursor === "false") {
            return;
          }

          if (!hideTimeout) {
            return;
          }

          $timeout.cancel(hideTimeout);
          hideTimeout = null;

          if (element.css('cursor') !== originalCursor) {
            element.css('cursor', originalCursor);
          }
        })

        element.on('mousemove', debounce(function () {
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
        }, VG_AUTOHIDE_CURSOR_DEBOUNCE));
      };
    }
  ]);
