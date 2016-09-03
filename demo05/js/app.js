app = angular.module("app", []);
app.controller("MainCtrl", ["$log","ItemFactory", "ItemService" ,function($log, itemFactory, ItemService){
	var self = this;
	self.message = 'Hello Angular!';

	self.press = function(){
		 $log.log("the button was pressed!");
		 console.log("again!");
	};

	self.add = function(){
		var item = {id: self.list() + 1, label: 'Item '+ self.list().length};
		ItemService.add(item);
	};
	
	self.list = function(){
		return ItemService.list();
	};
}]);