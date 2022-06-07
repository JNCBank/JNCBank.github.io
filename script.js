var i = 0;

function minigame1() {
    
    if(document.getElementById("InputEmail1").value == "") {
        alert("Please Enter Email");
    }
  
    if(document.getElementById("InputPassword1").value == "") {
        alert("Please Enter Password");
    }
    
    else {
    
    
    if(i != 3) {
    alert("WRONG PASSWORD")
    i++ 

    }

    
    else {
        var answer = prompt("What was the name of your first dog?")
        window.location.href = "bankaccount.html";
    }
}
    
    
}

