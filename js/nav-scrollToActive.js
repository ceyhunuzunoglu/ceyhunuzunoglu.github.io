document.addEventListener(`DOMContentLoaded`, function() {
    scrollHighlightedElementIntoView();
});

function scrollHighlightedElementIntoView(){
    var amount = 1200;
    
    var w = window;
    d = document;
    e = d.documentElement;
    g = d.getElementsByTagName(`body`)[0];
    x = w.innerWidth || e.clientWidth || g.clientWidth;
    y = w.innerHeight|| e.clientHeight|| g.clientHeight;

    console.log(`scrollHighlightedElementIntoView: ${x}, ${y}`);
    
    console.log(`scrollHighlightedElementIntoView: ${d.title}`);

    if(x >= amount){
        var active = document.getElementsByClassName(`md-nav__link md-nav__link--active`)[0].parentElement
        // scroll the parent element into view first
        scrollNavItemIntoView(active);
        active.style.display = `block`;
        active.style.overflow = `visible`;
        active.firstElementChild.checked = true
        // now do the child       
        scrollNavItemIntoView(document.getElementsByClassName(`md-nav__link md-nav__link--active`)[0])
    }
}

function scrollNavItemIntoView(active){
        active.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' })
}

