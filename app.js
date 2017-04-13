agGrid.initialiseAgGridWithAngular1(angular);

var module = angular.module("example", ["agGrid"]);

module.controller("exampleCtrl", function($scope) {
  

    var columnDefs = [
        {headerName: "Creator", field: "username", width: 250, filter: 'set'}
        
    ];

    var rowData = [
        {username: "isabir"},
        {username: "hassan"},
        {username: "isabir"}
    ];
    
    

    $scope.gridOptions = {
        columnDefs: columnDefs,
        rowData: rowData
    };
    
    $scope.gridOptions.onGridReady = function() {
      var filterModel = $scope.gridOptions.api.getFilterModel();
    console.log(filterModel);
                    $scope.gridOptions.api.setFilterModel({"username":["isabir"]});
                }
    
    

    

});