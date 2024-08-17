
function checkWeather(){

    const val1=document.querySelector(".city");
    const w1=val1.value;
    
    const opt1=document.querySelector(".result");
    
    if(w1=="Islamabad" || w1=="Islamabad"){
        const prg=document.createElement("h1");
        prg.innerHTML="The Weather of Islamabad  is 42C ,Sunny";
        opt1.appendChild(prg);} 
        
        else if (w1=="Karachi" || w1=="Karachi"){    
            const prg=document.createElement("h1");
            prg.innerHTML="The Weather of Karachi  is 36C ,Sunny";
            opt1.appendChild(prg);}
            
            
        else if(w1=="Lahore" || w1=="Lahore") {
                const prg=document.createElement("h1");
                prg.innerHTML="The Weather of Lahore is 48C ,Sunny";
                opt1.appendChild(prg);
    
            }
            else {
    
                const prg=document.createElement("h1");
                prg.innerHTML="Enter Spellings Correctly";
                opt1.appendChild(prg);
            } 
    }
    