'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$("#testjs").click(function(e) {
		$('.jumbotron h1').text("Javascript is connected");

		// added to change the button
		$("#testjs").text("You've just clicked the button! :)");
		$(".jumbotron p").addClass("active");

	});

	// Add any additional listeners here
	// example: $("#div-id").click(functionToCall);
	$("a.thumbnail").click(projectClick);

}

function projectClick(e) {
    // prevent the page from reloading
    e.preventDefault();
    // In an event handler, $(this) refers to    
	// the object that triggered the event  
	
	// $(this).css("background-color", "#7fff00"); (FROM LAB 2)


	// First part of lab 3 -- we want to replace not append!
	/* var containingProject = $(this).closest(".project");
    containingProject.append("<div class='project-description'><p>Description of the project.</p></div>"); */

    var containingProject = $(this).closest(".project");
    var description = $(containingProject).find(".project-description");
    if (description.length == 0) {
       $(containingProject).append("<div class='project-description'><p>Description of the project.</p></div>");
    } else {
		// Before I changed to control content visibility
		// description.html("<p>Stop clicking on me! You just did it at " + (new Date()) + "</p>");
		$(description).fadeToggle();
    }
}