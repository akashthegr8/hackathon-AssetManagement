angular.module('starter.controllers', ['ionic','ngCordova'])

.controller('AppCtrl',function($scope,$cordovaBarcodeScanner,$ionicPlatform,$assetmanagerservice,$state, $rootScope, $ionicPopup, $ionicSideMenuDelegate, $ionicLoading, $timeout, $http) {
    
  ////////// SEARCH CONTROLLER BELOW ////////////
  $scope.mySearch = {}; // create empty object for search params
 // $rootScope.userSettings = {}; // store global user settings
  $scope.imag="";
  /// Core Search Function
    $scope.equipment = {
   /*     'vendor':"",
        'donor':"",
        'cost':"",
        'type': "",
        'acquisition':""
   */ }
     $scope.createEquip = function(){
         
         $scope.qr="";
    payload = JSON.stringify($scope.equipment);
        console.log(payload);
         $http.post('/assetManagement/assets/manageEquipment/addEquipment', payload).then(function(result){
            $scope.qr= 'data:image/png;base64,' + result.data; 
             
            decodedImage= btoa(result.data)

//now, use the decodedData instead of the base64 one
var blob = new Blob([decodedImage], {type: 'image/png'});

///now it should work properly
var file = new File([blob], 'imageFileName.png');
             
                console.log($scope.qr);
});
         
    }
 
     
  $scope.addEquip = function(){
    $ionicLoading.show({
          template: "Loading data..."
      })
      console.log("hey")
      $state.go("app.addEquip")
       $ionicLoading.hide();
    $ionicSideMenuDelegate.isOpen() ? $ionicSideMenuDelegate.toggleLeft() : null; /// close side menu
  }


 $scope.addDonor = function(){
    $ionicLoading.show({
          template: "Loading data..."
      })
      console.log("hey")
      $state.go("app.addDonor")
       $ionicLoading.hide();
    $ionicSideMenuDelegate.isOpen() ? $ionicSideMenuDelegate.toggleLeft() : null; /// close side menu
  }
 
 
  $scope.addSupplier = function(){
    $ionicLoading.show({
          template: "Loading data..."
      })
      console.log("hey")
      $state.go("app.addSupplier")
       $ionicLoading.hide();
    $ionicSideMenuDelegate.isOpen() ? $ionicSideMenuDelegate.toggleLeft() : null; /// close side menu
  }
  
 $scope.ctrl = [];
  $scope.createMovement = function(){
    
     
   
      
  /*  $http.get("/assetManagement/createMovement")
            .success(function(data) {
               console.log("Data " + data);
            $ctrl.data = json.signify(data);
            })
            .error(function(data) {
                alert("ERROR");
            });*/
      
      
      ctrl = [/*{ID:'ID',
              ProductType:'Product Type',
              Quantity:'Quantity',
              Cost:'Cost',
              Status:'Status'
             }*/]
      
      
    $ionicLoading.show({
          template: "Loading data..."
      })
      console.log("hey")
      $state.go("app.createMovement")
       $ionicLoading.hide();
    $ionicSideMenuDelegate.isOpen() ? $ionicSideMenuDelegate.toggleLeft() : null; /// close side menu
  }
  
  $scope.addData = function(){
      var dataValue = {
          ID: $scope.ID,
          ProductType:$scope.ProductType,
          Quantity:$scope.Quantity,
          Cost:$scope.Cost,
          Status:$scope.Status
      };
          
      $scope.ctrl.push(dataValue);
          
          
      }
  
  
  
  $scope.ruMovement = function(){
    
    $ionicLoading.show({
          template: "Loading data..."
      })
      console.log("hey")
      $state.go("app.ruMovement")
       $ionicLoading.hide();
    $ionicSideMenuDelegate.isOpen() ? $ionicSideMenuDelegate.toggleLeft() : null; /// close side menu
  }

  $scope.allMovement = function(){
    
    $ionicLoading.show({
          template: "Loading data..."
      })
      console.log("hey")
      $state.go("app.allMovement")
       $ionicLoading.hide();
    $ionicSideMenuDelegate.isOpen() ? $ionicSideMenuDelegate.toggleLeft() : null; /// close side menu
  }
  
    $scope.checkAssets = function(){
        
          
        $http.get("/assetManagement/testService")
            .success(function(data) {
               console.log("Data " + data);
            $scope.data11 = data;
            })
            .error(function(data) {
                alert("ERROR");
            });
    
    
    $ionicLoading.show({
          template: "Loading data..."
      })
      console.log("hey")
      $state.go("app.checkAssets")
       $ionicLoading.hide();
    $ionicSideMenuDelegate.isOpen() ? $ionicSideMenuDelegate.toggleLeft() : null; /// close side menu
        
           
    
    
   
  }
 
     
})




.controller('HomeCtrl', ['$scope','$cordovaBarcodeScanner','$ionicPlatform',function($scope,$cordovaBarcodeScanner,$ionicPlatform) {

  $scope.scan = function(){
      
      console.log("safdsg")
    $ionicPlatform.ready(function() {
      $cordovaBarcodeScanner.scan().then(function(barcodeData) {
          alert(JSON.stringify(barcodeData));
      }, function(error) {
          alert(JSON.stringify(error));
      });
    });
  }

}]);

/*.controller('ResultsCtrl', function($scope) {
    
  
    $scope.createEquip = function(){
    var vr =$scope.equipcost;
        
        console.log(vr  + "hoooo")
    }
});*/
