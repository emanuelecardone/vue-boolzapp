// Funzione che controlla la presenza di caratteri speciali in una stringa, parola o numero
//
// string -> stringa da analizzare, proveniente da un prompt o dal codice
//
// return -> la funzione ritorna vero se trova caratteri speciali nella stringa, altrimenti ritorna falso
//
// 1) Definisco una serie di caratteri speciali che l'utente potrebbe inserire
// 2) Applico alla stringa il .test in riferimento ai caratteri speciali
// 3) Vedo se c'è un matching tra un carattere della stringa ed uno speciale
// 4) Applico il return in base al punto 2
function checkSpecialCharacters(string){
    const specialCharacters = /[`£!@#$%^&*()_+\-=\[\]{}°§;':"\\|,.<>\/?~]/;
       if(specialCharacters.test(string)){
           return true;
       } else{
           return false;
       }
}

// Funzione che controlla la presenza di caratteri numerici in una singola parola
// Nota: questa funzione può anche controllare la presenza di numeri in una stringa
//
// word -> parola da analizzare, proveniente da un prompt o dal codice
//
// return -> la funzione ritorna vero se trova numeri nella parola, altrimenti ritorna falso
//
// 1) Definisco una variabile flag che dà falso di default
// 2) Controllo ogni lettera della parola
// 3) Vedo se c'è almeno un carattere che è un numero
// 4) Escludo dal check gli spazi tra le stringhe per evitare errori (nel caso lo applichi ad una stringa)
// 5) Applico il return in base al punto 3
function checkNumbers(wordOrString){
    let numberCheck = false;
    for(let i = 0; i < wordOrString.length; i++){
        if(!isNaN(wordOrString[i]) && wordOrString[i] !== ' '){
            numberCheck = true;
        }
    }
    return numberCheck;
}

// Funzione che controlla la presenza di lettere, caratteri speciali e spazi in un numero
//
// number -> numero da analizzare, proveniente da un prompt o dal codice
//
// return -> la funzione ritorna vero se trova letter nel numero, altrimenti ritorna falso
//
// 1) Definisco una variabile flag che dà falso di default
// 2) Controllo se è un numero o meno
// 3) Applico il controllo anche sulla presenza di spazi visto che un numero non ne contiene
// 4) Anche i caratteri speciali non sono un numero quindi verranno esclusi a priori
// 5) Applico il return in base ai punti 2/3
function checkLetters(number){
    let letterCheck = false;
    if(isNaN(number)){
        letterCheck = true;
    }
    return letterCheck;
}

