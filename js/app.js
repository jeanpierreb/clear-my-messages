const remote = require('electron').remote
const shell = require('shelljs');
const exec = require('child_process').exec;


function execute(command, callback){
  exec(command, function(error, stdout, stderr){ callback(stdout); });
};

$(document).ready(function($){
	$('.modal').modal();
	
	$('#close-window').on('click', e => {
    remote.getCurrentWindow().close()
	})

	$('.active').on('click', e => {
		shell.rm('-rfP', '~/Library/Messages/*');
		shell.rm('-rfP', '~/Library/Containers/com.apple.ichat/Data/Library/Messages/Archive/*');
		execute( "osascript -e 'tell app \"loginwindow\" to «event aevtrrst»'", () => {});
	})
});

