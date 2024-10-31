// 필요한 변수 설정
var arrPop = [];
var context = "";
const today = dateFormat(new Date());

// HTTPS로 리디렉션하는 함수
$(document).ready(function() {
    if ("Y" == "Y") {
        if (location.protocol === 'http:') {
            top.location.href = "https://" + location.hostname;
        }
    }

    // 팝업 알림 날짜 확인
    let popDate = localStorage.getItem('popDate');
    if (popDate !== today) {
        fnPopNotice();
    }
});

// Token을 설정하고 가져오는 함수
function setToken(token) {
    document.form.token.value = token;
}

function getToken() {
    return document.form.token.value;
}

// `#Main` iframe의 src 설정하는 함수 (IsDuplicate 함수 정의 포함)
window.onload = function() {
    $("#Main").attr("src", context + "/login?attribute" + IsDuplicate());
};

// 중복 확인 기능의 샘플 함수 정의 (실제 로직은 수정 가능)
function IsDuplicate() {
    // 중복 검사를 수행하는 로직이 필요할 경우 여기에 추가
    return "";  // 현재 빈 문자열 반환
}

// 날짜 형식 함수
function dateFormat(date) {
    let dateFormat2 = date.getFullYear() + '-' +
        ((date.getMonth() + 1) < 10 ? "0" + (date.getMonth() + 1) : (date.getMonth() + 1)) + '-' +
        (date.getDate() < 10 ? "0" + date.getDate() : date.getDate());
    return dateFormat2;
}

// 팝업 공지 기능 구현
function fnPopNotice() {
    // `popNotice` 요소에 jQuery UI의 dialog 기능 적용
    $("#popNotice").dialog({
        resizable: false,
        width: 1200,
        height: 700,
        modal: true,
        closeOnEscape: false,
        draggable: true,
        open: function(event, ui) {
            $('#popNotice').load(context + "/popNotice.jsp?fake=" + Date.now());
        },
        buttons: [
            {
                text: "오늘 하루 동안 열지 않음",
                click: function() {
                    $(this).dialog("close");
                    fnPopClose(); // 팝업을 닫을 때 날짜 저장
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

// 팝업 알림 닫기 기능
function fnPopClose() {
    localStorage.setItem('popDate', today);
}
