function set_block_review(name, date, text) {

    var container_name = document.getElementById("reviews");

    container_name.innerHTML += ` <div class = "reviews-block"> 

    <div class = "reviews-block-name-date">
        <span class = "reviews-user-name">` + name + `</span>
        <span class = "reviews-user-date">` + date + `</span>
    </div>

    <div class = "reviews-user-text">` + text + `</div>

</div>`

}


function facechange(objName) {
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

function set_(id_s, prop) {

    for (id of id_s) {
        var container_name = document.getElementById(id);
        container_name.innerHTML = prop;
    }
}


function getUrlVars() {

    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (m, key, value) {
        vars[key] = value;
    });
    return vars;
}


set_(['genre'], 'triller');
set_(['yearOfProd'], '2021');
set_(['name', 'name-form'], 'Elden Ring');
set_(['director'], 'Noname');
set_(['writer'], 'Noname');
set_(['cast'], 'Noname, Noname');
set_(['release-date'], '00-00-0000');
set_(['duration'], '80h');
set_(['budget'], '80 limes');
set_(['country'], 'Kazachstan')

set_block_review('Yana', 'review added today at 14.53', 'Huyna');
set_block_review('Yana', 'review added today at 14.53', 'Huyna');
set_block_review('Yana', 'review added today at 14.53', 'Huyna');
set_block_review('Yana', 'review added today at 14.53', 'Huyna');
