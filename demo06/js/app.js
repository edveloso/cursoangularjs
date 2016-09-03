app = angular.module("app", []);
app.controller("MainCtrl", ["$http" ,function($http){	
	var self = this;
	self.fichas = [];

	$http.get('http://localhost:8080/fichas?json').
        success(function(data) {
            self.fichas  = data._embedded.fichas;
        })
        .error(function(error){
        	alert("erro" + err);
        });

var data = {"chavePesquisa": "oura", "resumo":"mais uma"     	
     };

// $http.post('/echo/json', data).then(function(response){
// 	alert("deu certo"+response);
// 	}, function(err){
// 		alert("erro"+err);
// 	});

var res = $http.post('http://localhost:8080/fichas', data);
		res.success(function(data, status, headers, config) {
			self.fichas  = data;
		});
		res.error(function(data, status, headers, config) {
			alert( "failure message: " + JSON.stringify({data: data}));
		});	


}]);