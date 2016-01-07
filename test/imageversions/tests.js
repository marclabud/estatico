var helpers = require('../../helpers/tests.js'),
	del = require('del');

module.exports = {
	before: function(done) {
		var task = require('../../gulp/media/imageversions.js'),
		// Configuration of task should use fixtures as src and results directory in testcase folder as dest
		// All paths should be relative to gulpfile.js
			testTaskConfig = {
				src: [
					'./test/imageversions/fixtures/'
				],
				fileExtensions: '{jpg, png}',
				configFileName: 'imageversions.config.js',
				srcBase: './test/imageversions/fixtures/',
				dest: './test/imageversions/results/'
			};

		// Calling the task function
		task.task(testTaskConfig, done);
	},
	// Using task name as key
	default: function() {
		helpers.compareResultFilesToExpected('imageversions');
	},
	after: function(done) {
		// Removing temporary results directory after test execution
		//del(__dirname + '/results', done);
	}
};
