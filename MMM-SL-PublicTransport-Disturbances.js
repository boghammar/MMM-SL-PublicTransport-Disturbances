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

        if (notification == 'MMM-SL-PublicTransport-DEPARTURES') {
            this.currentDepartures = payload;

            Log.info('StopPointDeviations:');
            for (var is = 0; is < this.currentDepartures.length; is++) {
                if (this.currentDepartures[is].StopPointDeviations!= null) Log.info(this.currentDepartures[is].StopPointDeviations);
                for (var ix = 0; ix < this.currentDepartures[is].departures.length; ix++) {
                    var dep = this.currentDepartures[is].departures[ix];
                    if (dep.Deviations != null) Log.info(dep.Deviations);
                }
            }
        }
    },

})