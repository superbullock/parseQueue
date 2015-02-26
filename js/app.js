var app = angular.module('parseQ', []);

app.config(function ($httpProvider) {
    $httpProvider.interceptors.push('httpRequestInterceptor')
})