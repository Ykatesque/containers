$(document).ready(function(){
  var _window  = $(window);
  var body = $('body, html');
  var sections = $('#sections section');
  var breakpoints;
  var curr_breakpoint = 0;
  var threshold = 20;

  var calc_breakpoints = function() {
  	breakpoints = [];
  	$.each(sections, function(k,v) {
  		breakpoints.push($(v).offset().top + threshold);
  	});
  }

  var scroll_handler = function() {
	var found_it = false;
	if (_window.scrollTop() > breakpoints[curr_breakpoint]) {
		curr_breakpoint = curr_breakpoint + 1;
		body.animate({scrollTop: $(sections[curr_breakpoint]).offset().top});
	} else if (_window.scrollTop() < threshold) {
		curr_breakpoint = 0;
	}
  }

  _window.on('resize', calc_breakpoints);
  _window.on('scroll', scroll_handler);
  calc_breakpoints();
})

