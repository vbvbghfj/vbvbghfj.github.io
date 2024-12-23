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

document.addEventListener("DOMContentLoaded", function () {
    // 신청 버튼 클릭 이벤트 처리
    const applyButtons = document.querySelectorAll("#cart-table .apply-btn");
    const confirmedTable = document.querySelector("#confirmed-table"); // 확정 내역 테이블의 tbody

    applyButtons.forEach((button) => {
        button.addEventListener("click", function () {
            // 현재 버튼이 포함된 행을 가져오기
            const row = button.closest("tr");
            const clonedRow = row.cloneNode(true);

            // 신청 버튼 제거
            clonedRow.querySelector(".apply-btn").remove();

            // 확정 테이블에 추가
            confirmedTable.appendChild(clonedRow);
        });
    });
});


