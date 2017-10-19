var app = angular.module('myApp', []);
app.controller('tarefasCtrl', function ($scope) {
    $scope.listaTarefas = [];

    $(mascara = function (t, mask) {
        var i = t.value.length;
        var saida = mask.substring(1, 0);
        var texto = mask.substring(i)
        if (texto.substring(0, 1) != saida) {
            t.value += texto.substring(0, 1);
        }
    });

    $(verificarLista = function () {
        if ($scope.listaTarefas.length === 0) {
            $('.linhaAlert').css("display", "block");
            $('.linhaTabela').css("display", "none");
        }
    });

    $scope.addTarefa = function () {
        $('.linhaAlert').css('display', 'none');
        $('.linhaTabela').css("display", "block");
        $scope.listaTarefas.push({nome: $scope.nomeTarefa, prazo: $scope.prazoTarefa, done: false});
        $scope.nomeTarefa = "";
        $scope.prazoTarefa = "";
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