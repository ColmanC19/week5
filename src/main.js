import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { Age } from "./../js/super.js",;

$(document).ready(function(){
  $("form#super").submit(function() {
    event.preventDefault();

  });
});
