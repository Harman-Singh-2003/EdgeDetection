const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');
const inputImage = document.querySelector('#inputImage');

inputImage.addEventListener('change', (e) => {
    const myFile = inputImage.files[0];
    const image1 = new Image();
    image1.src = URL.createObjectURL(myFile);
    image1.onload = function () {
        console.log(image1.height, image1.width);
        canvas.height = image1.height;
        canvas.width = image1.width;
        ctx.drawImage(image1, 0, 0, canvas.width, canvas.height);

        const scannedImage = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const greyScaleImage = scannedImage;

        for (i = 0; i < greyScaleImage.data.length; i += 4) {
            let avg = (greyScaleImage.data[i] + greyScaleImage.data[i + 1] + greyScaleImage.data[i + 2]) / 3
            greyScaleImage.data[i] = avg;
            greyScaleImage.data[i + 1] = avg;
            greyScaleImage.data[i + 2] = avg;
        }
        ctx.putImageData(greyScaleImage, 0, 0);

        let gaussianBlurKernel =
            [[1, 4, 7, 4, 1],
            [4, 16, 26, 16, 4],
            [7, 26, 41, 26, 7],
            [4, 16, 26, 16, 4],
            [1, 4, 7, 4, 1]];

        let total = 0;

        for (j = 0; j < 5; j++) {
            for (k = 0; k < 5; k++) {
                total += gaussianBlurKernel[j][k];
            }
        }

        let gaussianBlurImage = greyScaleImage;

        for (i = 0; i < greyScaleImage.data.length; i += 4) {
            let tempNumber = 0;
            let xConversion = 0
            let yConversion = 0;
            let xLimit = 0;
            let yLimit = 0;

            //Top row
            if (((i / 4) + 1) <= (image1.width)) {
                yConversion = 2;
            }
            //2nd top row
            else if ((((i / 4) + 1) <= 2 * (image1.width)) && (((i / 4) + 1) > (image1.width))) {
                yConversion = 1;
            }
            //Bottom row
            if (((i / 4) + 1) > (image1.width) * (image1.height - 1)) {
                yLimit = 2;
            }
            //2nd bottom row
            else if (((i / 4) + 1) > (image1.width) * (image1.height - 2)) {
                yLimit = 1;
            }
            //left row
            if (((i / 4) + 1) % image1.width == 1) {
                xConversion = 2;
            }
            //2nd left row
            else if (((i / 4) + 1) % image1.width == 2) {
                xConversion = 1;
            }
            //Right row
            if (((i / 4) + 1) % image1.width == 0) {
                xLimit = 2;
            }
            //2nd Right row
            else if (((i / 4) + 1) % image1.width == image1.width - 1) {
                xLimit = 1;
            }

            //Running through the gaussian blur kernel
            for (j = 0 + yConversion; j < 5 - yLimit; j++) {
                for (k = 0 + xConversion; k < 5 - xLimit; k++) {
                    tempNumber += greyScaleImage.data[i + (k - 2) * 4 + (image1.width * 4) * (j - 2)] * gaussianBlurKernel[j][k];
                }
            }

            gaussianBlurImage.data[i] = tempNumber / total;
            gaussianBlurImage.data[i + 1] = tempNumber / total;
            gaussianBlurImage.data[i + 2] = tempNumber / total;
            gaussianBlurImage.data[i + 3] = 255;
        }

        ctx.putImageData(gaussianBlurImage, 0, 0);

        let sobelImage = gaussianBlurImage;
        let range = 7;

        for (i = 0; i < gaussianBlurImage.data.length; i += 4) {
            let sobelOperator = 0;

            if (!(((i / 4) + 1) <= (image1.width)) && !((((i / 4) + 1) <= 2 * (image1.width)) && (((i / 4) + 1) > (image1.width))) && !(((i / 4) + 1) > (image1.width) * (image1.height - 1)) && !(((i / 4) + 1) > (image1.width) * (image1.height - 2)) && !(((i / 4) + 1) % image1.width == 1) && !(((i / 4) + 1) % image1.width == 2) && !(((i / 4) + 1) % image1.width == 0) && !(((i / 4) + 1) % image1.width == image1.width - 1)) {

                if ((Math.abs(gaussianBlurImage.data[i] - gaussianBlurImage.data[i + 4]) > range) || (Math.abs(gaussianBlurImage.data[i] - gaussianBlurImage.data[i + image1.width * 4]) > range)) {
                    sobelImage.data[i] = 255;
                    sobelImage.data[i + 1] = 255;
                    sobelImage.data[i + 2] = 255;
                }
                else {
                    sobelImage.data[i] = 0;
                    sobelImage.data[i + 1] = 0;
                    sobelImage.data[i + 2] = 0;
                }
            }
            else {
                sobelImage.data[i] = 255;
                sobelImage.data[i + 1] = 0;
                sobelImage.data[i + 2] = 0;
            }
        }

        ctx.putImageData(sobelImage, 0, 0);
    }
});
