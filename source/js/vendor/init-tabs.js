function initTabs() {
  const buttons = document.querySelectorAll(".subscription__tabs-controls button");
  const prices = document.querySelectorAll("[data-content]");
  const tabs = document.querySelectorAll(".subscription__tabs li");
  const buttonTabs = document.querySelectorAll (".subscription__button");

  const pricesPerPeriod = [
    [5000, 1700, 2700],
    [30000, 10200, 16200],
    [60000, 20400, 32400],
  ];

  function updatePrices(index) {
    prices.forEach((price, idx) => {
      const currentPrice = pricesPerPeriod[index][idx];
      const icon = price.querySelector('svg'); 

      price.setAttribute('data-content', currentPrice); 
      price.textContent = ''; 
      price.appendChild(document.createTextNode(currentPrice)); 
      price.appendChild(icon); 
    });
  }

  updatePrices(0);
 
  buttons.forEach((button, index) => {
    button.addEventListener("click", () => {
      updatePrices(index); 

      buttons.forEach((btn) => {
        btn.classList.remove("subscription__tabs-control--is-selected");
      });

      button.classList.add("subscription__tabs-control--is-selected");

      button.classList.add("subscription__tabs-control--is-selected");
    });
  });

  tabs.forEach((tab) => {
    tab.addEventListener("mouseover", () => {
      removeSelectedClass(tabs, "is-selected");
      tab.classList.add("is-selected");
    });

    tab.addEventListener("focus", () => {
      removeSelectedClass(tabs, "is-selected");
      tab.classList.add("is-selected");
    });
  });

  buttonTabs.forEach((buttonTab) => {
    buttonTab.addEventListener("mouseover", () => {
      removeSelectedClass(buttonTabs, "subscription__button--is-selected");
      buttonTab.classList.add("subscription__button--is-selected");
    });

    buttonTab.addEventListener("focus", () => {
      removeSelectedClass(buttonTabs, "subscription__button--is-selected");
      buttonTab.classList.add("subscription__button--is-selected");
    });
  });

  function removeSelectedClass(elements, className) {
    elements.forEach((el) => {
      el.classList.remove(className);
    });
  }
}


export default initTabs;
