app = angular.module("app", []);
app.controller("MainCtrl", [function(){
	var self = this;
	self.message = 'Hello Angular!';
	self.submit = function(){
		alert(self.user.name + ' ' + self.user.pass);
	}

}]);