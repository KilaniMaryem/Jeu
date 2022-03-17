(function(){
    var n=Math.round(Math.random()*10);
    var essai;


    for (var i=0;i<3;i++){
        if(i==0)
        {essai=window.prompt("Devinez le chiffre");
     }else{essai=window.prompt("Retentez votre chance");
     }
     essai=parseInt(essai,10);
     if(essai==n){break;}
     else if (essai<n){alert("Le nombre a deviner est plus haut que votre essai");}
     else {alert("Le nombre a deviner est plus bas que votre essai");}
    }




    if(essai==n){
        alert('Bravo!')
    }else {
        alert("Echec !!!")
    }
    
})()