﻿define('model.location', ['config', 'ko'], function(config, ko) {
    var Location = function () {
        var self = this;
        self.id = ko.observable();
        self.name = ko.observable();
        self.isNullo = false;
        self.isSelected = ko.observable();
        return self;
    };
    Location.Nullo = new Location().id(0).name('No Location');
    Location.Nullo.isNullo = true;

    return Location;
});