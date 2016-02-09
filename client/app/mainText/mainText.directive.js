'use strict';

angular.module('portfolioApp')
    .directive('mainText', function () {
        return {
//            templateUrl: 'app/mainText/mainText.html',
            restrict: 'EA',
//            replace:     true,
            link:     function (scope, element, attrs) {

                var userAg = navigator.userAgent,
                    browserPrefix = "";

                if (userAg.indexOf('Chrome') > -1 || userAg.indexOf('Safari') > -1) {
                    browserPrefix = "-webkit-";
                } else if (userAg.indexOf("Opera") > -1) {
                    browserPrefix = "-o-";
                } else if (userAg.indexOf('Firefox') > -1) {
                    browserPrefix = "-moz-";

                }

//                if(window.innerWidth > window.innerHeight && window.innerHeight < 414){
//                    $(element).children().css('font-size','1.5em');
//                }

                $(document).on('mousemove', function (event) {
                    var cx = Math.ceil(window.innerWidth / 2.0),
                        cy = Math.ceil(window.innerHeight / 2.0),
                        dx = event.pageX - cx,
                        dy = event.pageY - cy,
                        tiltx = (dy / cy),
                        tilty = -(dx / cx),
                        radius = Math.sqrt(Math.pow(tiltx, 2) + Math.pow(tilty, 2)),
                        degree = (radius * 20),
                        shadx = degree * tiltx/2.5,
                        shady = degree * tilty/2.5;

                    $(element).children().css(browserPrefix + 'transform', 'rotate3d(' + tiltx + ',' + tilty + ',0,' + degree + 'deg)');
                    if (dx > cx) {
                        $(element).children().css('text-shadow', +(-shady)+'px'+(-shadx)+'px 0px rgb(14, 14, 16)')
                    }else{
                        $(element).children().css('text-shadow', +shady+'px '+(-shadx)+'px 0px rgb(14, 14, 16)')
                    }

                });

                $(document).on('mouseleave', function (event) {
                    $(element).children().css(browserPrefix + 'transform', 'rotate3d(0,0,0,0deg)');
                    $(element).children().css('text-shadow', '0px 0px 0px rgba(150, 157, 173, 1)')
                })
            }
        };
    });