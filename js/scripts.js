---
layout:
---

{% include_relative jquery-2.1.4.min.js %}
{% include_relative bootstrap.min.js %}
{% include_relative jquery.fitvids.js %}
{% include_relative jquery.mb.YTPlayer.js %}
{% include_relative owl.carousel.min.js %}
{% include_relative wow.min.js %}
{% include_relative jquery.parallax-1.1.3.js %}
{% include_relative jquery.countTo.js %}
{% include_relative jquery.countdown.min.js %}
{% include_relative jquery.appear.js %}
{% include_relative smoothscroll.js %}
{% include_relative jquery.magnific-popup.min.js %}
<!-- particleground -->
{% include_relative jquery.particleground.js %}
    

particlesJS("particles-js", {
    "particles": {
    "number": {
        "value":43, "density": {
        "enable": true, "value_area": 500
        }
    }
    , "color": {
        "value": "#ffffff"
    }
    , "shape": {
        "type":"circle", "stroke": {
        "width": 0, "color": "#070707"
        }
        , "polygon": {
        "nb_sides": 4
        }
        , "image": {
        "src": "img/github.svg", "width": 100, "height": 100
        }
    }
    , "opacity": {
        "value":0.5, "random":false, "anim": {
        "enable": false, "speed": 1, "opacity_min": 0.1, "sync": false
        }
    }
    , "size": {
        "value":2, "random":false, "anim": {
        "enable": false, "speed": 40, "size_min": 0.1, "sync": false
        }
    }
    , "line_linked": {
        "enable": true, "distance": 126.26362266116361, "color": "#ffffff", "opacity": 0.4, "width": 1
    }
    , "move": {
        "enable":true, "speed":3, "direction":"none", "random":true, "straight":false, "out_mode":"out", "bounce":false, "attract": {
        "enable": true, "rotateX": 600, "rotateY": 1200
        }
    }
    }
    , "interactivity": {
    "detect_on":"canvas", "events": {
        "onhover": {
        "enable": true, "mode": "grab"
        }
        , "onclick": {
        "enable": true, "mode": "push"
        }
        , "resize":true
    }
    , "modes": {
        "grab": {
        "distance":133.99274002972194, "line_linked": {
            "opacity": 0.5261837109713353
        }
        }
        , "bubble": {
        "distance": 400, "size": 40, "duration": 2, "opacity": 8, "speed": 3
        }
        , "repulse": {
        "distance": 200, "duration": 0.4
        }
        , "push": {
        "particles_nb": 4
        }
        , "remove": {
        "particles_nb": 2
        }
    }
    }
    , "retina_detect":true
}

);
<!-- /particleground -->

{% include_relative imagesloaded.pkgd.min.js %}
{% include_relative isotope.pkgd.min.js %}
{% include_relative email.js %}
{% include_relative main.js %}