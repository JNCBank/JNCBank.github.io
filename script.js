var i = 0;

let ads = ['https://www.gpwebsolutions-host.co.uk/3399/files/2019/03/silver-line.png', 'https://www.adweek.com/wp-content/uploads/2018/08/AARP-print-1.jpg', 'https://www.dailymoss.com/wp-content/uploads/2015/12/bookmybai.jpg', 'https://i.redd.it/vgh4ufjroho21.jpg', 'https://static.politico.com/bb/11/aa538ff2444a8cd90ae85d4256c1/1705601-trump-ad-screenshot-1160.jpg', 'https://cbsnews2.cbsistatic.com/hub/i/r/2019/08/20/24ade004-142c-4968-acae-935e6e06a99a/thumbnail/1920x1080/ab72598e9302d24e74c955a4f8911e16/0820-biden-ad-1915981-640x360.jpg']

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
        var number = Math.floor(Math.random() * 44)
        var answer = prompt("Who was President Number " + number + " ?")
        window.open(ads[Math.floor(Math.random() * 5)], '_blank');
        window.location.href = "bankaccount.html";
    }
}
    
    
}

