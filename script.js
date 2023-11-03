function validation() {
    let phone = document.getElementById("phone").value;
    let numLength = phone.length;
    let firstNum = phone.substr(0, 2);
    let lastNum = phone.substr(numLength - 9, 9);
    let num;

    if (numLength < 9) {
        alert("Invalid number..!");
        document.getElementById("msg").innerHTML = "Invalid number";
    } else if (numLength == 9) {
        num = "94" + phone;
        document.getElementById("msg").innerHTML = num;
    } else if (numLength == 10) {
        num = "94" + lastNum;
        document.getElementById("msg").innerHTML = num;
    } else if (numLength > 11) {
        alert("Invalid..!");
        document.getElementById("msg").innerHTML = "Invalid..!";
    } else if (numLength == 11 && firstNum != "94") {
        alert("Invalid..!");
        document.getElementById("msg").innerHTML = "Invalid..!";
    } else if (numLength == 11 && firstNum == "94") {
        num = phone;
        document.getElementById("msg").innerHTML = num;
    } else {
        alert("Invalid..!");
        document.getElementById("msg").innerHTML = "Invalid..!";
    }
}
