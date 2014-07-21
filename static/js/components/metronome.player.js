define(function(require) {

    'use strict';

    var U = require('uni/unicorn.core'),
        Obj = require('uni/utilities.object'),
        Mustache = require('mustache'),
        Templates = require('templates/mustache.templates');

    var DEFAULT = {
            playerRoot: 'metronome--audio-player'
        },

        SETTINGS = {};


    var Player = function() {
        this.init.apply(this, arguments);
    };

    Player.prototype.init = function(metronome, settings) {
        Obj.extend(SETTINGS, DEFAULT, settings);

        var playerRoot = _Dom.getId(SETTINGS.playerRoot);
        if (playerRoot) {
            this.domPlayer = U.Dom.createFromHtml(Mustache.to_html(Templates.player));
            U.Dom.append(this.domPlayer);
            U.Event.on(metronome.EVENT.TICK, this.playSound.bind(this));
        }
    };

    Player.prototype.playSound = function() {
        this.domPlayer.play();
    };


    return Player;
});
