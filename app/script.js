
function generateToRegenerate() {

    document.getElementById("button").innerHTML = "Regenerate Pass";
    document.getElementById("button").style.backgroundColor = 'transparent';
    document.getElementById("button").style.color = '#8F3985';
    var busPassNumber = document.getElementById("passNumber");
    busPassNumber.textContent = "Your Bus Pass number is: ";
    const randomNumbers = "Your Bus Pass Number is: BTP" + Math.floor(1000000 + Math.random() * 9000000);
    document.getElementById("passNumber").innerHTML = randomNumbers;
    document.getElementById("activate").innerHTML = "Activate Pass";
    document.getElementById("ticketNumber").innerHTML = randomNumbers;
    const currentDate = new Date();
    document.getElementById("currentTime").innerHTML = currentDate;


    return busPass;
}