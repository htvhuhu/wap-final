$('document').ready(function () {
    $("#resDate").datepicker({
        minDate: 0,
        maxDate: "+1M"
    });

    $('#resTime').timepicker({
        timeFormat: 'HH:mm',
        interval: 60,
        minTime: '11',
        maxTime: '7:00pm',
        defaultTime: '11',
        startTime: '11:00',
        dynamic: false,
        dropdown: true,
        scrollbar: true
    });
});