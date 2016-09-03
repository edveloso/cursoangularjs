app = angular.module("app", []);
app.controller("TodoCtrl", [function(){
	 var self = this;
    self.todos = [
       {'description':'limpar', 'status':'pending' },
       {'description':'dormir', 'status':'pending' },
       {'description':'cozinhar', 'status':'pending' },
       {'description':'varrer', 'status':'pending' }
    ];
    self.todo = {};

    self.getClass = function(todo){
    	if(todo.status == 'done'){
    		return 'done';
    	}
    	else 'pending';
    };

    self.toggle = function(todo, indice){
    	if(todo.status == 'done'){
    		todo.status = 'pending';                
    	}
    	else{
    		todo.status = 'done';        
        self.remover(indice);
      }
    };

    self.adicionar = function (){
      self.todo.status = 'pending';
      self.todos.push(self.todo);
      limpar();
    };

    self.remover = function(indice){
      self.todos.splice(indice, 1);
    };

    limpar = function(){
      self.todo = {};  
    }

}]);