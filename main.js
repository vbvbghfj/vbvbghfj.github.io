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

    if (applyButtons.length === 0) {
        console.error("apply-btn 버튼을 찾을 수 없습니다. HTML 구조를 확인하세요.");
        return;
    }

    applyButtons.forEach((button) => {
        button.addEventListener("click", function () {
            // 현재 버튼이 포함된 행을 가져오기
            const row = button.closest("tr");
            if (!row) {
                console.error("해당 버튼의 부모 행을 찾을 수 없습니다.");
                return;
            }

            console.log("클릭된 행:", row);

            const clonedRow = row.cloneNode(true);

            // 신청 버튼 제거
            const applyBtn = clonedRow.querySelector(".apply-btn");
            if (applyBtn) {
                applyBtn.remove();
            } else {
                console.error("복제된 행에서 apply-btn을 찾을 수 없습니다.");
            }

            // 확정 테이블에 추가
            confirmedTable.appendChild(clonedRow);
            console.log("확정 테이블에 추가된 행:", clonedRow);
        });
    });
});



