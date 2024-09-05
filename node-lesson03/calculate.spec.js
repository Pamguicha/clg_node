
const mathOperations = require('./calculate');


describe("Unit test validating addition of 2 numbers", () => {
  it('Should throw an addition', () => {
    expect(mathOperations.sum(8,5)).toBe(13);
  });
  it('Should return false', () => {
    expect(mathOperations.sum(2,'5') == 'number').toBe(false);
  });

  it('Should return a subtraction', () => {
    expect(mathOperations.subtract(4,2)).toBe(2);
  });
  
if('Should return a multiplication', () => {
  expect(mathOperations.multiply(12,4)).toBe(48); 
});

});
