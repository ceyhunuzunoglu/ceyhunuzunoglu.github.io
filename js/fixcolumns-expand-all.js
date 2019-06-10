document.addEventListener(`DOMContentLoaded`, function() {
    fixColumnsExpandAll();
});

function fixColumnsExpandAll(){
    var amount = 1200;
    
    var w = window;
    d = document;
    e = d.documentElement;
    g = d.getElementsByTagName(`body`)[0];
    x = w.innerWidth || e.clientWidth || g.clientWidth;
    y = w.innerHeight|| e.clientHeight|| g.clientHeight;

    console.log(`fixColumnsExpandAll: ${x}, ${y}`);

    if(x >= amount){
        var nav = document.getElementsByClassName(`md-nav`);
        for(var i = 0; i < nav.length; i++) {
            if (typeof nav.item(i).style === "undefined") {
                continue;
            }

            if (nav.item(i).getAttribute(`data-md-level`) && nav.item(i).getAttribute(`data-md-component`)) {
                nav.item(i).style.display = `block`;
                nav.item(i).style.overflow = `visible`;
            }
        }

        var nav = document.getElementsByClassName(`md-nav__toggle`);
        for(var i = 0; i < nav.length; i++) {
            nav.item(i).checked = true;
        }
    } 
}