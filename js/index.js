//login button event handelar
var loginBtn = document.getElementById("loginBtn")
loginBtn.addEventListener("click", () => {
    const loginArea = document.querySelector(".login-area")
    loginArea.style.display = "none";
    const transationArea = document.querySelector(".transaction-area")
    transationArea.style.display = "block"
})

//Deposite button event handelar
var addDeposite = document.getElementById("addDeposite")
addDeposite.addEventListener("click", function(event){

    const depositeNumber = getInputNUmber("depositeAmount")
    updateSpanText("currentDeposite", depositeNumber);
    updateSpanText("currentBalance", depositeNumber);

    document.getElementById("depositeAmount").value = ""
})

//Withdraw button event Handelar
var addWithdraw = document.getElementById("addWithdraw")
addWithdraw.addEventListener("click", function(event){

    const withdrawNumber = getInputNUmber("withdrawAmount")
    updateSpanText("currentWithdraw", withdrawNumber)
    updateSpanText("currentBalance", -1 * withdrawNumber)

    document.getElementById("withdrawAmount").value = ""
})

function updateSpanText(id, AmountNumber){
    const current = document.getElementById(id).innerText
    const currentAmount = parseFloat(current)
    const total = currentAmount + AmountNumber
    document.getElementById(id).innerText = total
}
function getInputNUmber(id) {
    const Amount = document.getElementById(id).value
    const AmountNumber = parseFloat(Amount)
    return AmountNumber;
}