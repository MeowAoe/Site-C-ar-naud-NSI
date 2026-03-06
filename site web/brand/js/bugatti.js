let b7 = document.getElementById("brand7")
let b8 = document.getElementById("brand8")
let b9 = document.getElementById("brand9")

//Chiron
b7.addEventListener(
    "mouseover",
    function () {
        document.getElementById("bg1").style="background-image:url(https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Funcrate.com%2Fp%2F2022%2F08%2Fbugatti-chiron-sport-110-ans-1.jpg&f=1&nofb=1&ipt=191f919d86ae9c106b51ce8d03592b7bb1de62e2ce9d064df0e44df0d68122c6);"
        document.getElementById("txtp").innerHTML="La lengendaire Bugatti Chiron est une hypercar produite par Bugatti de 2016 à 2024, elle a sous le capot un w16 acompagné de ses 4 turbos, elle développe entre 1500 et 1600ch ainsi que 1600Nm ce qui la permet d'atteindre les 420km/h"
    }
)

//Bolide
b8.addEventListener(
    "mouseover",
    function () {
        document.getElementById("bg1").style="background-image:url(https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.carscoops.com%2Fwp-content%2Fuploads%2F2021%2F08%2FBugatti-Monterey.jpg&f=1&nofb=1&ipt=7425562200410843c9a2b071f21f8384e6a16416b9b58d81011dd294b1d2dcd2);"
        document.getElementById("txtp").innerHTML="La bugatti Bolide, un petit bijou de Bugatti à été produite de 2024 à 2025, elle comporte un w16 avec 4 turbo capable de toucher les 500km/h"
    }
)

//Vision GT
b9.addEventListener(
    "mouseover",
    function () {
        document.getElementById("bg1").style="background-image:url(https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.gtplanet.net%2Fwp-content%2Fuploads%2F2017%2F11%2Fbugatti-vision-gt.jpg&f=1&nofb=1&ipt=fc0393b32e9edfcd7739cd12deff4f719f91805c249fb0cee6af60185260f4bf);"
        document.getElementById("txtp").innerHTML="La Vision GT conçu par Bugatti à 1 seul exemplaire en 2015 comporte un w16 8.0L ainsi que ses 4 turbos qui développe 1673ch et 1580Nm capable d'arriver a un peu moins de 450km/h"
    }
)
