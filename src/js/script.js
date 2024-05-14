
//task 1-----------------------------------

function suqareRoot(num) {
    if (num < 0) {
        console.log("Musbet eded yazun");
        return;
    }

    let suqare = Math.sqrt(num);

    if (Number.isInteger(suqare)) {
        return suqare;
    }
    else {
        return `${num} tam eded deyil`;
    }
}
console.log(suqareRoot(16));

//-------------------------------------------



//task 2-------------------------------------

function vowelAndNoVowel(str) {
    let sait_say = 0;
    let samit_say = 0;
    str = str.toLowerCase();

    for (let i = 0; i < str.length; i++) {

        switch (str[i]) {
            case 'a':
            case 'e':
            case 'i':
            case 'o':
            case 'u':
                sait_say++;
                break;

             default:
                samit_say++;
                break;

            case " ":
        }
    }

    return {
        sait_say: sait_say,
        samit_say: samit_say
    };
}

let text = vowelAndNoVowel('salam necesen yaxciyam sen necesen ade');
console.log("Sait: " + text.sait_say);
console.log("Samit: " + text.samit_say);

//------------------------------------------------


//task 3------------------------------------------

function arrJoin(arr) {
    return arr.join("");
}

let words = ["E", "malat", "xanamiz", 444, "dakilar", "dandir", "larmi", 123];
let joinStr = arrJoin(words);
console.log(joinStr);

//---------------------------------------------------------------------------------

