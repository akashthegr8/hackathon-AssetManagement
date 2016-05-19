angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope,$assetmanagerservice,$state, $rootScope, $ionicPopup, $ionicSideMenuDelegate, $ionicLoading, $timeout, $http) {
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  ////////// SEARCH CONTROLLER BELOW ////////////
  $scope.mySearch = {}; // create empty object for search params
  $rootScope.userSettings = {}; // store global user settings

  /// Core Search Function
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
  
  
  $scope.createMovement = function(){
    var ctrl = this;

    ctrl.add = add;
      
    $http.get("/assetManagement/createMovement")
            .success(function(data) {
               console.log("Data " + data);
            $ctrl.data = json.signify(data);
            })
            .error(function(data) {
                alert("ERROR");
            });
      
    $ionicLoading.show({
          template: "Loading data..."
      })
      console.log("hey")
      $state.go("app.createMovement")
       $ionicLoading.hide();
    $ionicSideMenuDelegate.isOpen() ? $ionicSideMenuDelegate.toggleLeft() : null; /// close side menu
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
  
  $scope.CityAssets = function(){
    
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
 // A.Kumar
    $scope.openCity = function (evt, selectedTab) {           
       
        
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tabcontent.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    
        
    if(selectedTab == "see_report"){
        document.getElementById("see_report").style.display = "block";
      google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(
        function() {
            
            var a =12;
            var b =28;
            var c =43;
            var d =25;
            var e =91;

        var data = google.visualization.arrayToDataTable([
          ['Center', 'Total Items'],
          ['Bangalore',    a],
          ['Delhi',      b],
          ['Chennai',  c],
          ['Kochi', d],
          ['Mysore',    e]
        ]);

        var options = {
          title: 'Asset Details',
          is3D: true
        };

        var chart = new google.visualization.PieChart(document.getElementById('see_report'));
         chart.draw(data, options);
            
        /*// orgChart is my global orgchart chart variable.
            google.visualization.events.addListener(chart, 'select', selectHandler);
            // Notice that e is not used or needed.
            function selectHandler(e) {
                alert('The user selected' + chart.getSelection().length + ' items.');
      }*/
        }
      ); 
    }else{
        document.getElementById("see_report").style.display = "none";
    }
        
        // Show the current tab, and add an "active" class to the link that opened the tab
    document.getElementById(selectedTab).style.display = "block";
  //  evt.currentTarget.className += " active";
        
    
}
    
    
 
})
.controller('ResultsCtrl', function($scope) {
 
});
