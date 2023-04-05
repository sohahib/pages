function passwordCheck(){
    var password = prompt("Please enter the password.");
    if (password!=="3R"){
        window.location = 'index.html';
    }
}
window.onload=passwordCheck;
function toiletCleaningList(){
    let names = ['Sohahib', 'Nassir', 'Faysal', 'Tidiane']
    let listTag = document.querySelector('ol');
    let list = ``
    names.forEach(name => {
        list+= `<li>${name}</li>`
    })
    listTag.innerHTML=list;
}

function toogleRiceList(){
    let riceButton = document.querySelector(".riceBtn");
    riceButton.addEventListener("click",displayRice)
}
function displayRice(){
    let x = document.querySelector(".riceList");
    let text = document.querySelector('.riceBtn')
    if(x.style.display === 'none'){
        x.style.display = 'block';
        text.innerHTML = "Hide List";
    }else{
        x.style.display='none';
        text.innerHTML = "See Rice List";
    }
}
toiletCleaningList();
toogleRiceList();


