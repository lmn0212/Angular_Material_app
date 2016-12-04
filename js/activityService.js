/**
 * Created by User on 04.12.16.
 */
'use strict';
angular.module('activities')
    .service('activityService', ActivityService);

function ActivityService($q){
    var activities = [
        {
            name: 'Things to buy',
            reflection:'icons/SVG/sale.svg',
            content: 'Today sales are in: Nike, Adidas, Zara'
        },
        {
            name: 'Movies to see',
            reflection:'icons/SVG/camera.svg',
            content: 'Today new movies are: "Moana", "Passengers", "Doctor Strange" '
        },
        {
            name: 'Music to listen',
            reflection:'icons/SVG/headphones.svg',
            content: 'Today hot artist are: "Metallica", "Justin Bieber", "Shakira" '
        },
        {
            name: 'Games to play',
            reflection:'icons/SVG/gamepad.svg',
            content: 'Today new games are: "Dishonored", "Civilization V", "Mob Fights" '
        }
    ]


}