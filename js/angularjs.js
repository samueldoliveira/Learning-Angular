var app = angular.module('app', []);
app.controller('MostrandoContatos', function($scope){
  $scope.aplicacao = "Lista Telefônica";
  $scope.contatos = [{nome: 'Samuel', telefone: '987944144'},
                      {nome: 'Hayssa', telefone: '111111111'},
                    {nome: 'helem', telefone: '999999999'}];
  $scope.operadoras = [{nome: "Oi"},
                      {nome: "Vivo"},
                      {nome: "Tim"},
                      {nome: "Claro"}];
  $scope.adicionarContato = function(contato){
    $scope.contatos.push(contato);
    delete $scope.contato;
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
});
