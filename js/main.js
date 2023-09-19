// for bo'yicha masalalar


// 1-masala

function probOne(K,n){
        for (let i = 0; i<n; i++){
            console.log(K);
        }
}



// 2-masala

{

    
function Check(a,b){
    for(i=a-1; a>b; i--){
        console.log(i);
    }
}

}




// 3-masala


function anb(c,d){
    for( i = c; c>=d; i--){

        console.log(i);
    }
}




// 4-masala



function konfet(){
    let kg = 10000;
    for(i = 1; i<=10 ; i++){
        console.log(i*kg);
    }
}






// 5-masala


function konfet2(){
    let kg = 1000;
    for(i=1; i<=10; i++){
        console.log(i*kg);
    }
}




// 6-masala




function konfet3(){
    let kg = 1000;
    for(i=12; i<=20; i=i+2){
        console.log(i*kg);
    }
}




// 7-masala



function butSon(a,b){
    if(a>b){
        let k= 0;
        for(i=a; i>=b; i--){
            k=k+i;
        }
        console.log(k);
    } else {
        let k =0;
        for(i=a; i<=b; i++){
            k=k+i;
        }
        console.log(k);
    }
    
}




// 8-masala


function butSonKop(a,b){
    if(a>b){
        let k=1;
        for(i=a; i>=b; i--){
            k=k*i
        }
        console.log(k);
    } else {
        let k=1;
        for(i=a; i<=b; i++){
            k=k*i
        }
        console.log(k);
    }

}







// 9-masala



function butSonSqr(a,b){
    if(a>b){
        let k = 0;
        for(i=a; i>=b; i--){
            k=k+i*i
        }
        console.log(k);
    } else {
        let k = 0;
        for(i=a; i<=b; i++){
            k=k+i*i
        }
        console.log(k);
    }
}





// 10-maasala



// function name(params) {
    
// }





// 11-masala




function nSoni(n){
    for(i=0; i<=n; i++){
        if(i%2!=0){
            console.log(i);
        }
    }
}




// 12-masala




function nSoni2(n){
    for(i=0; i<=n; i++){
        if(i%2==0){
            console.log(i);
        }
    }
}









// 13-masala




function nSoni3(n){
    for(i=0; i<=n; i++){
        if(i!=2 || i%2==0){
            console.log(i);
        }
    }
}









// 14-masala



function nSoni4(n){
    for(i=0; i<=n; i++){
        console.log(i*i);
    }
}





// 15-masala



function nSoni5(n){
    for(i=n; i>=0; i--){
        console.log(i);
    }
}





// 16-masala




function nSoni6(n){
    for(i=0; i<=n; i++){
        if(i%5 !=0){
            console.log(i);
        }
    }
}





// 17-masala



function nSoni7(n){
    let k = 1;
    for(i=1; i<=n; i++){
        k=k*i;
    }
    console.log(k);
}