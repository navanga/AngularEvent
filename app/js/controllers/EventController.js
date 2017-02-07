/**
 * Created by nwanigatunga on 7/02/17.
 */
'use strict';

eventsApp.controller('EventController',
    function EventController($scope) {

        $scope.sortorder = 'name',

        $scope.event = {
            name: 'Angular Boot Camp',
            date: '07/02/2017',
            time: '3:50 am',
            location: {
                address: '10/11 Glenvale Ave',
                city: 'Parklea',
                province: 'NSW'
            },
            imageUrl: '/img/angularjs-logo.png',
            sessions: [
                {
                    name: "Directives Masterclass",
                    creatorName: "Navanga Wanigatunga",
                    duration: "1 hr",
                    level: "Advanced",
                    abstract: "This is a few lines containing the abstract description",
                    upVoteCount: 0
                },
                {
                    name: "Scopes for fun and profit",
                    creatorName: "savanga Wanigatunga",
                    duration: "1 hr",
                    level: "Advanced",
                    abstract: "This is a few lines containing the abstract description",
                    upVoteCount: 0
                },
                {
                    name: "Well Behaved Controller",
                    creatorName: "bavanga Wanigatunga",
                    duration: "1 hr",
                    level: "Advanced",
                    abstract: "This is a few lines containing the abstract description",
                    upVoteCount: 0
                }
            ]
        }

        $scope.upVoteSession = function (session) {
            session.upVoteCount++;
        };

        $scope.downVoteSession = function (session) {
            session.upVoteCount--;
        }
    }
);