/**
 * Created by danielbullock on 2/25/15.
 */
angular.module('parseQ').factory('parseService', function (httpRequestInterceptor, $http, $q) {
    return {
        url: 'https://api.parse.com/1/classes/question',
        makeQuestion: function (question) {
            var deferred = $q.defer();
            question = {
                text: question,
                status: 'red'
            }
            $http.post(this.url, question).then(function (response) {
                deferred.resolve(response);
            });
            return deferred.promise;
        },

        getQuestions: function () {
            var deferred = $q.defer();
            $http.get(this.url + '/').then(function (response) {
                deferred.resolve(response.data.results);
            })
            return deferred.promise;
        },

        updateQuestion: function (question) {
            var deferred = $q.defer();
            question.status = 'yellow'
            $http.put(this.url + '/' + question.objectId, question).then(function (response) {
                deferred.resolve(response);

            })
            return deferred.promise;
        },

        deleteQuestion: function (question) {
            var deferred = $q.defer();
            $http.delete(this.url + '/' + question.objectId).then(function (response){
                deferred.resolve(response);
            });
            return deferred.promise;
        }
    }
})