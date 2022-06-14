window.onload = function() {

    const pazymiai = [8, 6, 9, 10, 10, 4, 8, 6, 7, 10];

    console.log(pazymiai);

    isvedamasyva(pazymiai);

    
    let suma = masyvosuma(pazymiai);

    console.log(suma);
    
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