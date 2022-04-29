
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <link rel="stylesheet" href="bootstrap/css/bootstrap-reboot.css">
    <link rel="stylesheet" href="./css/movie.css">

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@300;400;500;600;700&display=swap" rel="stylesheet">

    <script defer src="./js/movie.js"></script>
    <script src="https://code.jquery.com/jquery-3.5.1.js" integrity="sha256-QWo7LDvxbWT2tbbQ97B53yJnYU3WhH/C8ycbRAkjPDc=" crossorigin="anonymous"></script>

    <title>Movie</title>
</head>

<body class = "page">
    <header id="header"></header>

    <div id="container-info">
        <div class="info-box">

            <span id="name" class="info-name"></span>

            <div class="info-main">

                <div class="info-img-block">
                    <img id="movie-img" class="movie-img" src="./img/m1.jpg">
                </div>

                <ul class="info-movie">

                    <li class="info-li">
                        <span class="info-li-name">Name:</span>
                        <span id="name-form" class="info-li-text"></span>
                    </li>

                    <li class="info-li">
                        <span class="info-li-name">Year of production:</span>
                        <span id="yearOfProd" class="info-li-text age"></span>
                    </li>

                    <li class="info-li">
                        <span class="info-li-name ">Country:</span>
                        <span id="country" class="info-li-text date-birth"></span>
                    </li>

                    <li class="info-li">
                        <span class="info-li-name">Genre:</span>
                        <span id="genre" class="info-li-text place"></span>
                    </li>

                    <li class="info-li">
                        <span class="info-li-name">Director:</span>
                        <span id="director" class="info-li-text career"></span>
                    </li>

                    <li class="info-li">
                        <span class="info-li-name">Writer:</span>
                        <span id="writer" class="info-li-text count"></span>
                    </li>

                    <li class="info-li">
                        <span class="info-li-name">Cast:</span>
                        <span id="cast" class="info-li-text count"></span>
                    </li>

                    <li class="info-li">
                        <span class="info-li-name">Date of release:</span>
                        <span id="release-date" class="info-li-text count"></span>
                    </li>

                    <li class="info-li">
                        <span class="info-li-name">Duration:</span>
                        <span id="duration" class="info-li-text count"></span>
                    </li>

                    <li class="info-li">
                        <span class="info-li-name">Budget:</span>
                        <span id="budget" class="info-li-text count"></span>
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

        <div id = "reviews" class="reviews">

            <span class = "reviews-name" onclick="facechange('.reviews-user-text'); return false">Reviews</span>

            <div class = "reviews-block"> 

                <div class = "reviews-block-name-date">
                    <span class = "reviews-user-name">Noname</span>
                    <span class = "reviews-user-date">the review was left today at 13.37</span>
                </div>

                <div class = "reviews-user-text"> Karoche Krutoy Film kkalqjjrekjrekrj</div>

            </div>

        </div>
    </div>

    <footer id="footer"></footer>
</body>

</html>