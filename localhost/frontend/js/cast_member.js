
function set_(id_s, prop) {

    for (id of id_s) {
        var container_name = document.getElementById(id);
        container_name.innerHTML = prop;
    }
}


function add_block_career(career_name, films) {

    console.log(career_name);

    var container_name = document.getElementById("films-career");

    films_tag = ""

    for (film of films) {
        films_tag += `<li class = "films-item">` + film + `</li>`
    }

    container_name.innerHTML += `<span class = "films-career-name">` + career_name + `</span>
                                <ul class = "films-career-list">` + films_tag + `</ul></div>`

}


function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (m, key, value) {
        vars[key] = value;
    });
    return vars;
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


set_(['name', 'name-form'], 'Shasha Grey');
set_(['age'], '18');
set_(['date-birth'], '00-00-0000');
set_(['place-birth'], 'Kazachastan');
set_(['career'], 'Actress, Rocker');
set_(['count-films'], '+100500');
add_block_career('Robot', ['Love', 'Love2']);
add_block_career('Robot', ['Love', 'Love2']);

add_block_career('Robot', ['Love', 'Love2']);
add_block_career('Robot', ['Love', 'Love2']);


console.log(getUrlVars());