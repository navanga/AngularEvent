'use strict';

eventsApp.controller('EditEventController',
    function EditEventController($scope) {

        $scope.saveEvent = function (event, newEventForm) {
            if (newEventForm.isValid) {
                window.alert(event.name + " saved!!");
            }
        };

        $scope.cancelEvent = function () {
            window.location = "/EventDetails.html";
        };
    }
);