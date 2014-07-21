
define(function(require) {

    'use strict';

    var U = require('uni/unicorn.core'),
        Obj = require('uni/utilities.object'),
        SoundPlayer = require('components/metronome.player');

    var EVENT = {
            TICK: 'metronome.tick',
            STOP: 'metronome.stop',
            BPM_CHANGE: 'metronome.bpm.change'
        },

        DEFAULT = {
            bpm: 60
        },

        SETTINGS = {};

    /**
     *
     */
    var Metronome = function() {
        this.init.apply(this, arguments);
    };

    Metronome.prototype.init = function(settings) {
        Obj.extend(SETTINGS, DEFAULT, settings);
        this.EVENT = EVENT;
        this.setBpm(SETTINGS.bpm);
        new SoundPlayer(this);
    };

    Metronome.prototype.start = function() {
        this.ticker = setInterval(this.tick.bind(this), _bpmToMs.bind(this, this.bpm));
    };

    Metronome.prototype.stop = function() {
        clearInterval(this.ticker);
        U.Event.fire(this, EVENT.STOP);
    };

    Metronome.prototype.tick = function() {
        U.Event.fire(this, EVENT.TICK);
    };

    Metronome.prototype.setBpm = function(bpm) {
        this.bpm = bpm;
        U.Event.fire(this, EVENT.BPM_CHANGE, bpm);
    };

    /**
     * Convert beats per minute to milliseconds for each 'beat'.
     * @param {Number} bpm Beats per minute.
     * @return {Number} Milliseconds for each beat
     * @private
     */
    var _bpmToMs = function(bpm) {
        return 3600 / bpm;
    };


    return Metronome;
});
