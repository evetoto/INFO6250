var app = angular.module('myApp', []);

app.controller('meController', function($scope, $http) {
    $scope.res = [];
    $scope.submit = function(){
       $scope.message = {
            firstName : "",
            lastName : "",
            sex: "",
            street: "",
            city: "",
            state:"",
            zipcode:"",
            email:"",
            birthday:""    
       };

       angular.forEach($scope.info, function(value, key){
            
            $http.get("app.php?cmd=append&key=res&value="+value)
            .success(function (data, status, headers, config) {
                $scope.redisResponse = "Updated.";
            });
            $http.get("app.php?cmd=get&key=" + res)
                .success(function (data, status, headers, config) {
                    $scope.message[key] = data.data;
                    
                })
                .error(function (data, status, header, config) {
                    console.log(data);
            });
            
        });
        
        $scope.res.push($scope.message);

    }

    $scope.cancel = function(){
        $scope.firstName = "";
        $scope.lastName = "";
        $scope.sex = "";
        $scope.street = "";
        $scope.city = "" ;
        $scope.state = "";
        $scope.zipcode = "";
        $scope.email = "";
        $scope.birthday = "";
    }

});

