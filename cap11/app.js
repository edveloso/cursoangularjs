app = angular.module('app', []);

app.controller("MainCtrl", [function(){
	var self = this;
	self.template_acoes = 'acao.html';
	self.acoes=[
				{'nome': 'Primeira acao', 'preco': 220},
				{'nome': 'Segunda acao', 'preco': 34},
				{'nome': 'Terceira acao', 'preco': 98},
				{'nome': 'Quarta acao', 'preco': 32}
	];

}]);