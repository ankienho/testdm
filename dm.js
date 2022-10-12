function checkthisSound (){
    var sound = document.getElementById("audio");
    sound.src = "srcpic\\hayhayxutxac.mp3"
}


function setClor(){
    document.getElementsById("text").style.color = 'red';
    
}

function deom (){
    var sound = document.getElementById("audio");
    sound.src = "srcpic\\deom.mp3"
}


function hienhinh(){
    let sinh = document.getElementById("sinh");
    sinh.src = "srcpic\\sinh.jpg"
}

function luamne (){
    var sound1 = document.getElementById("lua");
    sound1.src = "srcpic\\dumam.mp3"
    setTimeout(() => {
        document.write("m bị nhừa gòi")
        alert("lêu lêu")
    }, 3000);
}
