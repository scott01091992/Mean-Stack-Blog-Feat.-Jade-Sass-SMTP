myApp.config(function ($routeProvider){
  $routeProvider
    .when('/',{
      templateUrl: '../partials/landing.html'
    })
    .when('/home',{
      templateUrl: '../partials/landing.html'
    })
    .when('/articles',{
      templateUrl: '../partials/articles.html'
    })
    .when('/about',{
      templateUrl: '../partials/about.html'
    })
    .when('/contact',{
      templateUrl: '../partials/contact.html'
    })
    .when('/videos',{
      templateUrl: '../partials/video.html'
    })
    .when('/dev', {
        templateUrl: '../partials/dev.html'
    })
    .otherwise({
      redirectTo: '/'
    })
});
