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
          vgAutohideCursorTime,
          originalCursor,
          hideTimeout,
          target;

        target = element;

        if (angular.isDefined(attrs.vgAutohideCursorTarget)) {
          target =  angular.element(element[0].getElementsByClassName(attrs.vgAutohideCursorTarget));
        }

        originalCursor = target.css('cursor');

        element.on('mousemove', function () {
          if (attrs.vgAutohideCursor === "false") {
            return;
          }

          if (!hideTimeout) {
            return;
          }

          $timeout.cancel(hideTimeout);
          hideTimeout = null;

          if (target.css('cursor') !== originalCursor) {
            target.css('cursor', originalCursor);
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
            target.css('cursor', 'none');
          }, autoHideTime);
        }, VG_AUTOHIDE_CURSOR_DEBOUNCE));
      };
    }
  ]);
