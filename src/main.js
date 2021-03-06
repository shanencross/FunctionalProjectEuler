import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import multiplesXandYtoLimit from './js/multiplesXandYtoLimit';
import stateControl from './js/stateControl';
import addToSum from './js/addToSum';

$(document).ready(function () {
    $("#multiplesForm").submit(function (e) {
        e.preventDefault();

        const x = parseInt($("#multipleX").val());
        const y =  parseInt($("#multipleY").val());
        const limit =  parseInt($("#limit").val());
        const sum = multiplesXandYtoLimit(limit)(x)(y);

        const newState = stateControl(addToSum(sum));
        $('#runningTotal').text(`${newState.sum}`);
        $("#sum").text(sum);
        $("#results").show();

    });
});