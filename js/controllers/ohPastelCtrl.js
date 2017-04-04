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
      { tipo: "4 Queijos", preco: 5, quantidade: 0 }
    ];

    $scope.pedidos = [];

    var arrQtdeRecheio = [];
    var quantidadesRecheio = {};

    $scope.mostrarQuantidades = function (pedido) {
        for (var i = 0; i < $scope.pedidos.length; i++) {
            //console.log($scope.pedidos[i].tipoPastel.tipo);
            //console.log(pedido.tipoPastel.tipo);
            if ($scope.pedidos[i].tipoPastel.tipo == pedido.tipoPastel.tipo) {
                //console.log(arrQtdeRecheio);
                console.log("PAssou aqui 1");
                //console.log(arrQtdeRecheio[i]);

                if (!(arrQtdeRecheio[i] == pedido.tipoPastel.tipo)) {
                    quantidadesRecheio = { tipo: pedido.tipoPastel.tipo, qtde: 1 };
                    arrQtdeRecheio.push(quantidadesRecheio);
                    
                    console.log(arrQtdeRecheio);
                    console.log("PAssou aqui2");
                }
                var qtde = quantidadesRecheio
            }
            console.log("-------------");
            console.log(arrQtdeRecheio);
        }
        //$scope.pedidos
        //console.log(quantidadesRecheio);
        //console.log(quantidadesRecheio[i]);
    };

    $scope.adicionarPedido = function (pedido) {
        $scope.pedidos.push(angular.copy(pedido));
        delete $scope.pedido;
        $scope.pedidoForm.$setPristine();
        $scope.mostrarQuantidades(pedido);
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
