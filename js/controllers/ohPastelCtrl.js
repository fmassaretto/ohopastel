angular.module("ohPastel").controller("ohPastelCtrl", function ($scope) {
    $scope.tipoPasteis = [
      { tipo: "Carne", preco: 2 },
      { tipo: "Frango", preco: 1.50 },
      { tipo: "Queijo", preco: 1 }
    ];

    $scope.pedidos = [
      { nome: "Joao", dinheiro: 4, tipoPastel: { tipo: "Carne", preco: 2 }, troco: 2 },
      { nome: "Maria", dinheiro: 3, tipoPastel: { tipo: "Frango", preco: 1.50 }, troco: 1.50 },
      { nome: "Fabio", dinheiro: 5, tipoPastel: { tipo: "Carne", preco: 2 }, troco: 3 },
      { nome: "Pedro", dinheiro: 1, tipoPastel: { tipo: "Queijo", preco: 1 }, troco: 0 }
    ];

    $scope.adicionarPedido = function (pedido) {
        $scope.pedidos.push(angular.copy(pedido));
        delete $scope.pedido;
        $scope.pedidoForm.$setPristine();
    };

    $scope.apagarPedido = function (pedidos) {
        $scope.pedidos = $scope.pedidos.filter(function (pedido) {
            if (!pedido.selecionado) return pedido;
        });
    };

    $scope.checkTroco = function (pedido) {
        var dinherioPago = pedido.dinheiro;
        var custoPastel = pedido.tipoPastel.preco;
        var troco = dinherioPago - custoPastel;

        if (troco < 0 || troco == NaN || troco == null) return true;

        pedido.troco = troco;
        return false;
    };

    $scope.mostraTroco = function (pedido) {
        if (pedido.troco >= 0) return pedido.troco;
    };

    $scope.isPedidoSelecionado = function (pedidos) {
        return pedidos.some(function (pedido) {
            return pedido.selecionado;
        });
    };
});