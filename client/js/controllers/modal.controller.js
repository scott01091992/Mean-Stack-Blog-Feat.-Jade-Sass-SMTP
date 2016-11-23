myApp.controller('modal-controller', function($scope, userFactory){

    //declare variables
    $scope.register = {};
    $scope.login = {};

    $scope.login_user = function(){
        //clear previous result message
        $scope.login.success = "";
        $scope.login.error = "";
        //login attempt
        userFactory.login_user({email: $scope.login.email, password: $scope.login.password}, function(callback){
            if(callback.success){
                //clear form display success message for half a second, then close the modal
                $scope.login.email = "";
                $scope.login.password = "";
                $scope.login.success = "Successfully Logged In";
                setTimeout(function () {
                    $scope.showlogin();
                }, 700);
            }else{
                //leave input fields intact and display error
                $scope.login.error = "Incorrect Password or Username";
            }
        });
    }

    $scope.register_user = function(){
        //clear previous result message
        $scope.register.success = "";
        $scope.register.errors = "";
        //validation check -> password matches confirm password
        if($scope.register.password == $scope.register.confirm){
            //register attempt
            userFactory.register_user({name: $scope.register.name, email: $scope.register.email, password: $scope.register.password}, function(output){
                //validation check
                if(output.errors){
                    $scope.register.errors = "Register Failed";
                }else{
                    //clear form display success message for half a second, then close the modal
                    $scope.register.name = "";
                    $scope.register.email = "";
                    $scope.register.password = "";
                    $scope.register.confirm = "";
                    $scope.register.success = "Successfully Registered";
                    setTimeout(function () {
                        $scope.showregister();
                    }, 500);
                }
            })
        }else{
            //display error
            $scope.register.errors = "Passwords did not match";
        }
	};

    $scope.showregister = function(){
        //get register form modal -> toggle display block or display none
        var reg = document.getElementById('register-overlay');
        if(reg.style.display != 'block'){
            reg.style.display = "block";
        }else{
            reg.style.display = 'none';
        }
    }

    $scope.showlogin = function(){
        //get login form modal -> toggle display block or display none
        var log = document.getElementById('login-overlay');
        if(log.style.display != 'block'){
            log.style.display = "block";
        }else{
            log.style.display = 'none';
        }
    }

});
