const foo = require('./foo');
const bar = require('./bar');

// mock
jest.mock('./bar.js', ()=> {
  // function -> 属性
  return jest.fn();
})

test('foo', ()=> {
  foo();

  expect(bar).toHaveBeenCalled();
})