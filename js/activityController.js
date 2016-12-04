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

    function ActivityCntrl( activityService, mdSidenav, mdBottomnav ){
        var self =$this;
        self.selected = null;
        self.activities = [];
        self.selectActivity = selectActivity;
        self.toggleList = toggleActivitiesList;
        self.share = share;

    }
})