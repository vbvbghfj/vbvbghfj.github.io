<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>수강신청 시스템</title>
    <link href="style.css" rel="stylesheet" type="text/css">
    <style>
        body {
            margin: 0;
            font-family: Arial, sans-serif;
            background-color: #f5f5f5;
        }

        /* 헤더 스타일 */
        .header {
            background-color: #005e34;
            color: white;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 10px 20px;
        }

        .header .logo {
            display: flex;
            align-items: center;
        }

        .header .logo img {
            height: 50px;
        }

        /* 메인 배너 스타일 */
        .main-banner {
            background-image: url('background.jpg'); /* 이미지 경로를 background.jpg로 설정 */
            background-size: cover;
            background-position: center;
            height: 400px;
            display: flex;
            justify-content: flex-end;
            align-items: center;
            padding: 20px;
        }

        .main-banner .login-box {
            background: white;
            padding: 20px;
            border-radius: 5px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            text-align: center;
        }

        .main-banner .login-box h1 {
            font-size: 20px;
            margin-bottom: 10px;
        }

        .main-banner .login-box input {
            display: block;
            width: 100%;
            padding: 10px;
            margin: 10px 0;
            border: 1px solid #ccc;
            border-radius: 4px;
        }

        .main-banner .login-box button {
            background-color: #ff6600;
            color: white;
            border: none;
            padding: 10px 15px;
            border-radius: 4px;
            cursor: pointer;
        }

        .main-banner .login-box button:hover {
            background-color: #e55a00;
        }

        /* 수강신청 일정 */
        .schedule-section {
            background: white;
            padding: 20px;
            margin: 20px auto;
            max-width: 1200px;
            border-radius: 5px;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }

        .schedule-section h1 {
            font-size: 24px;
            margin-bottom: 20px;
        }

        .schedule-section .schedule-container {
            display: flex;
            gap: 20px;
        }

        .schedule-card {
            background: #f9f9f9;
            padding: 15px;
            border: 1px solid #ddd;
            border-radius: 5px;
            flex: 1;
        }

        .schedule-card h2 {
            font-size: 18px;
            color: #005e34;
            margin-bottom: 10px;
        }

        .schedule-card p {
            font-size: 14px;
            color: #333;
        }

        .schedule-card a {
            text-decoration: none;
            color: #005e34;
        }
    </style>
</head>
<body>
    <!-- 헤더 -->
    <div class="header">
        <div class="logo">
            <img src="img-logo.png" alt="이화여자대학교 로고">
            <span>수강신청 시스템</span>
        </div>
    </div>

    <!-- 메인 배너 -->
    <div class="main-banner">
        <div class="login-box">
            <h1>수강신청 시스템</h1>
            <p>COURSE REGISTRATION</p>
            <form action="registrationpage.html" method="GET">
                <input type="text" name="student_id" placeholder="학번 (Student ID)">
                <input type="password" name="password" placeholder="비밀번호 (Password)">
                <button type="submit">로그인</button>
            </form>
        </div>
    </div>

    <!-- 수강신청 일정 -->
    <div class="schedule-section">
        <h1>수강신청 일정 <small>Course Registration Schedule</small></h1>
        <div class="schedule-container">
            <div class="schedule-card">
                <h2>계절학기 추가수강신청</h2>
                <p>2024 겨울계절학기 추가수강신청<br>2024 Winter Additional Course Registration</p>
                <a href="#">more+</a>
            </div>
            <div class="schedule-card">
                <h2>계절학기 수강신청</h2>
                <p>[학부] 2024 겨울계절수강 안내<br>2024 Winter Course Registration</p>
                <a href="#">more+</a>
            </div>
            <div class="schedule-card">
                <h2>수강신청 부정행위 관련 안내</h2>
                <p>수강신청 부정행위와 관련된 안내 사항</p>
                <a href="#">more+</a>
            </div>
        </div>
    </div>
</body>
</html>
