document.addEventListener("DOMContentLoaded", function() {
    console.log("addEventListener:DOMContentLoaded: begin");
    doctor_links();
    console.log("addEventListener:DOMContentLoaded: end");
});

function doctor_links(){
    console.log("doctor_links: begin");
    var links = document.links;
    var i = 0;
    var linksLength = links.length;

    while(i < linksLength) {
        if (links[i].hostname != window.location.hostname) {
            links[i].target = "_blank";
        }
        i++;
    }
    console.log("doctor_links: end");
}