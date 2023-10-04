
document.addEventListener("DOMContentLoaded", function(){
    let add1 = document.getElementById("plus-button1");
    let minus1 = document.getElementById("minus-button1");
    let count1 = document.getElementById("count1");

    add1.addEventListener("click", function(){
        var count_val1 = parseInt(count1.value);
        count_val1++;
        count1.value = count_val1;
    });

    minus1.addEventListener("click", function(){
        var count_val1 = parseInt(count1.value);
        if(count_val1>0){
            count_val1--;
        count1.value = count_val1;
        }       
    });

    let add2 = document.getElementById("plus-button2");
    let minus2 = document.getElementById("minus-button2");
    let count2 = document.getElementById("count2");

    add2.addEventListener("click", function(){
        var count_val2 = parseInt(count2.value);
        count_val2++;
        count2.value = count_val2;
    });

    minus2.addEventListener("click", function(){
        var count_val2 = parseInt(count2.value);
        if(count_val2>0){
            count_val2--;
        count2.value = count_val2;
        }       
    });

    let add3 = document.getElementById("plus-button3");
    let minus3 = document.getElementById("minus-button3");
    let count3 = document.getElementById("count3");

    add3.addEventListener("click", function(){
        var count_val3 = parseInt(count3.value);
        count_val3++;
        count3.value = count_val3;
    });

    minus3.addEventListener("click", function(){
        var count_val3 = parseInt(count3.value);
        if(count_val3>0){
            count_val3--;
        count3.value = count_val3;
        }       
    });

    let add4 = document.getElementById("plus-button4");
    let minus4 = document.getElementById("minus-button4");
    let count4 = document.getElementById("count4");

    add4.addEventListener("click", function(){
        var count_val4 = parseInt(count4.value);
        count_val4++;
        count4.value = count_val4;
    });

    minus4.addEventListener("click", function(){
        var count_val4 = parseInt(count4.value);
        if(count_val4>0){
            count_val4--;
        count4.value = count_val4;
        }       
    });

    let total = document.getElementById("total");
    let total_value = document.getElementById("total-value");

    total.addEventListener("click", function(){
        let total_val = 1000*count1.value + 2000*count2.value + 3000*count3.value + 4000*count4.value;
        total_value.innerHTML = total_val;
    });

    let newTransaction = document.getElementById("NewTransaction");
    let completeTransaction = document.getElementById("CompleteTransaction");
    let popup = document.getElementById("popup");

    completeTransaction.addEventListener("click", function(){
        count1.value = count2.value = count3.value = count4.value = 0;
        total_value.innerHTML = 0;
        popup.style.display = "block";
        
    })

    let reports = document.getElementById("reports");
    reports.addEventListener("click", function(){
        window.location.href = "reports.html";
    })


});


