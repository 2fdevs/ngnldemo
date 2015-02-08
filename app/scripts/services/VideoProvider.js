angular.module("ngNlDemo")
    .service("VideoProvider", ["$q", "$http", "$sce",
        function ($q, $http, $sce) {
            var defer = $q.defer();

            this.loadVideo = function loadVideo(url) {
                $http.get(url).then(
                    this.onLoadVideo.bind(this),
                    this.onLoadVideoError.bind(this)
                );

                return defer.promise;
            };

            this.onLoadVideo = function onLoadVideo(response) {
                 var videos = [];

                for (var i=0, l=response.data.sources.length; i<l; i++) {
                    videos.push({src: $sce.trustAsResourceUrl(response.data.sources[i].src), type: response.data.sources[i].type});
                }

                response.data.sources = videos;

                defer.resolve(response.data);
            };

            this.onLoadVideoError = function onLoadVideoError(error) {
                defer.reject(error);
            };
        }
    ]);
