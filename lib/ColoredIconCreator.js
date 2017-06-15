const Canvas = require('canvas')
const Image = Canvas.Image
const ImageSaver = require('image-saver-nodejs/lib')
const imageSaver = new ImageSaver()
const q = require('q')
class ColoredIconCreator {
    static create(imgSrc,outputFile,color) {
        const defer = q.defer()
        const canvas = new Canvas()
        const image = new Image()
        image.src = imgSrc
        const w = image.width, h = image.height
        if(w == 0 && h == 0) {
            defer.reject("image didn't load properly")
            return defer.promise
        }
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
            context.arc(point.x,point.y,0.5,0,2*Math.PI)
            context.fill()
        })
        const canvasDataURL = canvas.toDataURL()
        const urlParts = canvasDataURL.split(",")
        if(urlParts.length == 2) {
          const base64String = urlParts[1]
          imageSaver.saveFile(outputFile,base64String).then((data)=>{
              defer.resolve({status:"success"})
          }).catch((err)=>{
              defer.reject(err)
          })
        }
        else {
            defer.reject("image didn't load properly")
        }
        return defer.promise
    }
}
module.exports = ColoredIconCreator
