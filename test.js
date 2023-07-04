const { fromDollarToYen, fromYenToPound, fromEuroToDollar } = require('./app.js');

test("One euro should be 1.206 dollars", function(){
    //import the function from app.js
    // use the function like its suppoed to be used
    const dollars = fromEuroToDollar(3.5)

    // if 1 euro are 1.206 dollars, then 3.5 euros should be (3.5 * 1.2)
    const expected = 3.5 * 1.2; 
    
    // this is the comparison for the unit test
     expect(fromEuroToDollar(3.5)).toBe(4.2); //1 euro are 1.2 dolares, then 3.5 euros should be = (3.5 * 1.2)
})

test("One dollar should be 153,48 yen", function(){
   
    const dollars = fromDollarToYen(4)

    const expected = 4 * 153.48; 
   
     expect(fromDollarToYen(4)).toBe(511.6); 
})

test("One Yen should be 0.00625 Pound", function(){
  
  const pound = fromYenToPound(24)

   
    const expected = 24 * 0.00625; 
    
    
     expect(fromYenToPound(24)).toBeCloseTo(19.2); //1 euro are 1.2 dolares, then 3.5 euros should be = (3.5 * 1.2)
})