const ColoredIconCreator = require('../')
const path = require('path')
ColoredIconCreator.create(path.join(__dirname,'trophy.png'),path.join(__dirname,'f.png'),'red').then((res)=>{
    if(res.status == "success") {
        console.log("image is saved succesfully")
    }
})
