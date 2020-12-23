const os = require('os')

//Платформа
console.log(os.platform())

//Архитектура
console.log(os.arch())

//Информация о ЦП
console.log(os.cpus())

//Свободная память
console.log(os.freemem())

//Всего оперативной памяти
console.log(os.totalmem())

//Корневая директория
console.log(os.homedir())

//Сколько система работает
console.log(os.uptime())