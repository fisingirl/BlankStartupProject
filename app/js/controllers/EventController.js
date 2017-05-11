System.register(["angular"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var angular, DemoApp;
    return {
        setters: [
            function (angular_1) {
                angular = angular_1;
            }
        ],
        execute: function () {
            /**
             * Created by fayigaf on 5/10/2017.
             */
            (function (DemoApp) {
                'use strict';
                var EventsController = (function () {
                    function EventsController() {
                    }
                    return EventsController;
                }());
                DemoApp.EventsController = EventsController;
                angular.module('demoApp')
                    .controller('eventsController', EventsController);
            })(DemoApp || (DemoApp = {}));
        }
    };
});
//# sourceMappingURL=EventController.js.map