require('file?name=[name].[ext]!./index.html');
require('file?name=[name].[ext]!./pace.min.js');
require('file?name=[name].[ext]!./pace-theme-center-simple.css');

var $ = require('jquery');
window.Pace.on("done", function(){
  $("#contentWrapper").removeClass("transparent");
});

require('devextreme/css/dx.common.css');
require('devextreme/css/dx.light.css');
require('bootstrap-loader');
require('./css/jumbotron.css');

var angular = require('angular');
require('angular-sanitize');
require('devextreme/integration/angular');

require('devextreme/ui/text_box');
require('devextreme/ui/button');
require('devextreme/ui/data_grid');
require('devextreme/viz/pie_chart');
require('devextreme/viz/chart');
require('devextreme/ui/scheduler');

var dxNotify = require('devextreme/ui/notify');

var myApp = angular.module('myApp', ['dx']);
myApp.controller('myController', ['$scope', function($scope) {
  $scope.email = {
    placeholder: 'Email',
    type: 'email'
  };
  $scope.password = {
    placeholder: 'Password',
    type: 'password'
  };
  $scope.signIn = {
    text: 'Sign in',
    type: 'success',
    onClick: function() {
      dxNotify('Sign in is not available in this demo', 'success', 1000);
    }
  };
  $scope.viewDetailButton = {
    text: 'View details »',
    onClick: function(){
      dxNotify('View details is not available in this demo', 'warning', 1000);
    }
  };

  $scope.gridOptions = {
    dataSource: require('json!./data/grid.json'),
    columnHidingEnabled: true,
    paging: {
      pageSize: 5
    },
    export: {
      enabled: true,
      fileName: 'Orders'
    },
    columnChooser: {
      enabled: true,
      mode: 'select'
    },
    columns: [{
      allowGrouping: false,
      dataField: 'OrderNumber',
      caption: 'Invoice Number'
    },  {
      caption: 'City',
      dataField: 'CustomerStoreCity'
    }, {
      caption: 'State',
      dataField: 'CustomerStoreState'
    },
      'Employee',{
        dataField: 'OrderDate',
        dataType: 'date'
      }, {
        dataField: 'SaleAmount',
        format: 'currency'
      }]
  };

  var chartData = require('json!./data/chart.json');
  $scope.pieChart = {
    dataSource: chartData,
    palette: 'Ocean',
    title: 'List of sales by states',
    legend: {
      orientation: 'horizontal',
      itemTextPosition: 'bottom',
      horizontalAlignment: 'center',
      verticalAlignment: 'bottom',
      columnCount: 4
    },
    'export': {
      enabled: true
    },
    series: [{
      argumentField: 'state',
      valueField: 'saleAmount',
      label: {
        visible: true,
        font: {
          size: 16
        },
        connector: {
          visible: true,
          width: 0.5
        },
        position: 'columns',
        customizeText: function(arg) {
          return arg.valueText + ' (' + arg.percentText + ')';
        }
      }
    }]
  };

  $scope.chart = {
    dataSource: chartData,
    palette: 'Ocean',
    series: {
      argumentField: 'state',
      valueField: 'saleAmount',
      name: 'List of sales by states',
      type: 'bar'
    }
  };

  $scope.scheduler = {
    dataSource: require('json!./data/scheduler.json'),
    views: ["agenda", "month", "week", "workWeek", "day"],
    currentView: "workWeek",
    currentDate: new Date(2015, 4, 25),
    useDropDownViewSwitcher: false,
    firstDayOfWeek: 0,
    startDayHour: 8,
    endDayHour: 19,
    bindingOptions: {
      editing: "editing",
      useDropDownViewSwitcher: "useDropDownViewSwitcher"
    },
    resources: [{
      field: "ownerId",
      label: "Owner",
      allowMultiple: true,
      dataSource: require('json!./data/schedulerResources.json')
    }],
    width: "100%",
    height: 600
  }

}]);
