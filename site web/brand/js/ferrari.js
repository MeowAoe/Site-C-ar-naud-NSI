let b1 = document.getElementById("brand1")
let b2 = document.getElementById("brand2")
let b3 = document.getElementById("brand3")
let b4 = document.getElementById("brand4")




//F80
b1.addEventListener(
    "mouseover",
    function () {
        document.getElementById("bg1").style="background-image:url(https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcimg1.ibsrv.net%2Fibimg%2Fhgm%2F1920x1080-1%2F100%2F945%2Fferrari-80_100945697.jpg&f=1&nofb=1&ipt=a7c3f9f7621c269e10e587cbf9645677d856f1cefef7f0b9678ebe5bed1f87e2);"
        document.getElementById("txtp").innerHTML="La F80 de Ferrai est une Hypercar est actuellement produite par Ferrari depuis 2025 jusqu'en 2027, elle est équipé d'un v6 3.0L ainsi que de 3 moteurs électrique développant 1215ch (tous moteurs confondu) et 850Nm qui lui permet donc d'atteindre les 350km/h."
    }
)

//LaFerrari
b2.addEventListener(
    "mouseover",
    function () {
        document.getElementById("bg1").style="background-image:url(https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.rmsothebys.com%2Fd%2F0%2Fd%2F3%2Fc%2F2%2Fd0d3c20392938587ff8655a5d1c1b3d9ca18ef24.webp&f=1&nofb=1&ipt=98adeb40aca15d483ada8827ccda3960af0ef60a7a86b11cba64f362db7f3402);"
        document.getElementById("txtp").innerHTML="La LaFerrari est une Hypercar qui a été produite de 2013 jusqu'en 2016, elle est équipé d'un v12 6.3L ainsi que d'un moteur électrique développant 963ch et 900Nm  qui est capable d'atteindre les >370km/h."
    }
)

//F40
b3.addEventListener(
    "mouseover",
    function () {
        document.getElementById("bg1").style="background-image:url(https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fs1.cdn.autoevolution.com%2Fimages%2Fgallery%2FFERRARI-F40-3178_25.jpg&f=1&nofb=1&ipt=fce796b104da0a6f2d04d03f54232f4b25254407fd3725a5bf259b52df5b3185);"
        document.getElementById("txtp").innerHTML="La F40 est une Supercar qui a été produite par Ferrari entre 1987 à 1992, elle est équipé d'un v8 2.9L biturbo développant 478ch et 577Nm qui est capable d'atteindre les 324km/h."
    }
)

//296 GT3
b4.addEventListener(
    "mouseover",
    function () {
        document.getElementById("bg1").style="background-image:url(https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fdoubleapex.co.za%2Fwp-content%2Fuploads%2F2022%2F07%2FFerrari-296-GT3-2.jpg&f=1&nofb=1&ipt=ad110d1369f5d8a596066e36e50e09e98040a6ed22f26c9c9d9cfcd45254e5a6);"
        document.getElementById("txtp").innerHTML="La 296 GT3 est une voiture de circuit GT produite uniquement en 2023, elle porte un v6 biturbo développant un total de 600ch."
    }
)
