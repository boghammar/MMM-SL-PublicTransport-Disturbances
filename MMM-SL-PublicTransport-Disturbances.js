/* MMM-SL-PublicTransport-Disturbances.js
 *
 * Magic Mirror module - Display public transport disturbances in Stockholm/Sweden. 
 * This module require the Magic Mirror module MMM-SL-PublicTransport
 * 
 * Magic Mirror
 * Module: MMM-SL-PublicTransport-Disturbances
 * 
 * Magic Mirror By Michael Teeuw http://michaelteeuw.nl
 * MIT Licensed.
 * 
 * Module MMM-SL-PublicTransport-Disturbances By Anders Boghammar
 * 
 * Notifications:
 */

Module.register("MMM-SL-PublicTransport-Disturbances", {

    // --------------------------------------- Define module defaults
    defaults: {
    },

    // --------------------------------------- Define required scripts
    getScripts: function () {
        return [
        ];
    },

    // --------------------------------------- Define required stylesheets
    getStyles: function() {
        return ["MMM-SL-PublicTransport.css", "font-awesome.css"];
    },

    // --------------------------------------- Start the module
    start: function () {
        Log.info("Starting module: " + this.name);
    },

    // --------------------------------------- Generate dom for module
    getDom: function () {
        var wrapper = document.createElement("div");
        return wrapper;
    },

    // --------------------------------------- Handle notifications
    notificationReceived: function (notification, payload, sender) {
        Log.info('Received notification: ' + notification);
    },

})