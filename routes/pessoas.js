/**
 * Created by Glaicon on 21/04/2016.
 */

angular.module('pessoas', ['ngRoute'])
    .config(function ($routeProvider) {
        $routeProvider.when('/', {
            templateUrl: 'listar.html'
        }).when('/pessoa/adicionar', {
            templateUrl: 'adicionar.html',
            controller: 'CtrlAdicionar'
        }).when('/pessoa/:index', {
            templateUrl: 'editar.html',
            controller: 'CtrlEditar'
        });
    })
    .controller('CtrlPessoas', ['$scope', function ($scope) {
        $scope.pessoas = [
            {nome: 'Maria', cidade: 'S�o Paulo'},
            {nome: 'Pedro', cidade: 'Salvadro'},
            {nome: 'Jo�o', cidade: 'Parna�ba'},
            {nome: 'Lucas', cidade: 'S�o Bonif�cio'}
        ];

        $scope.remover = function (index) {
            $scope.pessoas.splice(index, 1);
        }
    }])
    .controller('CtrlAdicionar', ['$scope', function ($scope) {
        $scope.add = function () {
            $scope.pessoas.push($scope.pessoa);
            $scope.pessoa = '';
            $scope.result = "Registro adicionado com sucesso!";
        };
    }])
    .controller('CtrlEditar', ['$scope', '$routeParams', function ($scope, $routeParams) {
        $scope.pessoa = $scope.pessoas[$routeParams.index]
    }]);

