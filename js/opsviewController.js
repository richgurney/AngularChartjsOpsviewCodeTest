angular.module('myApp', ['chartjs-directive'])
  .controller('myController', function($scope){
  	var self = this;

    // Replicated Data for charts
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

  	// Active Users ------------------------------
  	self.selectedUsersTime;
  	self.selectedUsersTimeVal;
    // Data for charts
  	self.activeUsers = [
      { 
        label: "Active Users",
        fillColor : "rgba(13, 92, 28, 0.86)",
        strokeColor : "rgba(220,220,220,1)",
        pointColor : "rgba(62, 33, 85, 0.86)",
        pointStrokeColor : "#fff",
        data : [9,3,9,45,5,9,7] 
      }
    ];
    self.averageActiveUsers = [
      { 
        label: "Average",
        fillColor : "rgba(58, 53, 78, 0.87) ",
        strokeColor : "rgba(220,220,220,1)",
        pointColor : "rgba(62, 33, 85, 0.86)",
        pointStrokeColor : "#fff",
        data : [4,5,5,30,3,2,1] 
      }
    ];
    // Take input from form and changes appropriate 
    // data in the data array
    self.updateActiveUsers = function() {
      // bound to input field
 			var selected = self.selectedUsersTime;
			// find the index of selected time
      // and change data
			for (var i=0; i<self.labels.length; i++) {
				if (self.labels[i] == selected) {
					index = self.labels.indexOf(selected)
					self.activeUsers[0].data[index] = self.selectedUsersTimeVal;
				} 
			}
		};
    // Adds the average data to the chart
    self.averageUsers = function() {
      average = self.averageActiveUsers[0];
      self.activeUsers.push(average);
    }

		// Active Sesssions ------------------------------
    // Bound global variables to form fields
    self.selectedChart;
		self.selectedActiveSessionTime;
		self.selectedActiveSessionTimeVal;
    self.timeLabels = [
      { "label" : "< 1min" },
      { "label" : "1min - 5min" },
      { "label" : "5min - 10min" },
      { "label" : "10min - 15min" },
      { "label" : "15min - 20min" },
      { "label" : "20min - 25min" },
      { "label" : "25min +" }
    ];
    // Data for multi represented chart
		self.activeSession = {
      labels: ["< 1min", "1min - 5min", "5min - 10min", "10min - 15min", "15min - 20min", "20min - 25min", "25min +"],
      datasets: [
        {
          label: "Morning",
          fillColor: "rgba(100, 161, 200, 0.87)",
          strokeColor: "rgba(220,220,220,1)",
          pointColor: "rgba(62, 33, 85, 0.86)",
          pointStrokeColor: "#fff",
          pointHighlightFill: "rgba(24, 100, 176, 0.71)",
          pointHighlightStroke: "rgba(220,220,220,1)",
          data: [65, 59, 90, 81, 56, 55, 40]
        },
        {
          label: "Day Time",
          fillColor: "rgba(222, 146, 46, 0.9)",
          strokeColor: "rgba(220,220,220,1)",
          pointColor: "rgba(62, 33, 85, 0.86)",
          pointStrokeColor: "#fff",
          pointHighlightFill: "rgba(148, 15, 15, 0.71)",
          pointHighlightStroke: "rgba(151,187,205,1)",
          data: [28, 48, 40, 19, 96, 27, 100]
        },
        {
          label: "Evening",
          fillColor: "rgba(197, 53, 53, 0.86)",
          strokeColor: "rgba(220,220,220,1)",
          pointColor: "rgba(62, 33, 85, 0.86)",
          pointStrokeColor: "#fff",
          pointHighlightFill: "rgba(222, 179, 62, 0.71)",
          pointHighlightStroke: "rgba(151,187,205,1)",
          data: [86, 3, 47, 19, 9, 27, 4]
        }
      ]
    };
    // Average Sessions Data
    self.averageSessions = [
      { 
        label: "Average",
        fillColor: "rgba(58, 53, 78, 0.87) ",
        strokeColor: "rgba(220,220,220,1)",
        pointColor: "rgba(62, 33, 85, 0.86)",
        pointStrokeColor: "#fff",
        pointHighlightFill: "rgba(222, 179, 62, 0.71)",
        pointHighlightStroke: "rgba(151,187,205,1)",
        data: [43,45,88,51,41,58,19]
      }
    ];
    // Updates the Sessions with bound form data
    self.updateActiveSessions = function() {
      var selectedChart = self.selectedChart;
      var selectedTime = self.selectedActiveSessionTime;
      var value = self.selectedActiveSessionTimeVal;
      var times = self.activeSession.labels;
      var timeOfDay = self.activeSession.datasets;
      // find the index of selected time
      for (var i=0; i < times.length; i++) {
        if (times[i] == selectedTime) {
          indexTime = times.indexOf(selectedTime)
        } 
      }
      // find the selected timeOfday and change the the selected object's 
      // data at the index position that was selected above
      for (var i=0; i<timeOfDay.length; i++) {
        if (timeOfDay[i].label == selectedChart) {
          timeOfDay[i].data[indexTime] = self.selectedActiveSessionTimeVal;
          console.log(timeOfDay[i].data[indexTime]);
        }
      }
    };
    // Updates chart with average data
    self.addAverageActiveSessions = function() {
      average = self.averageSessions[0];
      self.activeSession.datasets.push(average);
    }

		// Sales------------------------------
    // Bound data from form fields
  	self.selectedSalesTime;
  	self.selectedSalesTimeVal;
    // Chart data for sales
  	self.sales = [
      { 
        label: "Sales",
        fillColor: "rgba(50, 132, 185, 0.74)",
        strokeColor: "rgb(87, 62, 107)",
        pointColor: "rgba(62, 33, 85, 0.86)",
        pointStrokeColor: "#fff",
        pointHighlightFill: "#fff",
        pointHighlightStroke: "rgba(220,220,220,1)",
        data : [1,5,8,21,61,11,19] 
      }
    ];
    self.averageSales = [
      { 
        label: "Average",
        fillColor: "rgba(58, 53, 78, 0.87) ",
        strokeColor: "rgba(220,220,220,1)",
        pointColor: "rgba(62, 33, 85, 0.86)",
        pointStrokeColor: "#fff",
        pointHighlightFill: "rgba(222, 179, 62, 0.71)",
        pointHighlightStroke: "rgba(151,187,205,1)",
        data: [2,3,7,17,41,8,14]
      }
    ];
    // Updates Sales chart with bound form fields
    self.updateSales = function() {
 			var selected = self.selectedSalesTime;
			// find the index of selected time
			for (var i=0; i<self.labels.length; i++) {
				if (self.labels[i] == selected) {
					index = self.labels.indexOf(selected)
					self.sales[0].data[index] = self.selectedSalesTimeVal;
				} 
			}
		};
    // Updates chart with average data
    self.addAverageSales = function() {
      average = self.averageSales[0];
      self.sales.push(average);
    }

		// System Performance------------------------------
    // Bound data from field
  	self.selectedPerformanceTime;
  	self.selectedPerformanceTimeVal;
    // Data for the chart
  	self.performance = [
      { 
        fillColor: "rgba(218, 128, 10, 0.84)",
        strokeColor: "rgb(87, 62, 107)",
        pointColor: "rgba(62, 33, 85, 0.86)",
        pointStrokeColor: "#fff",
        pointHighlightFill: "#fff",
        pointHighlightStroke: "rgba(220,220,220,1)",
        data : [100,80,65,75,30,54,20] 
      }
    ];
    self.averageSystemPerformance = [
      { 
        label: "Average",
        fillColor: "rgba(58, 53, 78, 0.87)",
        strokeColor: "rgba(220,220,220,1)",
        pointColor: "rgba(62, 33, 85, 0.86)",
        pointStrokeColor: "#fff",
        pointHighlightFill: "rgba(222, 179, 62, 0.71)",
        pointHighlightStroke: "rgba(151,187,205,1)",
        data: [70,60,50,56,28,40,14]
      }
    ];
    // Updates the chart with bound form fields
    self.updatePerformance = function() {
    	console.log("gets here")
 			var selected = self.selectedPerformanceTime;
			// find the index of selected time
			for (var i=0; i<self.labels.length; i++) {
				if (self.labels[i] == selected) {
					index = self.labels.indexOf(selected)
					self.performance[0].data[index] = self.selectedPerformanceTimeVal;
				} 
			}
		};
    // Updates chart with average data
    self.addAveragePerformance = function() {
      average = self.averageSystemPerformance[0];
      self.performance.push(average);
    }

		// System Cashes------------------------------
    // Bound data from fields
  	self.selectedCrashTime;
  	self.selectedCrashTimeVal;
    // Data for chart
  	self.crash = [
      { 
        fillColor: "rgba(189, 22, 22, 0.86)",
        strokeColor: "rgb(87, 62, 107)",
        pointColor: "rgba(62, 33, 85, 0.86)",
        pointStrokeColor: "#fff",
        pointHighlightFill: "#fff",
        pointHighlightStroke: "rgba(220,220,220,1)",
        data : [3,4,6,25,29,54,20] 
      }
    ];
    self.averageCrash = [
      { 
        label: "Average",
        fillColor: "rgba(58, 53, 78, 0.87)",
        strokeColor: "rgba(220,220,220,1)",
        pointColor: "rgba(62, 33, 85, 0.86)",
        pointStrokeColor: "#fff",
        pointHighlightFill: "rgba(222, 179, 62, 0.71)",
        pointHighlightStroke: "rgba(151,187,205,1)",
        data: [2,3,4,15,20,40,14]
      }
    ];
    // Updates crash chart with bound data from form
    self.updateCrash = function() {
    	console.log("gets here")
 			var selected = self.selectedCrashTime;
			// find the index of selected time
			for (var i=0; i<self.labels.length; i++) {
				if (self.labels[i] == selected) {
					index = self.labels.indexOf(selected)
					self.crash[0].data[index] = self.selectedCrashTimeVal;
				} 
			}
		};
    // Adds average data to graph
    self.addAverageCrash = function() {
      average = self.averageCrash[0];
      self.crash.push(average);
    }

		// Generates data when page is loaded------------------------------
    // Specifies where each chart will get its data from
    $scope.generateData = function(){
      var activeUsers = {
        labels : self.labels,
        datasets : self.activeUsers
      };
      var sales = {
        labels : self.labels,
        datasets : self.sales
      };
      var performance = {
      	labels : self.labels,
      	datasets : self.performance
      }
      var crash = {
      	labels : self.labels,
      	datasets : self.crash
      }
      var activeSession = {
      	labels : self.activeSession.labels,
      	datasets : self.activeSession.datasets
      }
      $scope.activeUsers = {"data": activeUsers, "options": {}};
      $scope.sales = {"data": sales, "options": {}};
      $scope.performance = {"data": performance, "options": {}};
      $scope.crash = {"data": crash, "options": {}};
      $scope.activeSession = {"data": activeSession, "options": {}};
    };

    // Shows all the averages------------------------------
    self.showAverages = function() {
      self.addAverageCrash();
      self.addAveragePerformance();
      self.addAverageSales();
      self.addAverageActiveSessions();
      self.averageUsers();
    }

    $scope.generateData();
  });
