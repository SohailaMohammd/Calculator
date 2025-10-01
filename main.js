let input = document.getElementById("input")


let Firstnumber = "";
let secondnumber = "";
let opte = "";
let result = "";

function display(btn) {


    if (input.value === "0" || input.value === opte || result != "") {
        input.value = ""
        result = ""
    }
    let val = btn.getAttribute("data-value")
    if (val === "." && input.value.includes(".")) {
        return;
    }
    input.value += btn.getAttribute("data-value")

    if (opte) {
        input.value;
    }
    if (opte === "") {
        Firstnumber = input.value
        console.log(`first : ${Firstnumber}`);

    }
    else {
        secondnumber = input.value
        console.log(`second : ${secondnumber}`);
    }

}

function operation(opt) {
    input.value = ""
    input.value += opt.getAttribute("data-value")
    opte = input.value
    console.log(opte);
}


function resultNum() {
    if (secondnumber === "" || Firstnumber === "") {
        return;
    }
    if (opte === "+") {
        result = +Firstnumber + +secondnumber;
        input.value = new Intl.NumberFormat().format(result)
        Firstnumber = result
        secondnumber = ""
        opte = ""

    } else if (opte === "%") {
        result = +Firstnumber % +secondnumber;
        input.value = new Intl.NumberFormat().format(result)
        Firstnumber = result
        secondnumber = ""
        opte = ""
    }
    else if (opte === "*") {
        result = +Firstnumber * +secondnumber;
        input.value = new Intl.NumberFormat().format(result)
        Firstnumber = result
        secondnumber = ""
        opte = ""
    }
    else if (opte === "-") {
        result = +Firstnumber - +secondnumber;
        input.value = new Intl.NumberFormat().format(result)
        Firstnumber = result
        secondnumber = ""
        opte = ""
    }
    else if (opte === "/") {
        result = +Firstnumber / +secondnumber;
        input.value = new Intl.NumberFormat().format(result)
        Firstnumber = result
        secondnumber = ""
        opte = ""
    }
    else input.value = 0

}
function Delete() {
    input.value = "0"
    Firstnumber = ""
    secondnumber = ""
    opte = ""
}

function delNum() {
    input.value = input.value.slice(0, -1)
    if (opte === "") {
        Firstnumber = input.value
        console.log(`first : ${Firstnumber}`);
    }
    else if (input.value === opte) {
        opte = ""
    }
    else {
        secondnumber = input.value
        console.log(`second : ${secondnumber}`);
    }
}