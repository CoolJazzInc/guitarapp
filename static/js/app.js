
define(function(require) {

    'use strict';

    var GLOBAL = require('global'),
        Metronome = require('components/metronome'),
        ChordProgression = require('components/chordprogression');

    var EVENT = {

    };

    /**
     *
     */
    var App = function() {
        this.init.apply(this, arguments);
    };

    App.prototype.init = function() {
        new Metronome();
    };


    return App;

});
