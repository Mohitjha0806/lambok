gsap.from(".logi,  ul li", {
    opacity: 0,
    y: -10,
    delay: 0.5,
    duration: 1,
    stagger: 0.5

});
gsap.from(".h1, .h2, .hr", {
    opacity: 0,
    y: 50,
    scale: 1.01,
    delay: 1.2,
    duration: 1,
    stagger: 0.5

});
gsap.from("#c2h2, #c2hr2", {
    opacity: 0,
    y: -50,
    scale: 1.01,
    delay: 0.5,
    duration: 0.7,
    stagger: 0.5,

});
gsap.from(".cart-1, .cart-2", {
    opacity: 0,
    x: -50,
    delay: 0.5,
    duration: 1,
    stagger: 0.5,
    scrollTrigger: {
        trigger: ".cart-1, .cart-2",
        scroller: "body",
        markers: false,
        start: "top 70%",
        end: "top 30%",
        scrub: true,
    }
});
gsap.from(".cart-3, .cart-4", {
    opacity: 0,
    x: 50,
    delay: 0.5,
    duration: 1,
    stagger: 0.5,
    scrollTrigger: {
        trigger: ".cart-3, .cart-4",
        scroller: "body",
        markers: false,
        start: "top 70%",
        end: "top 30%",
        scrub: true,
    }
});
gsap.from(".left3", {
    opacity: 0,
    x: -60,
    delay: 0.5,
    duration: 1,
    stagger: 0.5,
    scrollTrigger: {
        trigger: ".left3",
        scroller: "body",
        markers: false,
        start: "top 70%",
        end: "top 30%",
        scrub: true,
    }
});
gsap.from(".right3", {
    opacity: 0,
    x: 60,
    delay: 0.5,
    duration: 0.7,
    stagger: 0.5,
    scrollTrigger: {
        trigger: ".right3",
        scroller: "body",
        markers: false,
        start: "top 70%",
        end: "top 30%",
        scrub: true,
    }
});

gsap.from("#h4, #p4, #input4", {
    opacity: 0,
    scale: 1.1,
    delay: 0.5,
    duration: 0.7,
    stagger: 0.5,
    scrollTrigger: {
        trigger: "#h4, #p4, #input4",
        scroller: "body",
        markers: false,
        start: "top 70%",
        end: "top 30%",
        scrub: true,
    }
});
gsap.from("#submit4", {
    opacity: 0,
    y: 50,
    delay: 0.5,
    duration: 0.7,
    stagger: 0.5,
    scrollTrigger: {
        trigger: "#submit4",
        scroller: "body",
        markers: false,
        start: "top 70%",
        end: "top 30%",
        scrub: true,
    }
});
gsap.from("#footer-a, #footer-li", {
    opacity: 0,
    y: -50,
    delay: 0.5,
    duration: 0.5,
    stagger: 0.5,
    scrollTrigger: {
        trigger: "#footer-a, #footer-li",
        scroller: "body",
        markers: false,
        start: "top 95%",
        end: "top 80%",
        scrub: true,
    }
});

// ===============navbar--===============
function myFunction() {
    var x = document.getElementById("menu");

    if (x.style.display == "block") {
        x.style.display = "none";
    }
    else {
        x.style.display = "block";
    }
}

// ===============navbar--===============