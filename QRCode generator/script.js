let imgBox = document.getElementById("imgBox");
let qrImage = document.getElementById("qrImage");
let toBeQR = document.getElementById("toBeQR");
function QRGen(){
    qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + toBeQR.value;
}