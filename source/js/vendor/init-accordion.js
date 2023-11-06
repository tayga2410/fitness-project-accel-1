function initAccordion() {
  const tabControls = document.querySelectorAll(".faq__tab-control");
  const accordionWrappers = document.querySelectorAll(".faq__accordion-wrapper");

  accordionWrappers.forEach((accordion) => {
    accordion.style.display = "none";
  });

  accordionWrappers[0].style.display = "block";
  tabControls[0].classList.add("faq__tab-control--is-selected");

  tabControls.forEach((control) => {
    control.addEventListener("click", () => {
      tabControls.forEach((c) => {
        c.classList.remove("faq__tab-control--is-selected");
      });

      control.classList.add("faq__tab-control--is-selected");

      const target = control.getAttribute("data-target");
      const accordion = document.querySelector(`.faq__accordion-wrapper[data-target="${target}"]`);

      accordionWrappers.forEach((accordion) => {
        accordion.style.display = "none";
      });

      accordion.style.display = "block";
    });
  });

  const accordionButtons = document.querySelectorAll(".faq__accordion-wrapper .faq__button");

  accordionButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const content = button.nextElementSibling;

      if (button.classList.contains("is-opened")) {
        button.classList.remove("is-opened");
        button.classList.add("is-closed");
        content.style.display = "none";
      } else if (button.classList.contains("is-closed")) {
        button.classList.remove("is-closed");
        content.style.display = "block";
        button.classList.add("is-opened");
      } else {
        button.classList.add("is-opened");
        content.style.display = "block";
      }
    });
  });
}

export default initAccordion;
