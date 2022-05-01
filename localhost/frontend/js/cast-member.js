// import * as req from './requests.js'


function setPropsId(id_s, prop) {

    for (id of id_s) {
        var containerName = document.getElementById(id);
        containerName.innerHTML = prop;
    }
}


function addBlockCareer(careerName, films) {

    var containerName = document.getElementById("films-career");

    filmsTag = ""

    for (film of films) {
        filmsTag += `<li class = "films-item">` + film + `</li>`
    }

    containerName.innerHTML += `<span class = "films-career-name">` + careerName + `</span>
                                <ul class = "films-career-list">` + filmsTag + `</ul></div>`

}

function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (m, key, value) {
        vars[key] = value;
    });
    return vars;
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




setPropsId(['name', 'name-form'], 'Shasha Grey');
setPropsId(['age'], '18');
setPropsId(['date-birth'], '00-00-0000');
setPropsId(['place-birth'], 'Kazachastan');
setPropsId(['career'], 'Actress, Rocker');
setPropsId(['count-films'], '+100500');
addBlockCareer('Robot', ['Love', 'Love2']);
addBlockCareer('Robot', ['Love', 'Love2']);

addBlockCareer('Robot', ['Love', 'Love2']);
addBlockCareer('Robot', ['Love', 'Love2']);


console.log(getUrlVars());