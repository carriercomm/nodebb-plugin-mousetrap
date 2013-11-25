(function(module) {
	"use strict";

	var Mousetrap = {}

	Mousetrap.addScripts = function(scripts, callback) {
		return scripts.concat([
				'plugins/nodebb-plugin-mousetrap/vendor/mousetrap.min.js',
				'plugins/nodebb-plugin-mousetrap/lib/main.js'
			]);
	};

	module.exports = Mousetrap;
}(module));