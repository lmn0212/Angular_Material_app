/**
 * Created by User on 04.12.16.
 */
(function(){
    angular.module('activities').controller('activityCntrl', ActivityCntrl);
    /**
     * @param $scope
     * @param $mdSidenav
     * @param $reflectionService
     * @constructor
     */

   function ActivityController(activityService, $mdSidenav, $mdBottomSheet, $log ){
        var self = this;

        self.selected = null;
        self.activities = [];
        self.selectActivity = selectActivity;
        self.toggleList = toggleActivitiesList;
        self.share = share;

        //load all activities

        activityService
            .loadAllActivities()
            .then(function (activities) {
                self.activities = [].concat(activities);
                self.selected = activities[0];
            });
        function toggleActivitiesList() {
            $mdSidenav('left').toggle();
        }
        
        function selectActivity(activity) {
            self.selected = angular.isNumber(activity) ? $scope.activities[activity] : activity;
                console.log('hello')
        }
    }
})
