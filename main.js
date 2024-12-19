$(document).ready(function() {
    if (location.protocol === 'http:') {
        top.location.href = "https://" + location.hostname;
    }
});

function dateFormat(date) {
    return date.getFullYear() + '-' +
        ((date.getMonth() + 1) < 10 ? "0" + (date.getMonth() + 1) : (date.getMonth() + 1)) + '-' +
        (date.getDate() < 10 ? "0" + date.getDate() : date.getDate());
}

function fnPopNotice() {
    $("#popNotice").dialog({
        resizable: false,
        width: 1200,
        height: 700,
        modal: true,
        closeOnEscape: false,
        draggable: true,
        open: function(event, ui) {
            $('#popNotice').html("공지사항 내용을 여기에 입력하세요.");
        },
        buttons: [
            {
                text: "오늘 하루 동안 열지 않음",
                click: function() {
                    $(this).dialog("close");
                }
            },
            {
                text: "Close",
                click: function() {
                    $(this).dialog("close");
                }
            }
        ]
    });
}
