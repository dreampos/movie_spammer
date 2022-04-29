<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <link rel="stylesheet" href="bootstrap/css/bootstrap-reboot.css">
    <link rel="stylesheet" href="./css/cast_member.css">

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@300;400;500;600;700&display=swap" rel="stylesheet">

    <script src="https://code.jquery.com/jquery-3.5.1.js" integrity="sha256-QWo7LDvxbWT2tbbQ97B53yJnYU3WhH/C8ycbRAkjPDc=" crossorigin="anonymous"></script>

    <script defer src="./js/cast_member.js"></script>

    <title>Cast Member</title>

</head>

<body class="page">

    <header id="header"></header>

    <div id="container-info">
        <div class="info-box">

            <span id="name" class="info-name"></span>

            <div class="info-main">

                <div class="info-img-block">
                    <img id="cast-member-img" class="cast-member-img" src="./img/cast_member.png">
                </div>

                <ul class="info-cast-member">

                    <li class="info-li">
                        <span class="info-li-name">Name:</span>
                        <span id="name-form" class="info-li-text"></span>
                    </li>

                    <li class="info-li">
                        <span class="info-li-name">Age:</span>
                        <span id="age" class="info-li-text age"></span>
                    </li>

                    <li class="info-li">
                        <span class="info-li-name ">Date of birth:</span>
                        <span id="date-birth" class="info-li-text date-birth"></span>
                    </li>

                    <li class="info-li">
                        <span class="info-li-name">Place of birth:</span>
                        <span id="place-birth" class="info-li-text place"></span>
                    </li>

                    <li class="info-li">
                        <span class="info-li-name">Career:</span>
                        <span id="career" class="info-li-text career"></span>
                    </li>

                    <li class="info-li">
                        <span class="info-li-name">Count of Films:</span>
                        <span id="count-films" class="info-li-text count"></span>
                    </li>

                    <li class="info-li">
                        <span class="info-li-name">About:</span>
                        <span class="info-li-text about">
                            Entry and exit are equivalent concepts of
                            an ambiguous basis, a career is the main dream
                        </span>
                    </li>

                </ul>

            </div>
        </div>

        <div class="info-films">

            <span class="info-name films" onclick="facechange('.films-career-list'); return false">Filmography</span>

            <div class="films-box">

                <div id="films-career" class="films-career">

                    <div class="films-career-body">

                        <span class="films-career-name">Actress</span>
                        <ul class="films-career-list">
                            <li class="films-item">Love games</li>
                            <li class="films-item">Love games2</li>
                            <li class="films-item">Love games3</li>
                        </ul>

                    </div>
                </div>
            </div>
        </div>
    </div>

    <footer id="footer"></footer>

</body>

</html>