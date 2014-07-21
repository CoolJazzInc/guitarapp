define(function(require) {

    /**
     * Utility module that lets you import the most used modules in one go.
     */

    'use strict';

    var _dom = require('uni/utilities.dom'),
        _css = require('uni/utilities.css'),
        _event = require('uni/utilities.event'),
        _classlist = require('uni/utilities.element.classlist');

    return {
        Dom: _dom,
        Event: _event,
        Css: _css,
        Classlist: _classlist
    };
});
