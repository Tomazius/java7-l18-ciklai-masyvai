window.onload = function(){
    // Susikuriu masyvą, kuris jau turi skaičius.
    const kainos = [3, 5, 12, 35.84, 147, 25.96, 15];
    console.log(kainos);


    //Susikuriu tuščią masyvą, į kurį idėsiu elementus naudojant masyvo funkciją.
    const atlyginimai = [];
    atlyginimai.push(1200);
    atlyginimai.push(1500);
    atlyginimai.push(5242);
    atlyginimai.push(5123);
    atlyginimai.push(1200);
    atlyginimai.push(1252);
    atlyginimai.push(1265);
    atlyginimai.push(2412);

    console.log(atlyginimai);

    atlyginimai.push(2000);
    atlyginimai.push(2001);

    console.log(atlyginimai);
    
    // Ištrinu paskutinį vieną masyvo elementą;

    atlyginimai.pop();

    console.log(atlyginimai);

    // Pakeičiu trečio algą į 3000;

    atlyginimai[2] = 3000;

    console.log(atlyginimai);

    // Suskaičiuoju trečią atlyginimą po pakeitimo;

    console.log(atlyginimai[2]);

    // Suskai2iuoju ir išvedu trečio ir šešto atlyginimų sumą;

    console.log(atlyginimai[2]+atlyginimai[5]);

    // istrinu pirma alga
    atlyginimai.shift();

    console.log(atlyginimai);

    //anuliuoju
    atlyginimai.unshift();
    console.log(atlyginimai);
}
   