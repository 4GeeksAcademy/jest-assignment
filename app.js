// one euro is:
let oneEuroIs = {
  "JPY": 127.9, // japan yen
  "USD": 1.2, // us dollar
  "GBP": 0.8, // british pound
}
const fromEuroToDollar = function(valueInEuro){
  // convert the given valueInEuro to dollars
  let valueInDollar = valueInEuro * 1.2;
  //return the dollar value
  return valueInDollar;
}

const fromDollarToYen = function(valueInDollar){
  // convert the given valueInEuro to dollars
  let valueInYen = valueInDollar * 127.9;
  //return the dollar value
  return valueInYen;
}

const fromYenToPound = function(valueInYen){
  // convert the given valueInEuro to dollars
  let valueInPound = valueInYen * 0.8;
  //return the dollar value
  return valueInPound;
}
module.exports = {
  fromDollarToYen: fromDollarToYen,
  fromYenToPound: fromYenToPound,
  fromEuroToDollar: fromEuroToDollar
};
