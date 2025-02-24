
    var button = document.getElementById("tapMe");
    var showNever = document.getElementById("est");
    

   function convertToKilograms() {
    if (unit === "") {
        alert("Please select a unit.");
        return;
    }
    
    if (value === "") {
        alert("Please enter a weight value.");
        return;
    }
    
    if (selectedOption === "") {
        alert("Please select a storage duration.");
        return;
    }
var unit = document.getElementById("unit").value;
    var value = parseFloat(document.getElementById("weight").value);
    
    var select = document.getElementById("month");
    var selectedOption = select.value;
    
    var months = parseInt(selectedOption.split(" ")[0]);
    var feePerMonth = 8; // Example constant fee, you can change this value
    var totalFee = months * feePerMonth;

    //  
    
    if (isNaN(value)) {
        result = "Please enter a valid number.";
    } else {
        switch (unit) {
            case "ounces":
                result = value * 0.0283495;
                break;
            case "pounds":
                result = value * 0.453592;
                break;
            case "grams":
                result = value * 0.001;
                break;
            case "kilograms":
                result = value;
                break;
            default:
                result = "Invalid unit selected.";
        }
        
      
        
var result;
    var toBuy = Math.round(result * 3800);
    var toStore = Math.round(result * totalFee);
    var toSell = Math.round(toBuy + (toBuy * 0.025));
    var profit = toSell - toBuy;
    var cost = toBuy + toStore;
        result = result.toFixed(2) + " kg"; // formatting the result to 6 decimal places
    }

    document.getElementById("cost").textContent ="$" + cost.toLocaleString();
    
    document.getElementById("buy").textContent = "$" + toBuy.toLocaleString();
    
    document.getElementById("store").textContent = "$" +toStore.toLocaleString();
    
    document.getElementById("sell").textContent = "$" + toSell.toLocaleString();    
    
    document.getElementById("estimated").textContent ="$" + profit.toLocaleString();
    
   // showNever.style.display = "block";
       // button.textContent = "Hide Details";
        
        if (showNever.style.display === "none" || showNever.style.display === "") {
        showNever.style.display = "block";
        button.textContent = "Hide Details";
    } else {
        showNever.style.display = "none";
        button.textContent = "Estimate Value";
    }
}



function hideMe() {

    showNever.style.display = "none";
    button.textContent = "Estimate Value";
}
