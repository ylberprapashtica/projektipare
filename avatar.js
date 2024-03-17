//change image to your own desire
let image = document.getElementById("image");
let attachImage = document.getElementById("attach_image");

attachImage.onchange = function () {
    image.src = URL.createObjectURL(attachImage.files[0]);
}


