const tab = document.querySelectorAll(".tab li a");
const contents = document.querySelectorAll(".contents li");

for (let i = 0; i < tab.length; i++) {
    tab[i].addEventListener("click", function (e) {
        e.preventDefault();

        for (let j = 0; j < tab.length; j++) {
            tab[j].classList.remove("active");
        }

        for (let j = 0; j < contents.length; j++) {
            contents[j].classList.remove("active");
        }

        this.classList.add("active");
        contents[i].classList.add("active");
    });
}

const ImgList = document.querySelectorAll(".img-wrap img");
const ChangeImg = document.querySelectorAll(".mini-img-wrap img");


for (let i = 0; i < ChangeImg.length; i++) {
    ChangeImg[i].addEventListener("click", function () {

        for (let j = 0; j < ImgList.length; j++) {
            ImgList[j].classList.remove("active");
        }

        ImgList[i].classList.add("active");

        for (let j = 0; j < ChangeImg.length; j++) {
            ChangeImg[j].classList.remove("active");
        }

        ChangeImg[i].classList.add("active");
    });
}

jQuery(window).bind('scroll', function () {
    scrolled = jQuery(window).scrollTop();
    weight1 = 0.1;
    jQuery('.parallax1').css('top', 100 - scrolled * weight1 + 'px');
});
