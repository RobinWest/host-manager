var fs = require('fs');

fs.readdir('C:\\Windows\\System32\\drivers\\etc', function(err, files){
	console.log(err);
	console.log(files);
});

// TODO niceties
// - Taborder
// - Pasting regexp to separate any hosts into correct input
// - Automatically append entry to end of input list
// - Duplicate line directly below
// - Map multiple hosts to the same IP


/* Data model
entry = [
	{
		active: true,
		address: '127.0.0.1',
		entries: [
			{host: 'www.google.com',},
			{host: 'www.steampowered.com'}
		]
	},{
		active: false,
		address: '127.0.0.2',
		entries: [
			{host: 'www.google.com',},
			{host: 'www.steampowered.com'}
		]
	}
]

*/


angular
	.module('HostManager', [])
	.config(function(){
		// TODO routes mapping to file
	})
	.directive('hostManager', function(){
		return {
			restrict: 'E',
			scope: {},
			templateUrl: 'assets/template/host-manager.html',
			controller: function($scope, $element, $attrs){
				$scope.entries = [];

				$scope.entries = [
					{
						active: true,
						address: '127.0.0.1',
						entries: [
							{
								host: 'www.google.com',
								active: true
							},
							{
								host: 'www.steampowered.com',
								active: true
							}
						]
					},{
						active: false,
						address: '127.0.0.2',
						entries: [
							{
								host: 'www.google.com',
								active: true
							},
							{
								host: 'www.steampowered.com',
								active: true
							}
						]
					}
				];


			}
		}
	})
	.directive('hostInput', function(){
		return {
			restrict: 'E',
			scope: {
				hostEntry: '='
			},
			templateUrl: 'assets/template/host-input.html',
			controller: function($scope, $element, $attrs){
				$scope.addEntry = function(entry){
					entry.entries.push({host:'', active:true});
				};
			}
		}
	})