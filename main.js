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

document.addEventListener('DOMContentLoaded', () => {
    const applyButtons = document.querySelectorAll('.apply-btn');
    const confirmedTable = document.getElementById('confirmed-table');

    applyButtons.forEach((button) => {
        button.addEventListener('click', (event) => {
            const row = event.target.closest('tr');
            const clonedRow = row.cloneNode(true);

            // Remove the "신청" 버튼 from the cloned row
            clonedRow.querySelector('.apply-btn').remove();
            clonedRow.querySelector('.preference-order')?.remove();

            // Append the cloned row to the confirmed table
            confirmedTable.appendChild(clonedRow);

            // Optionally disable the apply button to prevent duplicate additions
            button.disabled = true;
        });
    });
});
