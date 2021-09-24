https://api.cryptorank.io/v0/coins

https://api.cryptorank.io/v0/coins/historical-prices/

https://api.cryptorank.io/v0/coins/historical-prices/?keys=bitcoin

```shell
cat coins.json | jq ".data[] | .price | select(.ETH | not )"

cat coins.json | jq ".data[] | {rank, key, symbol} | select(.rank < 201 ) "

 
cat coins.json | jq ".data[] | {rank, key, symbol, price } | select(.rank < 201  and .rank != null) | del(.price.ETH , .price.BTC )" 

cat coins.json | jq ".data[] | {rank, key, symbol, price, histPrices } | select(.rank < 201 and .rank != null) | del(.price.ETH)"

cat coins.json | jq ".data[] | {rank, key, symbol, price, histPrices } | select(.rank < 201 and .rank != null) | del(.price.ETH , .price.BTC, .histPrices[].BTC , .histPrices[].ETH )" 

cat coins.json | jq ".data[] | {rank, key, symbol, price, histPrices } | select(.rank < 201 and .rank != null) | del(.price.ETH , .price.BTC, .histPrices[].BTC , .histPrices[].ETH )" 

cat coins.json | jq ".data[] | {rank, key, symbol, price, histPrices } | select(.rank < 201 and .rank != null) | del(.price.ETH , .price.BTC, .histPrices[].BTC , .histPrices[].ETH )" 

cat coins.json | jq "[.data[] | {rank, key, symbol, price, histPrices } | select(.rank < 201 and .rank != null) | del(.price.ETH , .price.BTC, .histPrices[].BTC, .histPrices[].ETH ) ]" 
```