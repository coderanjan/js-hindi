const accountId = 144553
let accountEmail = "anjan90@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;
// accountId = 2

/*
  prefer not to use var
  because of issue of block scope and functional scope
*/


accountEmail = "hc@hc.com"
accountPassword = "21211"
accountCity = "bengalaru"

console.log(accountId);

console.table([accountId , accountEmail,accountPassword,accountCity, accountState])