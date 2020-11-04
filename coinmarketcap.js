// https://web-api.coinmarketcap.com/v1.1/cryptocurrency/quotes/historical?convert=USD,BTC&format=chart_crypto_details&id=1&interval=1d

var coinmarketcapData = {
  "status": {
    "timestamp": "2020-11-04T03:57:44.810Z",
    "error_code": 0,
    "error_message": null,
    "elapsed": 10,
    "credit_count": 0,
    "notice": null
  },
  "data": {
    "2020-10-26T03:54:43.000Z": {
      "BTC": [1],
      "USD": [13101.80073265, 24475756342.245667, 242735987826.07364]
    },
    "2020-10-27T03:54:42.000Z": {
      "BTC": [1],
      "USD": [13092.91200372, 29886258696.979904, 242579909117.34778]
    },
    "2020-10-28T03:54:44.000Z": {
      "BTC": [1],
      "USD": [13782.3175608, 36314589022.8262, 255361095195.79764]
    },
    "2020-10-29T03:54:38.000Z": {
      "BTC": [1],
      "USD": [13261.50650543, 35264251487.84453, 245720371982.59262]
    },
    "2020-10-30T03:54:40.000Z": {
      "BTC": [1],
      "USD": [13441.18849893, 61523635378.9851, 249058072172.9469]
    },
    "2020-10-31T03:54:39.000Z": {
      "BTC": [1],
      "USD": [13473.95081958, 30379158946.869175, 249674491466.79486]
    },
    "2020-11-01T03:54:41.000Z": {
      "BTC": [1],
      "USD": [13672.59981113, 30177274072.467125, 253365402096.33783]
    },
    "2020-11-02T03:54:41.000Z": {
      "BTC": [1],
      "USD": [13679.79604498, 25541254709.019196, 253509438613.306]
    },
    "2020-11-03T03:54:43.000Z": {
      "BTC": [1],
      "USD": [13394.33424147, 31039640519.692123, 248227311478.4808]
    },
    "2020-11-04T03:54:44.000Z": {
      "BTC": [1],
      "USD": [13867.15265658, 31391600667.399918, 257001839984.23315]
    }
  }
}

var data = coinmarketcapData['data']
var datakeys = Object.keys(data);

var arr = []

for (let [inx, ele] of datakeys.entries()) {
  var d = data[ele]

  var price = d['USD'][0].toFixed(2)
  var time = datakeys[inx].slice(0, 19)
  arr.push({
    value: [time, price]
  })
}

console.log(JSON.stringify(arr));
