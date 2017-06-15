const Canvas = require('canvas')
const Image = Canvas.Image
class ColoredIconCreator {
    static create(imgSrc,outputFile,color) {
        const canvas = new Canvas()
        const image = new Image()
        image.src = imgSrc
        const w = image.width, h = image.height
        canvas.width = w
        canvas.height = h
        const context = canvas.getContext('2d')
        context.drawImage(image,0,0)
        const imgData = context.getImageData(0,0,w,h)
        const data = imgData.data
        const points = []
        for(var i=0;i<data.length;i+=4) {
            const j = i/4,x = j%w ,y = Math.floor(j/w)
            if(data[i+3] != 0) {
                points.push({x,y})
            }
        }
        points.forEach((point)=>{
            context.fillStyle = color
            context.beginPath()
            context.arc(this.x,this.y,0.5,0,2*Math.PI)
            context.fill()
        })
    }
}
module.exports = ColoredIconCreator
