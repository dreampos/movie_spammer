function setBlockReview(name, date, text) {

    var containerName = document.getElementById("reviews");

    containerName.innerHTML += ` <div class = "reviews-block"> 

    <div class = "reviews-block-name-date">
        <span class = "reviews-user-name">` + name + `</span>
        <span class = "reviews-user-date">` + date + `</span>
    </div>

    <div class = "reviews-user-text">` + text + `</div>

</div>`

}

function faceChange(objName) {
    if ($(objName).css('display') == 'none') {
        $(objName).animate({
            height: 'show'
        }, 400);
    } else {
        $(objName).animate({
            height: 'hide'
        }, 200);
    }
};

function setPropsId(id_s, prop) {

    for (id of id_s) {
        var containerName = document.getElementById(id);
        containerName.innerHTML = prop;
    }
}


function getUrlVars() {

    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (m, key, value) {
        vars[key] = value;
    });
    return vars;
}


setPropsId(['genre'], 'triller');
setPropsId(['yearOfProd'], '2021');
setPropsId(['name', 'name-form'], 'Elden Ring');
setPropsId(['director'], 'Noname');
setPropsId(['writer'], 'Noname');
setPropsId(['cast'], 'Noname, Noname');
setPropsId(['release-date'], '00-00-0000');
setPropsId(['duration'], '80h');
setPropsId(['budget'], '80 limes');
setPropsId(['country'], 'Kazachstan')

setBlockReview('Yana', 'review added today at 14.53', 'Huyna');
setBlockReview('Yana', 'review added today at 14.53', 'Huyna');
setBlockReview('Yana', 'review added today at 14.53', 'Huyna');
setBlockReview('Yana', 'review added today at 14.53', 'Huyna');
