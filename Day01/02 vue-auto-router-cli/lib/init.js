// 打印欢迎界面
const {promisify} = require('util')
const figlet = promisify(require('figlet'))
const clear = require('clear')
const chalk = require('chalk')
const log = content => console.log(chalk.blue(content))
const {clone} = require('./download')
module.exports = async name=> {
  clear()
  const data = await figlet('GXM Welcome')
  log(data)
  
  // 模板下载
  log('创建项目'+name)
  await clone('github:su37josephxia/vue-template', name)
}