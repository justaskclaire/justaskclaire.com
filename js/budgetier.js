function calculate() {

    // Get values from inputs
    var paycheck = document.getElementById('paycheck').value;
    var freq = getFrequencyValue();
    var bills = document.getElementById('bills').value;
    var savings = document.getElementById('savings').value.replace('%', '');

    if (!paycheck) {
        alert("Please enter your paycheck amount.");
        return;
    }
    else if (!freq) {
        alert("Please select a paycheck frequency.");
        return;
    }
    else if (!bills) {
        alert("Please enter your monthy bills amount.");
        return;
    }
    else if (!savings) {
        alert("Please enter what percentage of your income you would like to put in savings.")
        return;
    }
    
    console.log("Paycheck: " + paycheck);
    console.log("Frequency: " + freq);
    console.log("Bills: " + bills);
    console.log("Savings: " + savings);
    
    // Calculate amount to put towards bills per paycheck
    var billAmtPerPaycheck = bills / freq;
    
    // Calculate amount to put towards savings
    var savingsAmtPerPaycheck = paycheck * savings / 100;
    
    // Calculate remaining amount per paycheck for spending
    var spendingAmtPerPaycheck = paycheck - billAmtPerPaycheck - savingsAmtPerPaycheck;
    
    document.getElementById('remaining').innerHTML = '$' + spendingAmtPerPaycheck;
}
  
function getFrequencyValue() {
    var freq = document.getElementsByName('freq');
    var freq_value;
    for(var i = 0; i < freq.length; i++){
        if(freq[i].checked){
            freq_value = freq[i].value;
        }
    }
    
    return freq_value;
}