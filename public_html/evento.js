var app = angular.module('myApp', []);
app.controller('tarefasCtrl', function ($scope) {
    $scope.listaTarefas = [];

    $(verificarLista = function () {
        if ($scope.listaTarefas.length === 0) {
            $('.linhaAlert').css("display", "block");
            $('.linhaTabela').css("display", "none");
        }
    });

    $scope.addTarefa = function () {
        $('.linhaAlert').css('display', 'none');
        $('.linhaTabela').css("display", "block");
        $scope.listaTarefas.push({nome: $scope.inputNomeTarefa, prazo: $scope.inputPrazoTarefa, done: false});
        $scope.inputNomeTarefa = "";
        $scope.inputPrazoTarefa = "";
    };

    $scope.remove = function () {
        var oldList = $scope.todoList;
        $scope.todoList = [];
        angular.forEach(oldList, function (x) {
            if (!x.done)
                $scope.todoList.push(x);
        });
    };
});