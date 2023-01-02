const canvas = document.getElementById('output');
const ctx = canvas.getContext('2d');
canvas.width = 651;
canvas.height = 272;

const image1 = new Image();
//image1.src = 'flower.jpg';
image1.src = 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAEQAosDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD3+iiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAoorn/HGg3nifwXqmjWF79iuruLYkxJA4IJVsc7WAKnrwx4PQgHQUV8wf8ADOPjD/oJaH/3/m/+NUf8M4+MP+glof8A3/m/+NUAfT9FfMH/AAzj4w/6CWh/9/5v/jVH/DOPjD/oJaH/AN/5v/jVAH0/RXzB/wAM4+MP+glof/f+b/41R/wzj4w/6CWh/wDf+b/41QB9P0V8wf8ADOPjD/oJaH/3/m/+NUf8M4+MP+glof8A3/m/+NUAfT9FfMH/AAzj4w/6CWh/9/5v/jVH/DOPjD/oJaH/AN/5v/jVAH0/RXzB/wAM4+MP+glof/f+b/41R/wzj4w/6CWh/wDf+b/41QB9P0V8wf8ADOPjD/oJaH/3/m/+NUf8M4+MP+glof8A3/m/+NUAfT9FfMH/AAzj4w/6CWh/9/5v/jVH/DOPjD/oJaH/AN/5v/jVAH0/RXzB/wAM4+MP+glof/f+b/41R/wzj4w/6CWh/wDf+b/41QB9P0V8wf8ADOPjD/oJaH/3/m/+NUf8M4+MP+glof8A3/m/+NUAfT9FfMH/AAzj4w/6CWh/9/5v/jVH/DOPjD/oJaH/AN/5v/jVAH0/RXzB/wAM4+MP+glof/f+b/41R/wzj4w/6CWh/wDf+b/41QB9P0V8wf8ADOPjD/oJaH/3/m/+NUf8M4+MP+glof8A3/m/+NUAfT9FfMH/AAzj4w/6CWh/9/5v/jVH/DOPjD/oJaH/AN/5v/jVAH0/RXzB/wAM4+MP+glof/f+b/41R/wzj4w/6CWh/wDf+b/41QB9P0V8wf8ADOPjD/oJaH/3/m/+NUf8M4+MP+glof8A3/m/+NUAfT9FfMH/AAzj4w/6CWh/9/5v/jVH/DOPjD/oJaH/AN/5v/jVAH0/RXzB/wAM4+MP+glof/f+b/41R/wzj4w/6CWh/wDf+b/41QB9P0V8wf8ADOPjD/oJaH/3/m/+NUf8M4+MP+glof8A3/m/+NUAfT9FfMH/AAzj4w/6CWh/9/5v/jVH/DOPjD/oJaH/AN/5v/jVAH0/RXzB/wAM4+MP+glof/f+b/41R/wzj4w/6CWh/wDf+b/41QB9P0V8wf8ADOPjD/oJaH/3/m/+NUf8M4+MP+glof8A3/m/+NUAfT9FfMH/AAzj4w/6CWh/9/5v/jVH/DOPjD/oJaH/AN/5v/jVAH0/RXzB/wAM4+MP+glof/f+b/41R/wzj4w/6CWh/wDf+b/41QB9P0V8wf8ADOPjD/oJaH/3/m/+NUf8M4+MP+glof8A3/m/+NUAfT9FfMH/AAzj4w/6CWh/9/5v/jVH/DOPjD/oJaH/AN/5v/jVAH0/RXzB/wAM4+MP+glof/f+b/41R/wzj4w/6CWh/wDf+b/41QB9P0V8wf8ADOPjD/oJaH/3/m/+NUf8M4+MP+glof8A3/m/+NUAfT9FfMH/AAzj4w/6CWh/9/5v/jVH/DOPjD/oJaH/AN/5v/jVAH0/RXzB/wAM4+MP+glof/f+b/41R/wzj4w/6CWh/wDf+b/41QB9P0V8wf8ADOPjD/oJaH/3/m/+NUf8M4+MP+glof8A3/m/+NUAfT9FfMH/AAzj4w/6CWh/9/5v/jVH/DOPjD/oJaH/AN/5v/jVAH0/VPTdW03WbdrjS9QtL6BXKNJazLKobAOCVJGcEHHuK+bP+GcfGH/QS0P/AL/zf/Gq9b+E3w2m+Hul3xvryO41C/dDMIM+VGqbtgUkAk/MSScdQAOMkA9EooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAP/2Q==';
image1.addEventListener('load', () => {
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
        if (i / 4 / (image1.width) < 1) {
            yConversion = 2;
        }
        //2nd top row
        else if (i / 4 / (image1.width) < 2) {
            yConversion = 1;
        }
        //Bottom row
        if (i / 4 / (image1.width) > image1.height - 1) {
            yLimit = 2;
        }
        //2nd bottom row
        else if (i / 4 / (image1.width) > image1.height - 2) {
            yLimit = 1;
        }
        //left row
        if ((i / 4) % image1.width < 1) {
            xConversion = 2;
        }
        //2nd left row
        else if ((i / 4) % image1.width < 2) {
            xConversion = 1;
        }
        //Right row
        if ((i / 4) % image1.width > image1.width - 1) {
            xLimit = 2;
        }
        //2nd Right row
        else if ((i / 4) % image1.width > image1.width - 2) {
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
    }

    //ctx.putImageData(gaussianBlurImage, 0, 0);

    let sobelKernelX =
        [
            [-1, -2, 0, 2, 1],
            [-2, -3, 0, 3, 2],
            [-3, -5, 0, 5, 3],
            [-2, -3, 0, 3, 2],
            [-1, -2, 0, 2, 1]
        ];
    let sobelKernelY =
        [
            [-1, -2, -3, -2, -1],
            [-2, -3, -5, -3, -2],
            [0, 0, 0, 0, 0],
            [2, 3, 5, 3, 2],
            [1, 2, 3, 2, 1]
        ];

    let sobelImage = greyScaleImage;

    for (i = 0; i < greyScaleImage.data.length; i += 4) {
       if(!(i / 4 / (image1.width) < 2) || !(i / 4 / (image1.width) > image1.height - 2) || !((i / 4) % image1.width < 2) || !((i / 4) % image1.width > image1.width - 3)){ 
        let tempNumber = 0;
        let xConversion = 0
        let yConversion = 0;
        let xLimit = 0;
        let yLimit = 0;

        //Top row
        if (i / 4 / (image1.width) < 1) {
            yConversion = 2;
        }
        //2nd top row
        else if (i / 4 / (image1.width) < 2) {
            yConversion = 1;
        }
        //Bottom row
        if (i / 4 / (image1.width) > image1.height - 1) {
            yLimit = 2;
        }
        //2nd bottom row
        else if (i / 4 / (image1.width) > image1.height - 2) {
            yLimit = 1;
        }
        //left row
        if ((i / 4) % image1.width < 1) {
            xConversion = 2;
        }
        //2nd left row
        else if ((i / 4) % image1.width < 2) {
            xConversion = 1;
        }
        //Right row
        if ((i / 4) % image1.width > image1.width - 2) {
            xLimit = 2;
        }
        //2nd Right row
        else if ((i / 4) % image1.width > image1.width - 3) {
            xLimit = 1;
        }

        //Running through the gaussian blur kernel
        for (j = 0 + yConversion; j < 5 - yLimit; j++) {
            for (k = 0 + xConversion; k < 5 - xLimit; k++) {
                tempNumber += sobelImage.data[i + (k - 2) * 4 + (image1.width * 4) * (j - 2)] * sobelKernelY[j][k];
            }
        }

        sobelImage.data[i] = tempNumber/24;
        sobelImage.data[i + 1] = tempNumber/24;
        sobelImage.data[i + 2] = tempNumber/24;
        //console.log(tempNumber);
}
    }
    ctx.putImageData(sobelImage, 0, 0);
});