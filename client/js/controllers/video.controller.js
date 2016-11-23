myApp.controller('video-controller', function($scope, $timeout, userFactory, videoFactory, commentFactory, replyFactory){

    //declare variables
    $scope.videos = [];
    $scope.loggedin = null;

    //watch for user login status
    $scope.$watch(function(){
        return userFactory.userID;
    }, function(newValue, oldValue){
        $scope.loggedin = newValue;
    });

    //get videos on controller load
    videoFactory.getVideos(function(callback){
        $scope.videos = callback;
    });

    //toggle showing comments on view
    $scope.show_comments = function(index){
        if($scope.videos[index].commentDisplay != true){
            $scope.videos[index].commentDisplay = true;
        }else{
            $scope.videos[index].commentDisplay = false;
        }
    }

    //toggle show replies on the view
    $scope.show_replies = function(parent, index){
        if($scope.videos[parent]._comments[index].replyDisplay != true){
            $scope.videos[parent]._comments[index].replyDisplay = true;
        }else{
            $scope.videos[parent]._comments[index].replyDisplay = false;
        }
    }

    //toggle show form on the view
    $scope.show_form = function(parent, index){
        if($scope.videos[parent]._comments[index].formDisplay != true){
            $scope.videos[parent]._comments[index].formDisplay = true;
        }else{
            $scope.videos[parent]._comments[index].formDisplay = false;
        }
    }

    //submit a comment
    $scope.submitComment = function(id, index){
        //getting user id from factory
        userFactory.getUserId(function(callback){
            userId = callback;
            //request to create a comment
            commentFactory.create_comment({type: "video", comment: $scope.videos[index].comment, _video: id, _user: userId}, function(callback){
                //set the comment field to empty
                $scope.videos[index].comment = "";
                if(callback.errors){
                }else{
                    //depending on current state of the angular cycle, push in new comment
                    if ($scope.$$phase) {
                        $scope.videos[index]._comments.push(callback);
                    } else {
                        $scope.$apply(function(){
                            $scope.videos[index]._comments.push(callback);
                        });
                    }
                }
            });
        })
    }

    //submit a reply
    $scope.submitReply = function(id, parent, index){
        //get user id from factory
        userFactory.getUserId(function(callback){
            userId = callback;
            //request to create a reply
            replyFactory.create_reply({_user: userId, reply: $scope.videos[parent]._comments[index].reply, _comment: id}, function(callback){
                //set reply field to empty
                $scope.videos[parent]._comments[index].reply = "";
                if(callback.error){
                }else{
                    //depending on current state of the angular cycle, push  in new reply
                    if ($scope.$$phase) {
                        $scope.videos[parent]._comments[index]._replies.push(callback);
                    } else {
                        $scope.$apply(function(){
                            $scope.videos[parent]._comments[index]._replies.push(callback);
                        });
                    }
                }
            });
        })
    }

    //submit a dislike comment request
    $scope.dislike_comment = function(id, parent, index){
        //get user from factory
        userFactory.getUserId(function(callback){
            user_id = callback;
            //request to dislike comment
            commentFactory.dislike_comment({commentId: id, userId: user_id}, function(callback){
                //update view
                if(callback.errors){
                }else{
                    $scope.videos[parent]._comments[index].dislikes += 1;
                }
            });
        })
    }

    //submit a like comment request
    $scope.like_comment = function(id, parent, index){
        //get user from factory
        userFactory.getUserId(function(callback){
            user_id = callback;
            //request to like comment
            commentFactory.like_comment({commentId: id, userId: user_id}, function(callback){
                //update view
                if(callback.errors){
                }else{
                    $scope.videos[parent]._comments[index].likes += 1;
                }
            });
        })
    }

});
