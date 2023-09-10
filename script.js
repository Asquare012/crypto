const url = "https://api.coinranking.com/v2/coins";
const options = {
  headers: {
    "Content-Type": "application/json",
    "x-access-token":
      "coinranking235e5ed2a4028cd1219aca1af6601a25d1b11671b7ad451e",
  },
};

fetch(url, options)
  .then((response) => response.json())
  .then((result) => {
    const cover = document.querySelector(".coins");
    const coinList = result.data.coins;
    console.log(coinList);
    cover.innerHTML = coinList.map((coin) => {
      return ` <li>
              <div class="first">
                <img src=${coin.iconUrl} alt="btc" height="40px" />
                <div>${coin.name}<br /><span class="symbol">${
        coin.symbol
      }</span></div>
              </div>
              <div class="second">$${Math.round(coin.price * 100) / 100}</div>
            </li>`;
    });
  })
  .catch((err) => console.log(err));
