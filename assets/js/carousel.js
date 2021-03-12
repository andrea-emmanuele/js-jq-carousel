$("main").hide();

$(function () { // short for document.ready
    $(".loading").remove();
    $("main").show();
    main();
});

function main() {
    let images = $("img").toArray();

    createControllers(images);

    let firstPoint = $("span").first();
    let lastPoint = $("span").last();
    let firstImg = $("img").first();
    let lastImg = $("img").last();

    move(firstPoint, lastPoint, firstImg, lastImg);
    moveAt();
}

function createControllers(imgs) {
    $("<span class='circular active'>" ).appendTo(".controls");

    for (let i = 1; i < imgs.length; i++) {
        $("<span class='circular'>" ).appendTo(".controls");
    }
}

function move(firstPoint, lastPoint, firstImg, lastImg) {
    let prev = $(".preview");
    let next = $(".next");
    let actualImg;

    prev.click(function () {
        if (firstImg.hasClass("active")) {
            firstImg.removeClass("active");
            lastImg.addClass("active");
            firstPoint.removeClass("active");
            lastPoint.addClass("active");
        }
        else {
            actualImg = $(".active");
            actualImg.removeClass("active");
            actualImg.prev().addClass("active");
        }
    });

    next.click(function () {
        if (lastImg.hasClass("active")) {
            lastImg.removeClass("active");
            firstImg.addClass("active");
            lastPoint.removeClass("active");
            firstPoint.addClass("active");
        }
        else {
            actualImg = $(".active");
            actualImg.removeClass("active");
            actualImg.next().addClass("active");
        }
    });
}

function moveAt() {
    let point = $("span");
    let selected;
    let actual;

    point.click(function () {
        actual = $(".active");
        selected = point.index(this); // getting index of clicked span
        actual.removeClass("active");
        $("img").eq(selected).addClass("active");
        $(".circular").eq(selected).addClass("active");
    });
}