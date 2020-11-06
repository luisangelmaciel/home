const tonyBody = document.querySelector("#body");
tonyBody.addEventListener("click", sunglasses);

function sayHi() {
  const tl = gsap.timeline();

  tl.to("#arm-right", 0.6, {
    morphSVG: "#arm-right-morph",
    ease: "power3.inOut"
  });

  tl.to("#arm-right", 0.6, {
    delay: -0.3,
    morphSVG: "#arm-right-morph-2",
    ease: "back.out"
  });

  tl.to("#arm-right", 0.6, {
    delay: -0.3,
    morphSVG: "#arm-right-morph-3",
    ease: "back.out"
  });

  tl.to("#arm-right", 0.6, {
    delay: -0.3,
    morphSVG: "#arm-right-morph-2",
    ease: "back.out"
  });

  tl.to("#arm-right", 0.6, {
    delay: -0.3,
    morphSVG: "#arm-right-morph-3",
    ease: "back.out"
  });

  tl.to("#arm-right", 0.6, {
    delay: -0.3,
    morphSVG: "#arm-right-morph-2",
    ease: "back.out"
  });

  tl.to("#arm-right", 0.6, {
    delay: -0.3,
    morphSVG: "#arm-right-morph-3",
    ease: "back.out"
  });

  tl.to("#arm-right", 0.6, {
    morphSVG: "#arm-right-morph-4",
    ease: "power3.inOut"
  });
}

function float() {
  const tl = gsap.timeline({ repeat: -1 });

  tl.to("#tony-pepperoni", 1, {
    y: -6,
    ease: "none"
  });

  tl.to("#tony-pepperoni", 1, {
    y: 0,
    ease: "none"
  });
}

function move() {
  const tl = gsap.timeline();

  tl.to("#tony-pepperoni", 0.9, {
    rotate: -6,
    ease: "power1.inOut",
    transformOrigin: "bottom center"
  });

  tl.to("#tony-pepperoni", 1.8, {
    delay: 1.8,
    rotate: 0,
    ease: "back.out",
    transformOrigin: "bottom center"
  });
}

function sunglasses() {
  const tl = gsap.timeline();

  tl.to("#arm-left", 0.2, {
    morphSVG: "#arm-left-morph-2",
    ease: "power3.inOut"
  });

  tl.to("#arm-left", 0.3, {
    delay: -0.1,
    morphSVG: "#arm-left-morph-3"
  });

  tl.to("#arm-left", 0.3, {
    delay: -0.2,
    morphSVG: "#arm-left-morph-4"
  });

  tl.to("#arm-left", 0.2, {
    delay: -0.2,
    morphSVG: "#arm-left-morph"
  });

  tl.to("#arm-left", 1.2, {
    morphSVG: "#arm-left-morph-4",
    ease: "back.out(4)"
  });

  tl.to("#sunglasses", 1.2, {
    delay: -1.2,
    rotate: -40,
    y: -9,
    transformOrigin: "bottom left",
    ease: "back.out(4)"
  });

  tl.to("#arm-left", 1.2, {
    delay: -0.6,
    morphSVG: "#arm-left-morph",
    ease: "power3.inOut"
  });

  tl.to("#sunglasses", 1.2, {
    delay: -1.2,
    rotate: 0,
    y: 0,
    transformOrigin: "bottom left",
    ease: "power3.inOut"
  });

  tl.to("#arm-left", 0.2, {
    morphSVG: "#arm-left-morph-5"
  });

  tl.to("#arm-left", 0.2, {
    delay: -0.1,
    morphSVG: "#arm-left-morph-6"
  });

  tl.to("#arm-left", 0.6, {
    delay: -0.1,
    morphSVG: "#arm-left",
    ease: "back.out"
  });

  tonyBody.style.pointerEvents = "none";

  setTimeout(() => {
    tonyBody.style.pointerEvents = "all";
  }, 2800);
}

function init() {
  sayHi();
  float();
  move();
}

init();