import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import multiplesXandYtoLimit from './js/multiplesXandYtoLimit';

$(document).ready(function () {
    $("#multiplesForm").submit(function (e) {
        e.preventDefault();

        const x = $("#multipleX").val();
        const y = $("#multipleY").val();
        const limit = $("#limit").val();
        const sum = multiplesXandYtoLimit(limit)(x)(y);


        $("#sum").text(sum);
        $("#results").show();

    });
});