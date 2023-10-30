function initTabs() {
  const buttons = document.querySelectorAll('.subscription__tabs-controls button');
  const prices = document.querySelectorAll('.subscription__price-wrapper > span:first-child');
  const fadedPrices = document.querySelectorAll('.subscription__price-wrapper > span:nth-child(2)');

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
        btn.classList.remove('subscription__button--is-selected');
      });

      button.classList.add('subscription__button--is-selected');
    });
  });
}

export default initTabs;
