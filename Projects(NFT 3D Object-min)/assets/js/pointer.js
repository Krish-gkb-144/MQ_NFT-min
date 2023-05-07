const mouseTracker = document.getElementById("mouse-follower");
const mouseTrackerDot = document.getElementById("dot");

window.addEventListener("mousemove", (e) => {
  mouseTracker.animate(
    [
      {
        opacity: 1,
        left: `${e.clientX}px`,
        top: `${e.clientY}px`,
        easing: "ease-in-out"
      }
    ],
    {
      duration: 2000,
      fill: "forwards"
    }
  );

  mouseTrackerDot.animate(
    [
      {
        opacity: 1,
        left: `${e.clientX}px`,
        top: `${e.clientY}px`,
        easing: "ease-in-out"
      }
    ],
    {
      duration: 1000,
      fill: "forwards"
    }
  );
});

window.addEventListener("mouseout", (e) => {
  if (e.relatedTarget === null) {
    mouseTracker.animate(
      [
        {
          opacity: 1
        },
        {
          opacity: 0,
          easing: "ease-in-out"
        }
      ],
      {
        duration: 100,
        fill: "forwards"
      }
    );

    mouseTrackerDot.animate(
      [
        {
          opacity: 1
        },
        {
          opacity: 0,
          easing: "ease-in-out"
        }
      ],
      {
        duration: 100,
        fill: "forwards"
      }
    );
  }
});
