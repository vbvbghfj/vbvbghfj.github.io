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

// 신청 버튼 클릭 이벤트 처리
document.addEventListener("DOMContentLoaded", () => {
    const applyButtons = document.querySelectorAll(".apply-button");
    const confirmedCoursesTable = document.getElementById("confirmed-courses");

    applyButtons.forEach((button) => {
        button.addEventListener("click", (event) => {
            const row = event.target.closest("tr"); // 클릭된 버튼이 속한 행
            const cells = row.querySelectorAll("td");

            // 새로운 행 생성
            const newRow = document.createElement("tr");

            // 기존 행 데이터를 복사하여 새로운 행에 추가
            cells.forEach((cell, index) => {
                const newCell = document.createElement("td");

                // 신청 버튼과 희망 순서 열은 제외
                if (index === 0) {
                    newCell.textContent = "확정";
                } else if (index !== cells.length - 1) {
                    newCell.innerHTML = cell.innerHTML;
                } else {
                    newCell.innerHTML = `<button>&uarr;</button><button>&darr;</button>`;
                }

                newRow.appendChild(newCell);
            });

            // 새로운 행을 확정 테이블에 추가
            confirmedCoursesTable.appendChild(newRow);

            // 신청 완료 메시지 표시 (선택 사항)
            alert("수강신청이 확정되었습니다.");
        });
    });
});

