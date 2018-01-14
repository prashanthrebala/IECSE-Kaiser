var currentQuestion = 0;
var duration = 90;
var numberOfQuestionsA = 15;
var numberOfQuestionsB = 5;
var totalQuestions = 20;
var defaultTries = [100, 1, 1, 3, 5, 5, 5, 5, 5, 5, 5, 7, 7, 7, 7, 7];

var participant = 

{
	'startTimeStamp': 0,
	'endTimeStamp' : 0,
	'score': 0,
	'submissionHistory': [[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]]
};

var ngui = require('nw.gui');
var nwin = ngui.Window.get();
var DataStore = require('nedb');
var path = require('path');
var db = new DataStore(
{
	filename : path.join(ngui.App.dataPath, 'Kaiser.db'),
	autoload : true
});
