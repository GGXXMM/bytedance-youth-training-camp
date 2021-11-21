const add = require('./add.js');

// input & output
// output输出可能的类型：
// 1. return value
// 2. call other function
// 3. change state
// 4. throw error

// 测试 -> oop 思想、SOLID 单一职责
test('should 1+1 = 2', ()=> {
  // 准备测试数据 -> given
  const a = 1;
  const b = 1;
  // 触发测试动作 -> when
  const r = add(a,b)
  // 验证 -> then
  expect(r).toBe(2);
})