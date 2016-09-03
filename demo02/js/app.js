app = angular.module("app", []);
app.controller("MainCtrl", [function(){
	var self = this;
	self.message = 'Hello Angular!';

	//exercício como  trocar o valor pelo botão
	//var change = false;

	self.change = function(){
		self.message = 'Bye Angular!';		
		//exercício como  trocar o valor pelo botão
		// if(!change){
		// 	self.message = 'Bye Angular!';
		// 	change = true;	
		// }else{
		// 	self.message = 'Hello Angular!';
		// 	change = false;	
		// }		
	};
}]);