angular.module('userApp', ['userRoutes','userCtrl','mainController','managementController'])

.config(function ($httpProvider) {
    $httpProvider.interceptors.push('AuthInterceptors');
});