'use strict';
angular.module('ngNlDemo').controller('MainCtrl',
    ["videoData",
        function videoData(videoData) {
            this.video = videoData;
            this.quizes = videoData.quizes;

            this.answers = [];

            this.quiz = this.quizes[0];

            this.onPlayerReady = function onPlayerReady(API) {
                this.API = API;
            };

            this.onUpdateTime = function onUpdateTime(currentTime, totalTime) {
                if (this.quiz && currentTime > this.quiz.showAt) {
                    this.API.pause();

                    this.quiz.show = true;
                }
            };

            this.onSendForm = function onSendForm() {
                if (this.quiz.correct == this.answers[this.answers.length - 1]) {
                    this.API.play();
                    this.quizes.shift();
                    this.quiz = this.quizes[0];
                }
            };
        }]
    );
