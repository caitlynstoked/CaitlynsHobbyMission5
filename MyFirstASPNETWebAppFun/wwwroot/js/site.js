// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
$(document).ready(function () {
    const hourlyRate = 25; // my input hourly rate

    $('#hourlyRate').val('$' + hourlyRate.toFixed(2));

    //calculating the number of hours
    $('#calculateBtn').click(function () {
        const hours = parseFloat($('#hours').val());

        //alerting user if hours are negative and looping if flase 
        if (isNaN(hours) || hours < 0) {
            alert('Please enter a valid positive number of hours.');
            return;
        }

        //calculating the totals
        const total = hours * hourlyRate;
        $('#totalOutput').text('Total: $' + total.toFixed(2));
    });

    //back to home
    $('#backToHome').click(function () {
        // Redirect to home page
        alert('Redirecting to home page...');
    });
    $('#backToHome').click(function () {
        // Redirect to home page 
        window.location.href = '/Home';
    });
});