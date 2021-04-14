
//variable hover color of welcome text

var colors = ['#4894df','#fa6649','#fbc626','#50cc66'];

function changeColor(obj) {
    var rand = colors[Math.floor(Math.random() * colors.length)];
    obj.style.color = rand;
}

function removeColor(obj) {
    obj.style.color = 'black';
}

//popup on load

function loadpop(hideOrshow) {
    if (hideOrshow == 'hide') {
        document.getElementById('popuponload').style.visibility = 'hidden';
        document.getElementById('popuponload').style.opacity = 0;
    } else {
        document.getElementById('popuponload').style.visibility = 'visible';;
        document.getElementById('popuponload').style.opacity = 1;
    }
}
window.onload = function () {

    setTimeout(function () {
        window.location.href = "?#";
    }, 10);

    setTimeout(function () {
        loadpop('show');
    }, 500);
}

// close window

function closewin() {
    window.open('..','_self','');
    window.close();
}

//like clickCounter

function clickCounter() {
    if (typeof(Storage) !== "undefined") {
        if (localStorage.clickcount) {
            localStorage.clickcount = Number(localStorage.clickcount) + 1;
        } else {
            localStorage.clickcount = 1;
        }

    document.getElementById("result").innerHTML = localStorage.clickcount;
    document.getElementById("liketext").style.visibility = 'hidden';
    } else {
    document.getElementById("result").innerHTML = "Sorry, your browser does not support web storage..."
    }
}


//contact hovers

function showPop(id) {

    var box = document.getElementById('popcontainer');

    if (id == 'whatsapp') {
        var element = document.getElementById('whatsapppop');
    }
    if (id == 'facebook') {
        var element = document.getElementById('fbpop');
    }
    if (id == 'instagram') {
        var element = document.getElementById('instapop');
    }
    if (id == 'twitter') {
        var element = document.getElementById('tweetpop');
    }
    if (id == 'github') {
        var element = document.getElementById('gitpop');
    }
    if (id == 'pinterest') {
        var element = document.getElementById('pinpop');
    }
    element.style.visibility = 'visible';

    box.style.visibility = 'visible';
    box.style.height = '2.5vh';
    box.style.minHeight = '40px';
}

function hidePop(id) {

    var box = document.getElementById('popcontainer');

    if (id == "whatsapp") {
        var element = document.getElementById('whatsapppop')
    }
    if (id == 'facebook') {
        var element = document.getElementById('fbpop');
    }
    if (id == 'instagram') {
        var element = document.getElementById('instapop');
    }
    if (id == 'twitter') {
        var element = document.getElementById('tweetpop');
    }
    if (id == 'github') {
        var element = document.getElementById('gitpop');
    }
    if (id == 'pinterest') {
        var element = document.getElementById('pinpop');
    }
    element.style.visibility = 'hidden';

    box.style.visibility = 'hidden';
    box.style.height = '0vh';
    box.style.minHeight = '0px';
}


//namepopup done

function namepopupdone() {

    window.location.href = "?#popup2";

    let visitorname = document.forms.inputnameform.inputname.value;

    if (visitorname != "") {

        document.getElementById("namegreetings").innerHTML = "Hello, " + visitorname + "!"
    } else {

        document.getElementById("namegreetings").innerHTML = "Hello! Friend"
    }
}


//feedpopup done

function feedpopupdone() {
    window.location.href = "?#popup3";
}

//discover button on discover HOMEPAGE

function gotodiscovergrid() {
    var start = document.getElementById('discoverStart');
    var grid = document.getElementById('discoverGrid');

    start.style.visibility = 'hidden';
    grid.style.visibility = 'visible';
}
