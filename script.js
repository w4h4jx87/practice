// function loadingAnimation() {
//   var tl = gsap.timeline();
//   tl.from("#main", {
//     opacity: 0,
//     duration: 0.2,
//     delay: 0.2,
//   });
//   tl.from("#main", {
//     transform: "scaleX(0.7) scaleY(0.2) translateY(80%)",
//     borderRadius: "150px",
//     duration: 0.5,
//     ease: "expo.out",
//   });
//   tl.from("#nav", {
//     opacity: 0,
//     delay: -0.2,
//   });
//   tl.from("#front" , {
//     opacity: 0,
//     duration: 0.5,
//     stagger: 0.2,
//   });
// }
function backgroundeffect() {
  Shery.imageEffect("#back", {
    style: 5,
    gooey: true,
    config: {
      a: { value: 1.49, range: [0, 30] },
      b: { value: -0.94, range: [-1, 1] },
      aspect: { value: 1.882297576656774 },
      ignoreShapeAspect: { value: true },
      shapePosition: { value: { x: 0.26, y: 0 } },
      shapeScale: { value: { x: 1, y: 1 } },
      shapeEdgeSoftness: { value: 0, range: [0, 0.5] },
      shapeRadius: { value: 0, range: [0, 2] },
      currentScroll: { value: 0 },
      scrollLerp: { value: 0.07 },
      gooey: { value: true },
      infiniteGooey: { value: true },
      growSize: { value: 4, range: [1, 15] },
      durationOut: { value: 1, range: [0.1, 5] },
      durationIn: { value: 1, range: [0.1, 5] },
      displaceAmount: { value: 0.5 },
      masker: { value: true },
      maskVal: { value: 1.05, range: [1, 5] },
      scrollType: { value: 0 },
      geoVertex: { range: [1, 64], value: 1 },
      noEffectGooey: { value: false },
      onMouse: { value: 1 },
      noise_speed: { value: 0.4, range: [0, 10] },
      metaball: { value: 0.17, range: [0, 2], _gsap: { id: 3 } },
      discard_threshold: { value: 0.5, range: [0, 1] },
      antialias_threshold: { value: 0, range: [0, 0.1] },
      noise_height: { value: 0.5, range: [0, 2] },
      noise_scale: { value: 10, range: [0, 100] },
    },
  });

  var elems = document.querySelectorAll(".elem");
  elems.forEach(function (elem) {
    var h1s = elem.querySelectorAll("h1");
    var index = 0;
    var animation = false;
    document.querySelector("#back").addEventListener("click", function () {
      if (!animation) {
        animation = true;
        gsap.to(h1s[index], {
          top: "-=100%",
          ease: Expo.easeInOut,
          duration: 1,
          onComplete: function () {
            gsap.set(this._targets[0], {
              top: "100%",
            });
            animation = false;
          },
        });

        index === h1s.length - 1 ? (index = 0) : index++;

        gsap.to(h1s[index], {
          top: "-=100%",
          ease: Expo.easeInOut,
          duration: 1,
        });
      }
    });
  });
}
function opentext() {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: "#main1",
      start: "50% 50%",
      end: "100% 50%",
      scrub: 0.8,
      pin: true,
    },
  });
  tl.to(
    "#top",
    {
      y: "-100%",
    },
    "a"
  );
  tl.to(
    "#bottom",
    {
      y: "100%",
    },
    "a"
  );
  tl.to(
    "#th",
    {
      y: "20%",
    },
    "a"
  );
  tl.to(
    "#bh",
    {
      y: "-20%",
    },
    "a"
  );
  tl.from("#p1", {
    y: "500%",
    opacity: 0,
  });
  tl.from("#p2", {
    y: "500%",
    opacity: 0,
  });
  tl.from("#p3", {
    y: "500%",
    opacity: 0,
  });
  tl.from("#p4", {
    y: "500%",
    opacity: 0,
  });
}
function marquee() {
  gsap.set("#slide", {
    scale: 5,
  });
  tl = gsap.timeline({
    scrollTrigger: {
      trigger: "#main2",
      start: "top top",
      end: "bottom top",
      scrub: 0.5,
      pin: true,
    },
  });
  tl.to(
    "#vid",
    {
      "clip-path": "circle(0% at 50% 50%)",
      ease: "power2",
    },
    "a"
  )
    .to(
      "#slide",
      {
        scale: 1,
        ease: "power2",
      },
      "a"
    )
    .to(
      ".lft",
      {
        x: "-30%",
        ease: "power2",
      },
      "b"
    )
    .to(
      ".rgt",
      {
        x: "30%",
        ease: "power2",
      },
      "b"
    );
}
// loadingAnimation();
backgroundeffect();
opentext();
marquee();
