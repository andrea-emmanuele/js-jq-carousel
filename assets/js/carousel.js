main();

function main() {
    let images = $("img").toArray();

    createControllers(images);

    let firstImg = $("img").first();
    let lastImg = $("img").last();

    move(firstImg, lastImg);
}

function createControllers(imgs) {
    $("<span class='circular active'>" ).appendTo(".controls");

    for (let i = 1; i < imgs.length; i++) {
        $("<span class='circular'>" ).appendTo(".controls");
    }
}

function move(firstImg, lastImg) {
    let prev = $(".preview");
    let next = $(".next");

    prev.click(function () {
        console.log("preview");
        if (firstImg.hasClass("active")) {
            firstImg.removeClass("active");
            lastImg.addClass("active");
        }
        else {
            let actualImg = $(".active");
            actualImg.removeClass("active");
            actualImg.prev().addClass("active");
        }
    });

    next.click(function () {
        console.log("next");
        if (lastImg.hasClass("active")) {
            lastImg.removeClass("active");
            firstImg.addClass("active");
        }
        else {
            let actualImg = $(".active");
            actualImg.removeClass("active");
            actualImg.next().addClass("active");
        }
    });
}