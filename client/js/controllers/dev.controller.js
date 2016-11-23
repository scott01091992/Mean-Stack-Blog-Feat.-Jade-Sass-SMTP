myApp.controller('dev-controller', function($scope, devFactory){

    $scope.createArtboard = function(){
        devFactory.createArtboard({
            title: $scope.artboardtitle,
            imgUrl: './../assets/Images/'+$scope.artboardimage,
            description: $scope.artboarddescription,
            tags: $scope.artboardtags.split(', ')
        }, function(callback){
            if(callback){
                console.log(callback);
            }else{
                console.log('no response');
            }
        });
    }

    $scope.createVideo = function(){
        devFactory.createVideo({
            title: $scope.videotitle,
            media: $scope.videourl,
            description: $scope.videodescription,
            tags: $scope.videotags.split(', ')
            }, function(callback){
            if(callback){
                console.log(callback);
            }else{
                console.log('no response');
            }
        });
    }

    $scope.createQuote = function(){
        devFactory.createQuote({
            quote: $scope.quote
        }, function(callback){
            if(callback){
                console.log(callback);
            }else{
                console.log('no response');
            }
        })
    }

    $scope.createUpcomingArray = function(){
        cont = $scope.upcoming;
        console.log($scope.upcoming);
        contarray = cont.split(', ');
        console.log(contarray);
        devFactory.createUpcomingArray({
            content: contarray
        }, function(callback){
            if(callback){
                if(callback){
                    console.log(callback);
                }else{
                    console.log('no response');
                }
            }
        })
    }

});
