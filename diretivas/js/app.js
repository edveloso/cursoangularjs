app = angular.module('app', []);

app.controller("MainCtrl", [function(){
	var self = this;
	self.template_acoes = 'acao.html';
	self.acoes=[
				{'nome': 'Primeira acao', 'preco': 220, 'anterior': 210},
				{'nome': 'Segunda acao', 'preco': 34, 'anterior': 40},
				{'nome': 'Terceira acao', 'preco': 98, 'anterior': 120},
				{'nome': 'Quarta acao', 'preco': 32, 'anterior': 20}
	];

	self.getChange = function(acao){
		return Math.ceil(((acao.preco - acao.anterior) / acao.anterior) * 100);
	};

}]);