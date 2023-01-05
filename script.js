//Declaring the canvas that the image is going to be drawn on
const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d', {willReadFrequently:true});

//Declaring DOM elements
const inputImage = document.querySelector('#inputImage');
const sensitivity = document.getElementById("sensitivity");
const outputSens = document.getElementById("outputSens");
const redraw = document.getElementById("redraw");
redraw.style.visibility = 'hidden';

const image1 = new Image();
let range = 5;

//Event listeners
//Calling the edge detection program when the redraw button is pressed
redraw.addEventListener('click', convert);

//Assigning slider value to a variable
sensitivity.addEventListener('change', () => {
    range = 10 - sensitivity.value;
});

//Saving the file that the user has uploaded
inputImage.addEventListener('change', (e) => {
    const myFile = inputImage.files[0];
    //Assigning the source of the image1 from the base64 url given by the file
    image1.src = URL.createObjectURL(myFile);

    //Once the image is loaded by the browser, create the canvas
    image1.onload = function () {
        convert();
        redraw.style.visibility = 'visible';
    }

});

function convert() {
    //Drawing the original image since the way canvas works is by using the pixels that are visibly within the canvas itself since the only the RGB values of the pixels are saved
    let height = image1.height;
    let width = image1.width;
    const aspectRatio = image1.width/image1.height;

    //Optimizing
    //Checking if the image is over a resolution of 2k at a 16:9 aspect ratio. Images any larger will take far too long to run, so this is to optimize the process to give the end-result in a reasonable amount of time
    if(image1.height * image1.width > 3686400){
        height = Math.floor(Math.pow(3686400/aspectRatio, 0.5));
        width = Math.floor(height*aspectRatio);
    }

    canvas.height = height;
    canvas.width = width;

    //Debugging
    console.log(` Original: Height:${image1.height}, Width:${image1.width}, Ratio:${aspectRatio}`)
    console.log(`Height: ${height}, Width:${width}, Ratio:${aspectRatio}`);

    ctx.drawImage(image1, 0, 0, width, height);
    const scannedImage = ctx.getImageData(0, 0, width, height);

    //Turning the image into greyscale
    const greyScaleImage = scannedImage;

    //Going through each pixel and adding the R, G and B values and averaging them to find the correct greyscale RGB equivalent
    for (i = 0; i < greyScaleImage.data.length; i += 4) {
        let avg = (greyScaleImage.data[i] + greyScaleImage.data[i + 1] + greyScaleImage.data[i + 2]) / 3
        greyScaleImage.data[i] = avg;
        greyScaleImage.data[i + 1] = avg;
        greyScaleImage.data[i + 2] = avg;
    }

    //Declaring the 2D matrix of the gaussian blur kernel. The center pixel is the one with the value of '41'. This is how the RGB values are weighted in a gaussian blur
    let gaussianBlurKernel =
        [[1, 4, 7, 4, 1],
        [4, 16, 26, 16, 4],
        [7, 26, 41, 26, 7],
        [4, 16, 26, 16, 4],
        [1, 4, 7, 4, 1]];

    let total = 0;

    //Finding the total weight of the gaussian blur kernal (5x5)
    for (j = 0; j < 5; j++) {
        for (k = 0; k < 5; k++) {
            total += gaussianBlurKernel[j][k];
        }
    }

    let gaussianBlurImage = greyScaleImage;

    //Going through each pixel in the greyscale image
    for (i = 0; i < gaussianBlurImage.data.length; i += 4) {
        let tempNumber = 0;
        let xConversion = 0
        let yConversion = 0;
        let xLimit = 0;
        let yLimit = 0;

        // All of this is logic that detects when the program is evaluating a pixel that is not surrounded by layer of 2 pixels on each side (outer and 2nd-most outer edge of pixels)
        // and assigning values to compensate according. This reduces the accuracy of the blur near the edges
        //Top row
        if (((i / 4) + 1) <= (width)) {
            yConversion = 2;
        }
        //2nd top row
        else if ((((i / 4) + 1) <= 2 * (width)) && (((i / 4) + 1) > (width))) {
            yConversion = 1;
        }
        //Bottom row
        if (((i / 4) + 1) > (width) * (height - 1)) {
            yLimit = 2;
        }
        //2nd bottom row
        else if (((i / 4) + 1) > (width) * (height - 2)) {
            yLimit = 1;
        }
        //left row
        if (((i / 4) + 1) % width == 1) {
            xConversion = 2;
        }
        //2nd left row
        else if (((i / 4) + 1) % width == 2) {
            xConversion = 1;
        }
        //Right row
        if (((i / 4) + 1) % width == 0) {
            xLimit = 2;
        }
        //2nd Right row
        else if (((i / 4) + 1) % width == width - 1) {
            xLimit = 1;
        }

        //Running through the gaussian blur kernel and calcuting RGB values for each pixel
        for (j = 0 + yConversion; j < 5 - yLimit; j++) {
            for (k = 0 + xConversion; k < 5 - xLimit; k++) {
                tempNumber += greyScaleImage.data[i + (k - 2) * 4 + (width * 4) * (j - 2)] * gaussianBlurKernel[j][k];
            }
        }

        gaussianBlurImage.data[i] = tempNumber / total;
        gaussianBlurImage.data[i + 1] = tempNumber / total;
        gaussianBlurImage.data[i + 2] = tempNumber / total;
        gaussianBlurImage.data[i + 3] = 255;
    }

    let finalImage = gaussianBlurImage;

    //Going through the entire blurred image with the edge detecton program
    for (i = 0; i < gaussianBlurImage.data.length; i += 4) {

        //Not allowing the edge detection program to run on outer 2 edges of the image
        if (!(((i / 4) + 1) <= (width)) && !((((i / 4) + 1) <= 2 * (width)) && (((i / 4) + 1) > (width))) && !(((i / 4) + 1) > (width) * (height - 1)) && !(((i / 4) + 1) > (width) * (height - 2)) && !(((i / 4) + 1) % width == 1) && !(((i / 4) + 1) % width == 2) && !(((i / 4) + 1) % width == 0) && !(((i / 4) + 1) % width == width - 1)) {
            //Checking if the RGB value of the pixel to the right or below the current pixel are differing by the value of 'range'. The RGB values the same within a pixel since it's greyscale, so the comparison of only R is needed
            if ((Math.abs(gaussianBlurImage.data[i] - gaussianBlurImage.data[i + 4]) > range) || (Math.abs(gaussianBlurImage.data[i] - gaussianBlurImage.data[i + width * 4]) > range)) {
                //Placing a white pixel where an 'edge' is detected
                finalImage.data[i] = 255;
                finalImage.data[i + 1] = 255;
                finalImage.data[i + 2] = 255;
            }
            else {
                //Placing a black pixel for the background
                finalImage.data[i] = 0;
                finalImage.data[i + 1] = 0;
                finalImage.data[i + 2] = 0;
            }
        }
        else {
            //Placing a black pixel for the outer border of pixels
            finalImage.data[i] = 0;
            finalImage.data[i + 1] = 0;
            finalImage.data[i + 2] = 0;
        }
    }

    //Displaying the final image
    ctx.putImageData(finalImage, 0, 0);
}
