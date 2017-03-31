angular.module("ohPastel").controller("ohPastelCtrl", function ($scope) {
    $scope.tipoPasteis = [
      { tipo: "Carne", preco: 5 },
      { tipo: "Queijo", preco: 5 },
      { tipo: "Pizza", preco: 5 },
      { tipo: "Frango c/ Catupiry", preco: 5 },
      { tipo: "Palmito", preco: 5 },
      { tipo: "Calabresa c/ Queijo", preco: 5 },
      { tipo: "Lombo c/ Queijo e Catupiry", preco: 5 },
      { tipo: "Carne c/ Queijo", preco: 5 },
      { tipo: "Jabá c/ Queijo", preco: 5 },
      { tipo: "Escarola c/ Queijo e Catupiry", preco: 5 },
      { tipo: "Bacalhau c/ Purê de Batata", preco: 5 },
      { tipo: "Bacon c/ Queijo", preco: 5 },
      { tipo: "Camarão", preco: 5 },
      { tipo: "Atum c/ Queijo e Ervilha", preco: 5 },
      { tipo: "Especial", preco: 5 },
      { tipo: "Hot Dog", preco: 5 },
      { tipo: "Portuguesa", preco: 5 },
      { tipo: "Brócolis c/ Queijo e Bacon", preco: 5 },
      { tipo: "4 Queijos", preco: 5 }
    ];

    $scope.pedidos = [];

    var allRecheioQuantidade = [];

    $scope.quantidadePasteis = function (pedido) {
        
    };

    $scope.adicionarPedido = function (pedido) {
        $scope.pedidos.push(angular.copy(pedido));
        delete $scope.pedido;
        $scope.pedidoForm.$setPristine();
        $scope.quantidadePasteis(pedido);
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

        if (troco < 0 || troco === isNaN || troco === null) return true;

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
