function initTabs() {
  const buttons = document.querySelectorAll('.tabs__controls button');
  const prices = document.querySelectorAll('.tabs__price');
  const fadedPrices = document.querySelectorAll('.tabs__faded-price');

  const pricesPerPeriod = [
    [5000, 1700, 2700],
    [30000, 10200, 16200],
    [60000, 20400, 32400]
  ];

  buttons.forEach((button, index) => {
    button.addEventListener('click', function() {
      prices.forEach((price, idx) => {
        price.textContent = pricesPerPeriod[index][idx];
      });

      fadedPrices.forEach((fadedPrice, idx) => {
        fadedPrice.textContent = pricesPerPeriod[index][idx];
      });

      buttons.forEach((btn) => {
        btn.classList.remove('tabs__button--is-selected');
      });

      button.classList.add('tabs__button--is-selected');
    });
  });
}

export default initTabs;
