var app = angular.module('app', []);
app.controller('MostrandoContatos', function($scope){
  $scope.aplicacao = "Lista Telefônica";
  $scope.contatos = [{nome: 'Samuel', telefone: '987944144', operadora: {nome: 'Oi'}, data: new Date()},
                      {nome: 'Hayssa', telefone: '111111111', operadora: {nome: 'Tim'}, data: new Date()},
                    {nome: 'Helem', telefone: '999999999', operadora: {nome: 'Vivo'}, data: new Date()}];
  $scope.operadoras = [{nome: "Oi"},
                      {nome: "Vivo"},
                      {nome: "Tim"},
                      {nome: "Claro"}];
  $scope.adicionarContato = function(contato){
    $scope.contatos.push(contato);
    delete $scope.contato;
    $scope.contatoForm.$setPristine();
  };
  $scope.apagarContatos = function(contatos){
    $scope.contatos = contatos.filter(function (contato) {
      if (!contato.selecionado) return contato;
    });
  };
  $scope.isContatoSelecionado = function(contatos){
    return contatos.some(function (contato){
      return contato.selecionado;
    });
  };
  $scope.ordenarPor = function(campo){
    $scope.criterioOrdenacao = campo;
  };
});
