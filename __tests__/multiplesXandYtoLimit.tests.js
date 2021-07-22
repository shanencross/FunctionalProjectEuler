import multiplesXandYtoLimit from './../src/js/multiplesXandYtoLimit'

describe ('multiplesXandYtoLimit',() => {
  test('the function should sum multiples of 3 and 5 below 10', () => {
    expect(multiplesXandYtoLimit(10)(5)(3)).toEqual(23)
  });
  test('the function should return a function when given an argument for limit', () => {
    const multiplesXandYto253 = multiplesXandYtoLimit(253)
    expect(multiplesXandYto253(3)(5)).toEqual(15045)
  })
  test('the function should also work if the limit is a multiple of 3', () => {
    expect(multiplesXandYtoLimit(12)(5)(3)).toEqual(33)
  })
});