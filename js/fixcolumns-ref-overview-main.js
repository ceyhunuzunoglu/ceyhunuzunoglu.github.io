document.addEventListener(`DOMContentLoaded`, function() {
    fixColumnsOverviewMain();
});

function fixColumnsOverviewMain(){
    var amount = 1200;
    
    var w = window;
    d = document;
    e = d.documentElement;
    g = d.getElementsByTagName(`body`)[0];
    x = w.innerWidth || e.clientWidth || g.clientWidth;
    y = w.innerHeight|| e.clientHeight|| g.clientHeight;

    console.log(`fixColumnsOverviewMain: ${x}, ${y}`);

    if(x >= amount){
  var nav = document.getElementsByClassName(`md-nav`);
    for(var i = 0; i < nav.length; i++) {
        if (typeof nav.item(i).style === "undefined") {
            continue;
        }

        if ((nav.item(i).getAttribute(`data-md-level`) && 
                nav.item(i).getAttribute(`data-md-component`)) && 
                    (isOneWeWant(nav.item(i).children[0]))) {

            nav.item(i).style.display = `block`;
            nav.item(i).style.overflow = `visible`;
        }
    }

    var nav = document.getElementsByClassName(`md-nav__toggle`);
    for(var i = 0; i < nav.length; i++) {
        if(isOneWeWant(nav.item(i).parentElement.children[1]))
            nav.item(i).checked = true;
    }    } 
}


function isOneWeWant(navItem) {
    var onesWeDontWant = ["Reference"];
    var label = navItem.innerText.trim();
    console.log(`isOneWeWant: ${label} ${(onesWeDontWant.indexOf(label) == -1)}`);
    return (onesWeDontWant.indexOf(label) == -1);
}
