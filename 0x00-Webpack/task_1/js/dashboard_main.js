import $ from 'jquery';
import _ from 'lodash';

$(document).ready(function() {
  // Add three paragraphs to the page body
  $('body').append('<p>Holberton Dashboard</p>');
  $('body').append('<p>Dashboard data for the students</p>');
  $('body').append('<button>Click here to get started</button>');
  $('body').append('<p id="count"></p>');
  $('body').append('<p>Copyright - Holberton School</p>');
  var k = 0;
  function updateCounter(){
		k++;
	     $('#count').text(`${k} clicks on the button`);
  }
	const debouncedUpdateCounter = _.debounce(updateCounter, 1000);
	$('button').click(debouncedUpdateCounter);
});
