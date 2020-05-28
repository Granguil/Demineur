$("#NP").on("click",function(){
    if($("#col").val()>0 && $("#ligne").val()>0 && $("#mine").val()>0 && $("#mine").val()<($("#ligne").val()*$("#col").val())){
    nbMine=$("#mine").val();
    nbLigne=$("#ligne").val();
    nbColonne=$("#col").val();
    nbDem=0;
    loop=0;
    nbCaseDev=0;
    nbMinePlace=nbMine;
    zero=new Array();
    $("#test").empty();
    creationGrille();
    }else{
        alert("caractéristiques invalides");
    }
})
function creationGrille(){
    
    $("#mines").text(nbMinePlace);
    grille=new Array(nbLigne);
    while(nbDem<nbMine){
    
    for(let i=0;i<nbLigne;i++){
        let g;
        if(loop==0){
        g=new Array(nbColonne);
        }else{
        g=grille[i];
        }
        for(let j=0;j<nbColonne;j++){
            let random=Math.floor(Math.random()*100);
            
            if(random>90 && nbDem<nbMine && g[j]!=9){
                g[j]=9;
                nbDem++;
                
            }
            if(g[j]!=9){
                g[j]=0;
            }
        }
        grille[i]=g;
    }
    
    loop++;
    }
    //alert(JSON.stringify(grille));
    for(let i=0;i<nbLigne;i++){
        for(let j=0;j<nbColonne;j++){
            let nbMV=0;
            if(grille[i][j]!=9){
            for(let y=i-1;y<=i+1;y++){
                for(let z=j-1;z<=j+1;z++){
                    if(y>=0 && y<nbLigne && z>=0 && z<nbColonne && (y!=i || z!=j)){
                        if(grille[y][z]==9){
                            nbMV++;
                        }
                    }
                }
            }
            grille[i][j]=nbMV;
            
            if(grille[i][j]==0){
                let liste=new Array();
                liste.push([i,j]);
                
            for(let y=i-1;y<=i+1;y++){
                for(let z=j-1;z<=j+1;z++){
                    if(y>=0 && y<nbLigne && z>=0 && z<nbColonne && (i!=y || j!=z)){
                        liste.push([y,z]);
                    }
                }
            }
            zero.push(liste);
            }
            }
        }
    }
    //alert(JSON.stringify(zero));
    //alert(JSON.stringify(grille));
    for(let i=0;i<nbLigne;i++){
        let ligne=$("<tr></tr>");
        for(let j=0;j<nbColonne;j++){
            c=$("<td></td>");
            let button=$("<button></button>");
            button.text(" ");
            button.attr("id","b"+i+"c"+j);
            button.attr("class","jeu");
            //button.text(grille[i][j]);
            button.css("height","20px");
            button.css("width","20px");
            button.css("padding",0);
            button.on("click",function(){
                if(grille[i][j]==9){
                    alert("Perdu");
                    $(".jeu").off();
                    affichageMine();
                    $("#b"+i+"c"+j).css("background-color","red");
                }else{
                    $("#b"+i+"c"+j).text(grille[i][j]);
                    nbCaseDev++;
                    affichageZero(i,j);
                    if(nbCaseDev==(nbColonne*nbLigne-nbMine)){
                        alert("Victoire");
                        $(".jeu").off();
                        affichageMine();
                        nbMinePlace=0;
                        $("#mines").text(nbMinePlace);
                    }
                }
            })
            button.on("contextmenu",function(){
                if($("#b"+i+"c"+j).text()=="M"){
                $("#b"+i+"c"+j).css("color","black");
                $("#b"+i+"c"+j).css("border-width","2px");
                $("#b"+i+"c"+j).css("border-color","buttonface");
                $("#b"+i+"c"+j).css("border-style","outset");
                $("#b"+i+"c"+j).css("border-image","initial");
                $("#b"+i+"c"+j).text(" ");
                nbMinePlace++;
                }else if($("#b"+i+"c"+j).text()==" "){
                $("#b"+i+"c"+j).css("color","red");
                $("#b"+i+"c"+j).css("border","solid");
                $("#b"+i+"c"+j).text("M");
                nbMinePlace--;
                }
                $("#mines").text(nbMinePlace);
                return false;
            })
            //button.text(grille[i][j]);
            /*if(grille[i][j]==9){
                button.css("color","red");
            }*/
            c.append(button);
            ligne.append(c);
        }
        $("#test").append(ligne);
    }
}