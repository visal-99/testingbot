//const example="00020101021229300012D156000000000510A93FO3230Q31280012D15600000001030812345678520441115802CN5914BEST TRANSPORT6007BEIJING64200002ZH0104最佳运输0202北京540523.7253031565502016233030412340603***0708A60086670902ME91320016A0112233449988770708123456786304A13A";

//const result=emvqrcode.decode(example);

//console.log(result);
const emvqrcode =require('emvqr');

function onOpenScan(){
    tele.showScanQrPopup("text",function(qrcode){
        alert(qrcode);
        const example=qrcode;
        const result=emvqrcode.decode(example);
        console.log(result);
});
}

