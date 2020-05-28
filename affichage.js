function affichageMine(){
    for(let i=0;i<nbLigne;i++){
        for(let j=0;j<nbColonne;j++){
            if(grille[i][j]==9){
                $("#b"+i+"c"+j).css("color","red");
                $("#b"+i+"c"+j).css("border","solid");
                $("#b"+i+"c"+j).text("M");
            }else if(grille[i][j]!=9 && $("#b"+i+"c"+j).text()=="M"){
                $("#b"+i+"c"+j).css("color","blue");
            }
        }
    }
}
function affichageZero(i,j){
    for(assos of zero){
        for(asso of assos){
            if(i==asso[0] && j==asso[1]){
                for(asso2 of assos){
                    if(($("#b"+asso2[0]+"c"+asso2[1]).text()==" " || $("#b"+asso2[0]+"c"+asso2[1]).text()=="M")&& grille[asso2[0]][asso2[1]]!=9){
                        if($("#b"+asso2[0]+"c"+asso2[1]).text()=="M"){
                            nbMinePlace++;
                            $("#mines").text(nbMinePlace);
                            $("#b"+asso2[0]+"c"+asso2[1]).css("color","black");
                            $("#b"+asso2[0]+"c"+asso2[1]).css("border-width","2px");
                            $("#b"+asso2[0]+"c"+asso2[1]).css("border-color","buttonface");
                            $("#b"+asso2[0]+"c"+asso2[1]).css("border-style","outset");
                            $("#b"+asso2[0]+"c"+asso2[1]).css("border-image","initial");
                        }
                        $("#b"+asso2[0]+"c"+asso2[1]).text(grille[asso2[0]][asso2[1]]);
                        nbCaseDev++;
                        affichageZero(asso2[0],asso2[1]);
                    }
                    //affichageZero(asso2[0],asso2[1]);
                }
            }
        }
    }
}