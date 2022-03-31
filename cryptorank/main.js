const fs = require('fs')

let rawdata = fs.readFileSync('./coins.json');
let coins = JSON.parse(rawdata)

let arr = []
for (const coin of coins) {
  let title = coin['key']
  let symbol = coin['symbol']
  let rank = coin['rank']
  let price = coin.price["USD"].toFixed(6)

  let histPrices = coin.histPrices

  let week = 0.0
  let month = 0.0
  let _3month = 0.0
  let _6month = 0.0
  let ytd = 0.0
  let year = 0.0

  if (histPrices.hasOwnProperty('7D')) {
    week = (((price / histPrices["7D"]["USD"]) - 1) * 100).toFixed(4)
  }

  if (histPrices.hasOwnProperty('30D')) {
    month = (((price / histPrices["30D"]["USD"]) - 1) * 100).toFixed(4)
  }

  if (histPrices.hasOwnProperty('3M')) {
    _3month = (((price / histPrices["3M"]["USD"]) - 1) * 100).toFixed(4)
  }

  if (histPrices.hasOwnProperty('6M')) {
    _6month = (((price / histPrices["6M"]["USD"]) - 1) * 100).toFixed(4)

  }

  if (histPrices.hasOwnProperty('YTD')) {
    ytd = (((price / histPrices["YTD"]["USD"]) - 1) * 100).toFixed(4)
  }

  if (histPrices.hasOwnProperty('1Y')) {
    year = (((price / histPrices["1Y"]["USD"]) - 1) * 100).toFixed(4)
  }

  arr.push({
    rank,
    title,
    symbol,
    price,
    week,
    month,
    _3month,
    _6month,
    ytd,
    year
  })
}

console.log(JSON.stringify(arr))
