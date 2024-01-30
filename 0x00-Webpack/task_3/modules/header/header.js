import $ from 'jquery';
import './header.css';
$(document).ready(function () {
  $('body').append('<header id="logo"> </header>');
  $('body').append('<h1>Init header</h1>');
  console.log('Init header');
});
