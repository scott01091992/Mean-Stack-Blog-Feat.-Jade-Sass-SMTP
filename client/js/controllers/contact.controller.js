myApp.controller('contact-controller', function($scope, messageFactory){

    $scope.send_message = function(){
        //clear status messages
        $scope.name_error = '';
        $scope.subject_error = '';
        $scope.email_error = '';
        $scope.message_error = '';
        $scope.success_message = '';
        //attempt to save message
        messageFactory.send_message({name: $scope.name, email: $scope.email, subject: $scope.subject, message: $scope.message}, function(callback){
            //validation response -> set error display messages
            if(callback.errors){
                if(callback.errors.name){
                    $scope.name_error = callback.errors.name.message;
                }
                if(callback.errors.subject){
                    $scope.subject_error = callback.errors.subject.message;
                }
                if(callback.errors.email){
                    $scope.email_error = callback.errors.email.message;
                }
                if(callback.errors.message){
                    $scope.message_error = callback.errors.message.message;
                }
            }else{
                //clear inputs and return status message
                $scope.name = '';
                $scope.email = '';
                $scope.message = '';
                $scope.subject = '';
                $scope.success_message = 'Thanks for contacting me!';
            }
        });
    }

});
