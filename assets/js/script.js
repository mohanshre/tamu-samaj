document.addEventListener("DOMContentLoaded", (event) => {
  const counters = document.querySelectorAll(".counter");
  const speed = 200;

  window.addEventListener("scroll", () => {
    counters.forEach((counter) => {
      const updateCount = () => {
        const target = +counter.getAttribute("data-target");
        const count = +counter.innerText;

        const increment = target / speed;

        if (count < target) {
          counter.innerText = Math.ceil(count + increment);
          setTimeout(updateCount, 200);
        } else {
          counter.innerText = target;
        }
      };

      const sectionTop = counter.parentElement.offsetTop;
      const scrollPosition = window.scrollY + window.innerHeight;

      if (scrollPosition > sectionTop) {
        updateCount();
      }
    });
  });
});
