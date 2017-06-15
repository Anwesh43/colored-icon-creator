## colored-icon-creator

### nodejs api to create colored icons from the original icon

### Usage

#### Creating a colored icon by calling create method passing the filename of the icon, the ouput file name and color to be applied
```
    ColoredIconCreator.create(fileName,outputFile,color)
```

### Demo

#### input image

<img src="https://github.com/Anwesh43/colored-icon-creator/blob/master/test/trophy.png" >


#### output image to apply red color

<img src="https://github.com/Anwesh43/colored-icon-creator/blob/master/test/f.png">


### Note

#### Icon image must be a png which must have a transparent background

#### use path.join(__dirname,fileName) as the fileName in the create function. You have to use the complete path of the image
 
