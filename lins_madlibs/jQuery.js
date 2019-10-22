
$(document).ready(function(){

	var prompts = [
		'Type your name',
		'Type an adjective',
		'Type a noun'
	];

	var answers=[];

	var currentPrompt = 0;

	var nextPrompt = function() {

	if (currentPrompt != 0){
		answers.push($('input').val());
	}

		if (currentPrompt < prompts.length) {

			$('.prompt').html(prompts[currentPrompt] +'<br><input type="text">');

			currentPrompt = currentPrompt + 1;
		}

		else {

			showFinal();
		}
	}

	var showFinal = function() {
	$('.prompt').html('This is the story of <span class="fill">'+answers[0]+'</span> and the <span class="fill">'+answers[1]+'</span> <span class="fill">'+answers[2]+'</span>.');

	$('button').hide();
	}

	$('button').click(function() {
		nextPrompt();
	});

    nextPrompt();
    
});
