console.log("The loops.js is running");
// FOR loop Syntax
// for(startPoint; condition; interval){
// code to be repeated
//}


function multiTable(){
    let num = document.getElementById("txtNum").value; // get the value from input

    for(let = i=1;i<11;i++){
         document.getElementById("resuts").innerHTML+=`<li>${i} × ${num} = $(i * num)</li>`;
    }
}

// print your name
// use a for loop

for( let name = 1;name<6;name++){
    console.log("Dejanirra");
} /* Prints name 5 times with 5 next to it*/ 


for (let name = 1;name<11;name++) {
  console.log("Iteration:", name);
}/* Prints Iteration: 10 times in a row*/

for(let counter=0; counter<101;counter+=10){
    console.log(`Iteration:  ${counter}`);
} /* Prints Iteration: by 10s*/

// Print the places from 1 - 20 (runner places
// 1,2,3,4,5,......

for(let runner=1;runner<21;runner++){
    if (runner==1){
        console.log("Gold");
    }else if (runner==2){
        console.log("Silver");
    }
    }

    function generateTable(){
    for(let c=1;c<101;c++){
        let f = (c*9/5) + 32;
        document.getElementById("temps").innerHTML+=`
            <tr>
                <td>${c}</td>
                <td>${f}</td>
            </tr>
        `;
    }
}