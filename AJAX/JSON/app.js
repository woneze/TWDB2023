const data = `{"ticker":
{"base" : "BTC", 
"target" : "USD", 
"price":"11288.49813464", 
"volume":"91769.69699773", 
"change":"-46.29462447"}, 

"timestamp":1596562621, 
"success":true,
"error":""}`;

const parsedData = JSON.parse(data);
console.log(parsedData.ticker.price);

// JSON.stringify 는 parse의 반대
