main();

function main() {
    let images = $("img").toArray();
    let i = 1;

    createControllers(images);
    i = moveLeft(i, images);
    i = moveRight(i, images);
}

function createControllers(imgs) {
    for (let i = 0; i < imgs.length; i++) {
        $("<span class='circular'>" ).appendTo(".controls");
    }
}

function moveLeft(i, imgs) {
    let preview = $(".preview");
    let lastImage = $("img").last();

    preview.click(function () {
        if (i < 1) {
            let actualImage = $(".active");
            let prevImage = actualImage.prev();

            actualImage.css("left", "-110%");
            actualImage.css("display", "none");
            actualImage.removeClass("active");
            prevImage.css("left", "0");
            prevImage.css("display", "block");
            prevImage.addClass("active");
            i--;
        }
        else {
            lastImage.addClass("active");
            i = 4;
            console.log("prova");
        }
        console.log(i);
    });

    return i;
}

function moveRight(i, imgs) {
    let next = $(".next");
    let lastImage = $("img").last();
    let actualImage;
    let nextImage;

    next.click(function () {
        if (i < imgs.length) {
            actualImage = $(".active");
            nextImage = actualImage.next();

            actualImage.css("left", "-110%");
            actualImage.css("display", "none");
            actualImage.removeClass("active");
            nextImage.css("left", "0");
            nextImage.css("display", "block");
            nextImage.addClass("active");
            i++;
        }
        else {
            lastImage.removeClass("active");
            lastImage.css("display", "none");
            lastImage.css("left", "-110%");
            actualImage = $("img").first();
            actualImage.css("left", "0");
            actualImage.css("display", "block");
            actualImage.addClass("active");
            i = 1;
        }
        console.log(i);
    });

    return i;
}