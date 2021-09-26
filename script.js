// Storage Part
var cl = {
    h: null,
    m: null,
    s: null,
    l: {
        h: -1,
        m: -1
    },
    themes: {
        l: ['Default', 'Dark', 'Night Mode', 'Girly', 'Greens']
    }
}

// Web-page loading Part
window.onload = function() {
    createThemes()
    createMarks()
    createNumbers()
    cl.h = g('hh')
    cl.m = g('hm')
    cl.s = g('hs')
    clock()
}

// Change themes (<select>)
document.onchange = function(a) {
    var b = ['tH', 'm', 'tC', 'mks', 'mkn', 'tB', 'hh', 'hm', 'hs', 'tT']
    for(var c = 0; c < b.length; c++) {
        g(b[c]).setAttribute('data', a.target.selectedIndex)
    }
}

// Clock 
function clock() {
    var a = new Date()
    setTimeout(clock, 1000 - a.getMilliseconds())
    if(cl.l.h != a.getHours()) {
        setRotate(cl.h, (360 * a.getHours() / 12) + (a.getMinutes() * .5))
        cl.l.h = a.getHours()
    }
    if(cl.l.m != a.getMinutes()) {
        setRotate(cl.m, 360 * a.getMinutes() / 60)
        cl.l.m = a.getMinutes()
    }
    setRotate(cl.s, 360 * a.getSeconds() / 60)
}

// Rotatation
function setRotate(a, b) {
    a.style.transform = 'rotate(' + b + 'deg) translateY(-5vh)'
    a.style.webkitTransform = 'rotate(' + b + 'deg) translateY(-5vh)'
    a.style.msTransform = 'rotate(' + b + 'deg) translateY(-5vh)'
}

//  Themes 
function createThemes() {
    var a = g('m')
    for(var b = 0; b < cl.themes.l.length; b++) {
        a.innerHTML += '<option value="' + b + '">' + cl.themes.l[b] + '</option>'
    }
}

// Min mark
function createMarks() {
    var a = g('mks')
    for(var b = 0; b < 60; b++) {
        if(b % 5 != 0) {
            a.innerHTML += '<m style="transform: rotate(' + (b * 6) + 'deg) translateY(-21vh); -webkit-transform: rotate(' + (b * 6) + 'deg) translateY(-21vh); -ms-transform: rotate(' + (b * 6) + 'deg) translateY(-21vh);"></m>'
        }
    }
}

// Number
function createNumbers() {
    var a = ['9.1vh, -18.5vh', '16.2vh, -11.4vh', '19vh, -1.75vh', '16.1vh, 8vh', '8.9vh, 15.1vh', '-.8vh, 17.7vh', '-10.7vh, 15.1vh', '-18vh, 8vh', '-20.8vh, -1.75vh', '-18.2vh, -11.1vh', '-11.2vh, -18.2vh', '-2vh, -21vh']
    var b = g('mkn')
    for(var c = 0; c < 12; c++) {
        b.innerHTML += '<m style="transform: translate(' + a[c] + '); -webkit-transform: translate(' + a[c] + '); -ms-transform: translate(' + a[c] + ');">' + (1 + c) + '</m>'
    }
}

// Get element by id
function g(a) {
    return document.getElementById(a)
}
