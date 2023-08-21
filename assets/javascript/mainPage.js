let mainBAckGroundImg = document.querySelectorAll(".mainPage .mainPageImgs .container .img-cont img")

if (width < 601) {
    console.log('done')
    mainBAckGroundImg.forEach(element => {
        element.src = "assets/images/mainPage-phone.webp"
    });
}