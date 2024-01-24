// Revan & Viza | Wedding



// Welcome, Login, Loading, & End
let welcomeNext = document.getElementById("welcomeNext");
let welcome = document.querySelector(".welcome");
let login = document.querySelector(".login");
let loginHidden = document.querySelector(".login-hidden");

welcomeNext.addEventListener("click", function() {
    welcome.classList.remove("welcome");
    welcome.classList.add("welcome-finish");
    loginHidden.classList.remove("login-hidden");
});

document.getElementById("passwordForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let masukkanPassword = document.getElementById("password").value;
    let password = "revvizaa";
    let notif = document.querySelector(".notif");
    let tutupNotifikasi = document.getElementById("tutup-notifikasi");
    let login = document.querySelector(".login");
    let desainerNext = document.getElementById("desainerNext");
    let desainer = document.querySelector(".desainer");
    let desainerHidden = document.querySelector(".desainer-hidden");
    let loading01 = document.querySelector(".loading-01");
    let loading02 = document.querySelector(".loading-02");
    let loading03 = document.querySelector(".loading-03");
    let loading04 = document.querySelector(".loading-04");
    let end = document.querySelector(".end");
    let endImg = document.querySelector(".end-img");
    let loading01hidden = document.querySelector(".loading-01-hidden");
    let loading02hidden = document.querySelector(".loading-02-hidden");
    let loading03hidden = document.querySelector(".loading-03-hidden");
    let loading04hidden = document.querySelector(".loading-04-hidden");
    let endHidden = document.querySelector(".end-hidden");
    let endImgHidden = document.querySelector(".end-img-hidden");
    let next01 = document.querySelector(".next-01");
    let next02 = document.querySelector(".next-02");
    let next03 = document.querySelector(".next-03");
    let next04 = document.querySelector(".next-04");
    let back01 = document.querySelector(".back-01");
    let back02 = document.querySelector(".back-02");
    let back03 = document.querySelector(".back-03");
    let containerSection = document.querySelector(".container-section");
    let imgTopLeft = document.getElementById("top-left");
    let imgTopRight = document.getElementById("top-right");
    let imgBottomLeft = document.getElementById("bottom-left");
    let imgBottomRight = document.getElementById("bottom-right");
    let fixed = document.querySelector(".fixed");

    if (masukkanPassword === password) {
        login.classList.remove("login");
        login.classList.add("login-finish");
        desainerHidden.classList.remove("desainer-hidden");
        desainer.classList.add("transition-next");

        desainerNext.addEventListener("click", function() {
            desainer.classList.remove("desainer");
            desainer.classList.add("desainer-finish");
            loading01hidden.classList.remove("loading-01-hidden");
            loading01.classList.add("transition-next");
        });

        next01.addEventListener("click", function() {
            loading01.classList.remove("loading-01");
            loading01.classList.add("loading-finish");
            loading02hidden.classList.remove("loading-02-hidden");
            loading02.classList.add("transition-next");
        });

        next02.addEventListener("click", function() {
            loading02.classList.remove("loading-02");
            loading02.classList.add("loading-finish");
            loading03hidden.classList.remove("loading-03-hidden");
            loading03.classList.add("transition-next");
        });

        back01.addEventListener("click", function() {
            loading01.classList.add("loading-01");
            loading01.classList.remove("loading-finish");
            loading02hidden.classList.add("loading-02-hidden");
            loading02.classList.remove("transition-next");
        });

        next03.addEventListener("click", function() {
            loading03.classList.remove("loading-03");
            loading03.classList.add("loading-finish");
            loading04hidden.classList.remove("loading-04-hidden");
            loading04.classList.add("transition-next");
        });

        back02.addEventListener("click", function() {
            loading02.classList.add("loading-02");
            loading02.classList.remove("loading-finish");
            loading03hidden.classList.add("loading-03-hidden");
            loading03.classList.remove("transition-next");
        });

        next04.addEventListener("click", function() {
            loading04.classList.remove("loading-04");
            loading04.classList.add("loading-finish");
            endHidden.classList.remove("end-hidden");
            end.classList.add("end-animation");

            setTimeout(function() {
                end.classList.remove("end");
                end.classList.add("end-finish");
                endImgHidden.classList.remove("end-img-hidden");
                endImg.classList.add("end-img-animation");

                setTimeout(function() {
                    endImg.classList.remove("end-img");
                    endImg.classList.add("end-img-finish");
                    containerSection.classList.remove("container-section");
                    containerSection.classList.add(".container-section-finish");
                    imgTopLeft.classList.add("img-finish");
                    imgTopRight.classList.add("img-finish");
                    imgBottomLeft.classList.add("img-finish");
                    imgBottomRight.classList.add("img-finish");
                    fixed.classList.remove("fixed");
                }, 2300);
            }, 2500);
        });

        back03.addEventListener("click", function() {
            loading03.classList.add("loading-03");
            loading03.classList.remove("loading-finish");
            loading04hidden.classList.add("loading-04-hidden");
            loading04.classList.remove("transition-next");
        });
    }

    else {
        document.getElementById("password").value = "";
        notif.classList.add("notif-active");

        tutupNotifikasi.addEventListener("click", function() {
            notif.classList.remove("notif-active");
        });
    }
});



// Event / Hitung mundur waktu acara
let tanggalAcara = new Date("2028-09-21 16:00:00").getTime();

let hitungMundur = setInterval(function() {
    let tanggalSekarang = new Date().getTime();
    let sisaWaktu = tanggalAcara - tanggalSekarang;
    let sisaJam = Math.floor(sisaWaktu / (1000 * 60 * 60));
    let sisaMenit = Math.floor(sisaWaktu / (1000 * 60));
    let sisaDetik = Math.floor(sisaWaktu / 1000);

    let hari = Math.floor(sisaWaktu / (1000 * 60 * 60 * 24));
    let jam = Math.floor((sisaWaktu % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let menit = Math.floor((sisaWaktu % (1000 * 60 * 60)) / (1000 * 60));
    let detik = Math.floor((sisaWaktu % (1000 * 60)) / 1000);

    if (sisaDetik > 0 && sisaDetik <= 6 * 60 * 60) {
        clearInterval(hitungMundur);
        document.getElementById("hitungMundur").innerHTML = "Acara Telah Dimulai!";
    }

    else if (sisaDetik <= 0) {
        clearInterval(hitungMundur);
        document.getElementById("hitungMundur").innerHTML = "Acara Telah Selesai!";
    }

    else {
        document.getElementById("hitungMundur").innerHTML = hari + "h - " + jam + "j - " + menit + "m - " + detik + "d";
    }
}, 1000);



// Menampilkan Menu
document.getElementById("menu").addEventListener("click", function() {
    let menu = document.querySelector(".menu");
    menu.classList.add("menu-hidden");
    let opacity = document.querySelector(".opacity");
    opacity.classList.add("opacity-active");
    let navbar = document.querySelector(".navbar");
    navbar.classList.add("navbar-active");
});



// Menyembunyikan Menu
document.getElementById("close").addEventListener("click", function() {
    let menu = document.querySelector(".menu");
    menu.classList.remove("menu-hidden");
    let opacity = document.querySelector(".opacity");
    opacity.classList.remove("opacity-active");
    let navbar = document.querySelector(".navbar");
    navbar.classList.remove("navbar-active");
});

const navbar = document.querySelector(".navbar");
const buttonMenu = document.getElementById("menu");
const buttonClose = document.getElementById("close");

document.addEventListener("click", function(event) {
    if (!navbar.contains(event.target) && !buttonMenu.contains(event.target) && !buttonClose.contains(event.target)) {
        let menu = document.querySelector(".menu");
        menu.classList.remove("menu-hidden");
        let opacity = document.querySelector(".opacity");
        opacity.classList.remove("opacity-active");
        let navbar = document.querySelector(".navbar");
        navbar.classList.remove("navbar-active");
    }
});