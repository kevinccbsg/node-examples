var app = angular.module('fileUpload', ['ngFileUpload']);
	app.controller('MyCtrl', ['Upload','$scope', function (Upload, $scope) {
		// Upload later on form submit or something similar
		$scope.submit = function() {
			if ($scope.upload_form.file.$valid && $scope.file) {
				$scope.upload($scope.file);
			}
			else {
				$scope.error = 'select file';
			}
		};
		// Upload on file select or drop
		$scope.upload = function(file) {
			Upload.upload({
				url: 'http://localhost:3000/upload',
				data: {file: file}
			}).then(function(resp) {
				if (resp.data.error_code === 0) {
					console.log('Success: ', + resp.config.data.file.name + 'uploaded. Response: ' + resp.data);
				}
				else {
					console.log('Server error');
				}
			}, function(err) {
				console.log('Error status: ' + err.status);
			}, function (evt) {
				console.log(evt);
				var preogressPercentage = parseInt(100.0 * evt.loaded / evt.total);
				$scope.progress = 'progress: ' + preogressPercentage + '% ';
			});
		}
	}]);