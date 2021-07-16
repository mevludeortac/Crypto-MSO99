const numbers = [0,1,2,3,4,5,6,7,8,9];
const chars = ["a","b","c","d","e","f","g","h","i","j"];
const reverseChars = ["n","o","p","r","s","t","u","v","y","z"];

const charMap = {}

function numberFormule(number) 
{
    return parseInt(number.toString().charCodeAt(0)) * 1999;
}

function reverseFormule(encoded) {
    if (encoded !== "") { 
        encoded = encoded.substring(1)
        encoded = encoded.slice(0,-1)
        return parseInt(encoded) / 1999;
    }
}



numbers.forEach(number => 
        {
    charMap[number] = chars[number] + numberFormule(number).toString() + reverseChars[number]
        });



function encode (numbers) {
    var encoded = "";
    numbers = numbers.split("");
    numbers.forEach(number => 
        {
        encoded += charMap[number] + "$"
        });
    console.log(encoded);
    return encoded;

}

function decode (encoded) {
    var decoded = "";
    encodedArray = encoded.split("$");
    console.log(encodedArray)
    encodedArray.forEach( encoded =>
    {
        var ascii =  reverseFormule(encoded)
        decoded += String.fromCharCode(ascii)
       
    });
    console.log("şifreler çözüldü", decoded)
    return decoded;
}


