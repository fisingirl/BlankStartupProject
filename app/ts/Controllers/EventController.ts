import angular = require("angular");
/**
 * Created by fayigaf on 5/10/2017.
 */
namespace DemoApp {
    'use strict';

    export class EventsController {

        //public static $inject: string[] = ['$state'];


    }

    angular.module('demoApp')
        .controller('eventsController', EventsController);
}