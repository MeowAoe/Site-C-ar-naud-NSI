let b5 = document.getElementById("brand5")
let b6 = document.getElementById("brand6")



b5.addEventListener(
    "mouseover",
    function () {
        document.getElementById("bg1").style="background-image:url(https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallup.net%2Fwp-content%2Fuploads%2F2019%2F09%2F587428-renault-alpine-a310-coupe-classic-cars.jpg&f=1&nofb=1&ipt=f1f995d9fd0a3ed100e98d8c66ee201bdd90915660d9e679236e096c8fcb8370);"
        document.getElementById("txtp").innerHTML="L'Alpine A310 est une voiture coupé sport emblématique produite par Alpine entre 1971 et 1984, équipé d'un v6 2.7L développant 150ch et 200Nm capable d'atteindre les 225km/h."
    }
)

b6.addEventListener(
    "mouseover",
    function () {
        document.getElementById("bg1").style="background-image:url(https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.hdcarwallpapers.com%2Fdownload%2Falpine_a110_r_4k-1920x1080.jpg&f=1&nofb=1&ipt=6082037afba6e91d88f9e7dbcd4bf0b889901b606558216fd700b4c35e9754fe);"
        document.getElementById("txtp").innerHTML="L'Alpine A110 de 2017 est une voiture coupé sport produite par Alpine entre 2017 jusqu'à encore maintenant, équipé d'un R4 1.8L turbo développant 252ch et 320Nm capable d'atteindre les 250km/h."
    }
)