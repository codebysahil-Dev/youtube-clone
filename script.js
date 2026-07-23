let links = document.querySelectorAll('.thumbnail a');

for (let i = 0; i < links.length; i++) {
    links[i].onclick = function(e) {
        e.preventDefault();
    };
}

let cards = document.querySelectorAll('.completed, .video-card');

for (let i = 0; i < cards.length; i++) {
    cards[i].onclick = function() {
        let link = cards[i].querySelector('a');
        window.open(link.href, '_blank');
    };
}
