angular.module('starter.controllers', ['ionic','ngCordova'])



.controller('AppCtrl',function($scope, $rootScope,$cordovaBarcodeScanner,$ionicPlatform,$assetmanagerservice,$state, $rootScope, $ionicPopup, $ionicSideMenuDelegate, $ionicLoading, $timeout, $http) {
    


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
         $http.post('http://10.207.112.134:8080/assetManagement/assets/manageEquipment/addEquipment', payload).then(function(result){
             
             console.log(result)
            $rootScope.qr= result.data; 
             
        
                console.log($rootScope.qr);
             
             $state.go("app.showQR")
              
              /* var alertPopup = $ionicPopup.alert({
                 title: 'Asset Saved',
                 template: 'Clicke OK to show the generated QR Code'
               });

               alertPopup.then(function(res) {
                $state.go("app.showQR"); 
                 
               });*/
             
             
            
});
         
    }
     
  /*   $scope.showQR = function(qr){
         
         $scope.qr=qr;
         $
     }*/
     
     
     
     
     
 
    
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
  $scope.launchNewMove = function(){
    
    $ionicLoading.show({
          template: "Loading data..."
      })
      
      $state.go("app.createMovement")
       $ionicLoading.hide();
    $ionicSideMenuDelegate.isOpen() ? $ionicSideMenuDelegate.toggleLeft() : null; /// close side menu
  }
  
  $scope.movFilterSelVal = function(mySelect){
      console.log("temp" + mySelect);
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
    
     $scope.BranchSel = function(){
    
    $ionicLoading.show({
          template: "Loading data..."
      })
      console.log("hey")
      $state.go("app.BranchSel")
       $ionicLoading.hide();
    $ionicSideMenuDelegate.isOpen() ? $ionicSideMenuDelegate.toggleLeft() : null; /// close side menu
  }
     
  $scope.mySelect = {
      'selected': 'Any'
  }
  
  $scope.locSelected= function(city){
      $scope.myCity={
          'selected': city
      }
      console.log("mycity "+  $scope.myCity.selected)
      $state.go("app.BranchSel")
  }
  
    $scope.launchcityassets= function(){
      
      $state.go("app.CityAssets")
  }
    
  
 $scope.myCity = {
      'selected': 'Bangalore'
  };
    
  $scope.allMovement = function(){
    
      $state.go("app.allMovement")
          if($scope.mySelect.selected == 'Any'){              $http.get("http://10.207.112.134:8080/assetManagement/assets/manageMovement")
            .success(function(allMovList) {
              console.log("Any " + allMovList);
            $scope.data11 = allMovList;
            })
            .error(function(data) {
                alert("ERROR");
            });
          }else{              $http.get("http://10.207.112.134:8080/assetManagement/assets/manageMovement/byStatus/"+$scope.mySelect.selected)
            .success(function(allMovList) {
              console.log("not any " + $scope.mySelect.selected);
              console.log("not any " + allMovList);
            $scope.data11 = allMovList;
            })
            .error(function(data) {
                alert("ERROR");
            });
          } 
            
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
    
     $scope.About = function(){
    
    $ionicLoading.show({
          template: "Loading data..."
      })
      console.log("hey")
      $state.go("app.About")
       $ionicLoading.hide();
    $ionicSideMenuDelegate.isOpen() ? $ionicSideMenuDelegate.toggleLeft() : null; /// close side menu
  }
 
 
      $rootScope.$on("CallParentMethod", function(barcodeData){
           $scope.getCall(barcodeData);
        });

        
        
        
     $scope.getCall = function(barcodeData){
         $http.get("http://10.207.112.134:8080/assetManagement/assets/manageEquipment/details/" + barcodeData).success(function(result){
              var alertPopup = $ionicPopup.alert({
                 title: 'BarcodeData',
                 template: result[0].product_type
               });
           
              
          }); 
         
     }
     
})

      
      /*
  */
    
          
  .controller('HomeCtrl', ['$scope', '$rootScope', '$cordovaBarcodeScanner','$ionicPlatform',function($scope,$rootScope, $cordovaBarcodeScanner,$ionicPlatform) {

  $scope.scan = function(){
      
   
      
      
    $ionicPlatform.ready(function() {
      $cordovaBarcodeScanner.scan().then(function(barcodeData) {
          
          
           $rootScope.$emit("CallParentMethod", barcodeData.text;
          
           
           
           
      }, function(error) {
          alert(JSON.stringify(error));
      });
    });
  }

}]);