function initAccordion() {
  const tabControls = document.querySelectorAll(".faq__tab-control");
  const accordionWrappers = document.querySelectorAll(
    ".faq__accordion-wrapper"
  );
  tabControls[0].classList.add("faq__tab-control--is-selected");

  const openFirstAccordion = () => {
    const firstAccordionItem = document.querySelector(
      "li[data-target='accordion']"
    );
    if (firstAccordionItem) {
      const content = firstAccordionItem.querySelector("p");
      firstAccordionItem.classList.add("is-opened");
      content.style.maxHeight = content.scrollHeight + "px";
    }
  };

  openFirstAccordion();

  tabControls.forEach((control) => {
    control.addEventListener("click", () => {
      tabControls.forEach((c) => {
        c.classList.remove("faq__tab-control--is-selected");
      });

      control.classList.add("faq__tab-control--is-selected");

      const target = control.getAttribute("data-target");
      const accordion = document.querySelector(
        `.faq__accordion-wrapper[data-target="${target}"]`
      );

      accordionWrappers.forEach((accWrapper) => {
        accWrapper.classList.remove("is-active");

        accordion.classList.add("is-active");
      });
    });
  });

  const accordionItems = document.querySelectorAll(
    "li[data-target='accordion']"
  );

  accordionItems.forEach((item) => {
    const button = item.querySelector(".faq__button");
    const content = item.querySelector("p");

    item.addEventListener("click", (event) => {
      const isOpened = item.classList.contains("is-opened");

      if (!isOpened) {
        item.classList.add("is-opened");
        button.classList.add("is-opened");
        button.classList.remove("is-closed");
        content.style.maxHeight = content.scrollHeight + "px";
      } else {
        item.classList.remove("is-opened");
        button.classList.remove("is-opened");
        button.classList.add("is-closed");
        content.style.maxHeight = null;
      }
    });
  });

  accordionItems.forEach((item) => {
    item.addEventListener("keydown", handleAccordionFocus);
  });

  const handleAccordionFocus = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      const isOpened = e.currentTarget.classList.contains("is-opened");
      const content = e.currentTarget.querySelector("p");

      if (!isOpened) {
        e.currentTarget.classList.add("is-opened");
        content.style.display = "block";
      } else {
        e.currentTarget.classList.remove("is-opened");
        content.style.display = "none";
      }
    }
  };

  const removeFocusFromHiddenElements = () => {
    document.addEventListener("visibilitychange", () => {
      if (document.hidden) {
        const focusedElement = document.activeElement;
        const hasOpacity = focusedElement.style.opacity === "0";
        const hasZeroHeight = focusedElement.clientHeight === 0;

        if (hasOpacity || hasZeroHeight) {
          focusedElement.blur();
        }
      }
    });
  };

  removeFocusFromHiddenElements();

  accordionItems.forEach((item) => {
    item.addEventListener("keydown", handleAccordionFocus);
  });

  const handleTabFocus = (e) => {
    const currentIndex = Array.from(tabControls).findIndex((tab) =>
      tab.classList.contains("faq__tab-control--is-selected")
    );

    if (e.key === "ArrowUp" || e.key === "ArrowDown") {
      e.preventDefault();

      if (e.key === "ArrowUp") {
        const previousIndex =
          (currentIndex - 1 + tabControls.length) % tabControls.length;
        tabControls[previousIndex].click();
        tabControls[previousIndex].focus();
      } else if (e.key === "ArrowDown") {
        const nextIndex = (currentIndex + 1) % tabControls.length;
        tabControls[nextIndex].click();
        tabControls[nextIndex].focus();
      }
    }
  };

  tabControls.forEach((tab, index) => {
    tab.addEventListener("keydown", handleTabFocus);
  });

  tabControls.forEach((tab) => {
    tab.addEventListener("keydown", handleTabFocus);
  });
}

export default initAccordion;
