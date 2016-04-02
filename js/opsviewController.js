angular.module('myApp', ['chartjs-directive'])
  .controller('myController', function($scope){
  	var self = this;

  	self.labels = ["7:00 - 9:00","9:00 - 11:00","11:00 - 13:00","13:00 - 15:00","15:00 - 17:00","17:00 - 19:00","19:00 - 21:00"]; 

    self.labelNames = [
			{ "label" : "7:00 - 9:00" },
			{ "label" : "9:00 - 11:00" },
			{ "label" : "11:00 - 13:00" },
			{ "label" : "13:00 - 15:00" },
			{ "label" : "15:00 - 17:00" },
			{ "label" : "17:00 - 19:00" },
			{ "label" : "19:00 - 21:00" }
		];

  	// Active Users
  	self.selectedUsersTime;
  	self.selectedUsersTimeVal;
  	self.activeUsers = [
      { fillColor : "rgba(187, 26, 26, 0.86)",
        strokeColor : "rgba(220,220,220,1)",
        pointColor : "rgba(62, 33, 85, 0.86)",
        pointStrokeColor : "#fff",
        data : [9,3,9,45,5,9,7] }
    ];
    self.updateActiveUsers = function() {
 			var selected = self.selectedUsersTime;
			// find the index of selected time
			for (var i=0; i<self.labels.length; i++) {
				if (self.labels[i] == selected) {
					index = self.labels.indexOf(selected)
					self.activeUsers[0].data[index] = self.selectedUsersTimeVal;
				} 
			}
		};

		// Sales
  	self.selectedSalesTime;
  	self.selectedSalesTimeVal;
  	self.sales = [
      { fillColor : "rgb(21, 131, 201)",
        strokeColor : "rgba(220,220,220,1)",
        pointColor : "rgba(220,220,220,1)",
        pointStrokeColor : "#fff",
        data : [1,5,8,21,61,11,19] }
    ];
    self.updateSales = function() {
    	console.log("gets here")
 			var selected = self.selectedSalesTime;
			// find the index of selected time
			for (var i=0; i<self.labels.length; i++) {
				if (self.labels[i] == selected) {
					index = self.labels.indexOf(selected)
					self.sales[0].data[index] = self.selectedSalesTimeVal;
				} 
			}
		};

		// Generates data when page is loaded
    $scope.generateData = function(){
      var activeUsers = {
        labels : self.labels,
        datasets : self.activeUsers
      };
      var sales = {
        labels : self.labels,
        datasets : self.sales
      };
      $scope.activeUsers = {"data": activeUsers, "options": {}};
      $scope.sales = {"data": sales, "options": {}};
    };

 
    $scope.generateData();
  });

// angular
//   .module("opsview")
//   .controller("opsviewController", opsviewController);

// function opsviewController() {
// 	var self = this;

// 	self.test = 2;

// 	self.draw = function() {
// 		var pieData = [
// 		   {
// 		      value: self.test,
// 		      label: 'Java',
// 		      color: '#811BD6'
// 		   },
// 		   {
// 		      value: 10,
// 		      label: 'Scala',
// 		      color: '#9CBABA'
// 		   },
// 		   {
// 		      value: 30,
// 		      label: 'PHP',
// 		      color: '#D18177'
// 		   },
// 		   {
// 		      value : 35,
// 		      label: 'HTML',
// 		      color: '#6AE128'
// 		   }
// 		];
// 		var context = document.getElementById('skills').getContext('2d');
// 		var skillsChart = new Chart(context).Pie(pieData);
// 	}	
// }

// opsviewController();

