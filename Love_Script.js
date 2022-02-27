document.getElementById("calculate-button").addEventListener('click',()=>{
    let personOneTag = document.getElementById("personOne")
    let personTwoTag = document.getElementById("personTwo")
    let progressBar = document.getElementById("pb");
    let personOne = personOneTag.value;
    let personTwo = personTwoTag.value;

    if(!personOne){
        alert("Your Name Cannot Be Empty");
    }
    else if(personOne.length < 3){
        alert("Your Name is not valid")
    }
    else if(personOne.length < 3){
        alert("Your Partner Name is not valid")
    }
    else if(!personTwo){
        alert("Your Partner Name Cannot Be Empty");
    }
    else{

        let percentage = Math.floor(Math.random() * 100) + 1
        if(percentage<=30){
            percentage = 35;
        }
        personOneTag.value = ""
        personTwoTag.value = ""
        let resultTag = document.getElementById("result");
        resultTag.style.visibility = "hidden"
        let progress = 0;
        var id = window.setInterval(()=>{
            progress += 3;
            
            progressBar.style.width = ""+progress.toString()+"%";
            progressBar.innerHTML = progress + "%"
            console.log(""+progress.toString())
            
            if(progress >=percentage){
                window.clearInterval(id)
                resultTag.style.visibility = "visible"
                resultTag.style.textAlign = "center";
                resultTag.innerHTML = " <i class='fa-solid fa-heart'></i> Love percentage between "+personOne+" and "+personTwo+" is "+progress+"%"
        
            }
        },200)
    }
    
})