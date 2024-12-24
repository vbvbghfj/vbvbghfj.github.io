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
    const applyButtons = document.querySelectorAll("#cart-table .apply-btn");
    const confirmedTable = document.querySelector("#confirmed-table"); // 확정 내역 테이블의 tbody

    applyButtons.forEach((button) => {
        button.addEventListener("click", function () {
            // 현재 버튼이 포함된 행을 가져오기
            const row = button.closest("tr");
            
            // 이미 확정 내역에 동일한 학수번호가 있는지 확인
            const courseId = row.children[1].textContent; // 학수번호
            const existingRows = confirmedTable.querySelectorAll("tr");

            // 기존 행이 있을 때만 중복 검사
            if (existingRows.length > 0) {
                for (const existingRow of existingRows) {
                    if (existingRow.children[1].textContent === courseId) {
                        alert("해당 과목이 [수강신청] 되었습니다.");
                        return;
                    }
                }
            }

            // 행 복사
            const clonedRow = row.cloneNode(true);

            // 신청 버튼 제거
            const applyButton = clonedRow.querySelector(".apply-btn");
            if (applyButton) applyButton.remove();

            // 확정 테이블에 추가
            confirmedTable.appendChild(clonedRow);

            // 버튼 비활성화
            button.disabled = true;
            button.textContent = "신청 완료";
        });
    });
});




