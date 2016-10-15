var myApp = angular.module('DemoApp', []);
var uid = 4;

myApp.controller('CarController', [function () {
        var cars = [
            {id: 1, year: 1997, registered: new Date(1999, 3, 15), make: 'Ford', model: 'E350', description: 'ac, abs, moon', price: 3000}
            , {id: 2, year: 1999, registered: new Date(1996, 3, 12), make: 'Chevy', model: 'Venture', description: 'None', price: 4900}
            , {id: 3, year: 2000, registered: new Date(199, 12, 22), make: 'Chevy', model: 'Venture', description: '', price: 5000}
            , {id: 4, year: 1996, registered: new Date(2002, 3, 15), make: 'Jeep', model: 'Grand Cherokee', description: 'Air, moon roof, loaded', price: 4799}

        ]

        var self = this;
        self.cars = cars;
        self.title = "Cars Demo App"
        self.predicate = "year"
        self.reverse = false;

        self.save = function () {
            if (self.newCar.id == null) {
                uid++;
                self.newCar.id = uid;
                self.cars.push(self.newCar);
            } else {
                for (var i in self.cars) {
                    if (self.cars[i].id == self.newCar.id) {
                        self.cars[i] = self.newCar;
                    }
                }
            }
           self.newCar = {};
        };
        
        self.delete = function(id){
            for (var i in self.cars) {
               if(self.cars[i].id == id){
                     self.cars.splice(i,1);
                self.newcontact = {};
               } 
            }  
        };
        
        self.edit = function(id){
            for (var i in cars) {
                if (self.cars[i].id == id){
                    self.newCar = angular.copy(self.cars[i])
                }
            }
        }

    }]);

