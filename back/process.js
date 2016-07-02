"use strict"

let fs = require('fs')

fs.readFile('./data.txt','utf-8',(err,data)=>{
    data = data.replace('“','')
    data = data.replace(/\d[．.、]/g,'`,`')
    data = data +'`'
    fs.writeFile('./data.txt',data,(err)=>{
        if(!err) console.log('处理完成！')
    })
})