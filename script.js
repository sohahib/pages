function moreOption(){
        var x = document.getElementById("rules");
        if (x.style.display === "none") {
          x.style.display = "block";
        } else {
          x.style.display = "none";
        }
      }

      

function toiletCleaningList(){
    let names = ['Sohahib', 'Nassir', 'Faysal', 'Ousmane', 'Tidiane']
    let listTag = document.querySelector('ol');
    let list = ``
    names.forEach(name => {
        list+= `<li>${name}</li>`
    })
    listTag.innerHTML=list;
}

toiletCleaningList()