import $ from 'jquery';
import _ from 'lodash';
import './body.css';

$(document).ready(function () {
  $('body').append('<p>Holberton Dashboard</p>');
  $('body').append('<p>Dashboard data for the students</p>');
  $('body').append('<button>Click here to get started</button>');
  $('body').append('<p id="count"></p>');

  var k = 0;
  function updateCounter() {
    k++;
    $('#count').text(`${k} clicks on the button`);
  }
  $('button').on(
    'click',
    _.debounce(updateCounter, 1000, {
      leading: true,
      trailing: false,
    })
  );
});
