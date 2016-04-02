// angular.module('myApp', ['chartjs-directive'])
//   .controller('myController', function($scope){

//     var data = {
//       labels : ["January","February","March","April","May","June","July"],
//       datasets : [
//         {
//           fillColor : "rgba(220,220,220,0.5)",
//           strokeColor : "rgba(220,220,220,1)",
//           pointColor : "rgba(220,220,220,1)",
//           pointStrokeColor : "#fff",
//           data : [65,59,90,81,56,55,40]
//         },
//         {
//           fillColor : "rgba(151,187,205,0.5)",
//           strokeColor : "rgba(151,187,205,1)",
//           pointColor : "rgba(151,187,205,1)",
//           pointStrokeColor : "#fff",
//           data : [28,48,40,19,96,27,100]
//         }
//       ]
//     }

//     $scope.myChart = data;
//   });

angular
  .module("opsview")
  .controller("opsviewController", opsviewController);

function opsviewController() {
	var self = this;

	self.test = 2;

	self.draw = function() {
		var pieData = [
		   {
		      value: self.test,
		      label: 'Java',
		      color: '#811BD6'
		   },
		   {
		      value: 10,
		      label: 'Scala',
		      color: '#9CBABA'
		   },
		   {
		      value: 30,
		      label: 'PHP',
		      color: '#D18177'
		   },
		   {
		      value : 35,
		      label: 'HTML',
		      color: '#6AE128'
		   }
		];
		var context = document.getElementById('skills').getContext('2d');
		var skillsChart = new Chart(context).Pie(pieData);
	}	
}

opsviewController();

