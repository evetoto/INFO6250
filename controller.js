var angMod = angular.module("myApp", []);
angMod.controller('meController', function($scope, $http) {
            $scope.res = [];
            $scope.submit = function(){
               var data = {
                  FirstName: $scope.firstname,
                  LastName: $scope.lastname,
                  Sex: $scope.sex,
                  Street: $scope.street,
                  City: $scope.city,
                  State: $scope.state,
                  Zipcode: $scope.zipcode,
                  Email: $scope.email,
                  DOB: $scope.birthday
               };

               $scope.res.push(data);
               $http.get("app.php?cmd=set&key=res&value=" + firstname);
            }

            $scope.cancel = function(){
                  $scope.firstname = "";
                  $scope.lastname = "";
                  $scope.sex = "";
                  $scope.street = "";
                  $scope.city = "" ;
                  $scope.state = "";
                  $scope.zipcode = "";
                  $scope.email = "";
                  $scope.birthday = "";

            }

         });
