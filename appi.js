"use strict";
let cases=[...document.getElementsByClassName('cases')];
let tour=document.getElementById('trJoueur');
let score1=document.getElementById("score1");
let score2=document.getElementById("score2");
let scoreNull=document.getElementById("scoreNull");

let state = {
    jrEnCours: 1,
    scoreJr1: 0,
    scoreJr2: 0,
    scoreNul: 0,
    case1: 0,
    case2: 0,
    case3: 0,
    case4: 0,
    case5: 0,
    case6: 0,
    case7: 0,
    case8: 0,
    case9: 0,
};

const siVictoire = () => {
    if(
        (state.case1==state.case2 && state.case2==state.case3 && state.case1>0)||
        (state.case1==state.case5 && state.case5==state.case9 && state.case1>0)||
        (state.case1==state.case4 && state.case4==state.case7 && state.case1>0)||
        (state.case2==state.case5 && state.case5==state.case8 && state.case2>0)||
        (state.case3==state.case6 && state.case6==state.case9 && state.case3>0)||
        (state.case3==state.case5 && state.case5==state.case7 && state.case3>0)||
        (state.case4==state.case5 && state.case5==state.case6 && state.case4>0)||
        (state.case7==state.case8 && state.case8==state.case9 && state.case7>0)
    ) { return true;}
    else { if (state.case1!=0 && state.case2!=0 && state.case3!=0 && state.case4!=0 && state.case5!=0 &&
             state.case6!=0 && state.case7!=0 && state.case8!=0 && state.case9!=0) { return null;}
         else {return false ;}
         }
}
const restcases =  ()=>{
    state.case1=0;
    state.case2=0;
    state.case3=0;
    state.case4=0;
    state.case5=0;
    state.case6=0;
    state.case7=0;
    state.case8=0;
    state.case9=0;
    state.jrEnCours=1;
};

const caseJouer = (even) => {
   let idCase = even.target.id;

   if(state[idCase]!=0) {return;}

   state[idCase]=state.jrEnCours;

   let victoire = siVictoire();
   if(victoire==true) {
        alert(" le gagnant est le joueur : "+ state.jrEnCours);
        if(state.jrEnCours==1){
            state.scoreJr1++;
            score1.textContent=state.scoreJr1;
            tour.textContent="1";
        }
        else if(state.jrEnCours==2){
            state.scoreJr2++;
            score2.textContent=state.scoreJr2;
            tour.textContent="1";

        }
        restcases();
        cases.forEach((c) => (c.textContent=""));
    }
    else{ if(victoire===null){
            alert("c'est un match nul !!!! ");
            tour.textContent="1";
            state.scoreNul++;
            scoreNull.textContent=state.scoreNul;
            restcases();
            cases.forEach((c) => (c.textContent=""));
        } else{ if(victoire==false){
                    if(state.jrEnCours==1){
                        even.target.textContent="X";
                        state.jrEnCours=2;
                        tour.textContent="2";
                        
                    }
                    else {
                        even.target.textContent="O";
                        state.jrEnCours=1;
                        tour.textContent="1";
                    }

                }
            }
    }

};

cases.forEach((element)=> {
    element.addEventListener('click',caseJouer);
})


