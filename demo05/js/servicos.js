app = angular.module("app");
app.factory("ItemFactory",function(){
	var items = [
		{id: 0, label: 'Item 0'},
		{id: 1, label: 'Item 1'}
	];
	return {
		list: function(){
			return items;
		},
		add: function(item){
			items.push(item);
		},
	};
});


app.service("ItemService", function(){

	var items = [
		{id: 0, label: 'Item 0'},
		{id: 1, label: 'Item 1'}
	];
	this.list = function(){
		return items;
	};

	this.add = function(item){
		items.push(item);
	};

});

