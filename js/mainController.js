angular.module('parseQ').controller('MainController', function ($scope, parseService) {
    $scope.postQuestion = function () {
        parseService.makeQuestion($scope.questionInput).then(function (data) {
            console.log(data);
            getQuestions();

        });
        $scope.questionInput = '';
    };

    getQuestions = function () {
        parseService.getQuestions().then(function (data) {
            $scope.questions = data;
        });
    };

    getQuestions();

    $scope.updateQuestion = function (questionObj) {
        parseService.updateQuestion(questionObj).then(function (data) {
            getQuestions();
        })
    }

    $scope.deleteQuestion = function (questionObj) {
        parseService.deleteQuestion(questionObj).then(function (data) {
            getQuestions();
        })
    }
})