window.onload = function() {

    const pazymiai = [8, 6, 9, 10, 10, 4, 8, 6, 7, 10];

    console.log(pazymiai);

    isvedamasyva(pazymiai);

    let suma = masyvosuma(pazymiai);

    console.log(suma);
    
    issaugotiLyginiusNuo200iki360();

    const lyginiaiSkaiciai = issaugotiLyginiusNuo200iki360();
    // isvedamasyva(lyginiaiSkaiciai);
    console.log(masyvosuma(lyginiaiSkaiciai));

    console.log("-----------------")

    const lyginiaiSkaiciai2 = issaugotilyginiusnuo205iki379();
    isvedamasyva(lyginiaiSkaiciai2);
}


function isvedamasyva(masyvas){

    for (let i = 0; i < masyvas.length, i++;){
        console.log(masyvas[i]);


    }
}

function masyvosuma(masyvas){
    let suma = 0;
    for (let i = 0; i < masyvas.length; i++) {
       // suma = suma + masyvas[i]; // čia yra sumavimo ilgesnis variantas;
       suma += masyvas[i];              // += sumuoja (prideda prie pirminės reikšmės);
        
    }
    return suma;

}

function issaugotiLyginiusNuo200iki360(){
    let masyvas = [];

    for (let i = 200; i <= 360; i += 2){
            masyvas.push(i);
    }
    return masyvas;


}


// efektyvesnis būdas

function issaugotilyginiusnuo205iki379(){
    const masyvas = [];
    for (let i=205; i <= 379; i++){
        if (arLyginis(i)){
            masyvas.push(i);
        }
    }
    return masyvas;
}

function arLyginis(x){
    return x % 2 === 0;
}