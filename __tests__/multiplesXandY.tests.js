import multiplesXandY from './../src/js/multiplesXandY.js'

describe ('multiplesXandY',() => {
  test('the function should sum multiples of 3 and 5 below 10', () => {
    expect(multiplesXandY(3,5,10)).toEqual(23)
  });
});