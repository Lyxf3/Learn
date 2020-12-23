const fs = require('fs'),
    path = require('path');
//File System
// fs.mkdir(path.join(__dirname, 'notes'), err =>  {
//     if(err) throw new Error(err)
//
//     console.log("папка была создана")
// })

// fs.writeFile(path.join(__dirname, 'notes', 'mynotes.txt'),
//     'Hello world',
//     (err) => {
//     if(err) throw err
//     console.log("Файл был создан")
//
//     fs.appendFile(
//         path.join(__dirname, 'notes', 'mynotes.txt'),
//         ' Form append file',
//         (err) => {
//     if(err) throw err
//     console.log("Файл был изменен")
//             }
//         )
//     }
// )
//
// fs.readFile(
//     path.join(__dirname, 'notes', 'mynotes.txt'),
//     (err, data) => {
//         if(err) throw err
//         console.log(data)
//     }
// )

// fs.rename(
//     path.join(__dirname, 'notes', 'mynotes.txt'),
//     path.join(__dirname, 'notes', 'notes.txt'),
//     (err) => {
//         if(err) throw err
//
//         console.log("Файл был переименован")
//     }
// )