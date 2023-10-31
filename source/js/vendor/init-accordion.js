function initAccordion() {
    const tabControls = document.querySelectorAll(".faq__tab-control");
    
    const accordionWrappers = document.querySelectorAll(".faq__accordion-wrapper");
  
    accordionWrappers.forEach((accordion) => {
      accordion.style.display = "none";
    });
  
    accordionWrappers[0].style.display = "block";
  
    tabControls.forEach((control) => {
      control.addEventListener("click", () => {
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
  
        button.classList.toggle("is-opened");
        content.style.display = button.classList.contains("is-opened") ? "block" : "none";
      });
    });
  }
  
  export default initAccordion;
  
  
