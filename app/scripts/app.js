"use strict";
angular.module("ngNlDemo", [
        "ngRoute",
        "ngAnimate",
        "com.2fdevs.videogular",
        "com.2fdevs.videogular.plugins.controls",
        "com.2fdevs.videogular.plugins.overlayplay",
        "com.2fdevs.videogular.plugins.buffering",
        "com.2fdevs.videogular.plugins.poster"
    ])
    .config(
        ["$routeProvider", function config($routeProvider) {
            $routeProvider
                .when("/", {
                    templateUrl: "views/main.html",
                    controllerAs: "controller",
                    controller: "MainCtrl",
                    resolve: {
                        videoData: ["VideoProvider", function loadVideoData(VideoProvider) {
                            return VideoProvider.loadVideo("data/video.json");
                        }]
                    }
                })
                .otherwise({
                    redirectTo: "/"
                }
            );
        }]
    );
