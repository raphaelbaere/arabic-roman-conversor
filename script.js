function romanToArabic(romanNumeral) {
    const romanDict = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
    let arabicNumeral = 0;
    let prevValue = 0;
  
    for (let i = romanNumeral.length - 1; i >= 0; i--) {
      const currentDigit = romanDict[romanNumeral[i]];
      if (currentDigit >= prevValue) {
        arabicNumeral += currentDigit;
      } else {
        arabicNumeral -= currentDigit;
      }
      prevValue = currentDigit;
    }
  
    return arabicNumeral;
  }

function arabicToRoman(arabicNumeral) {
    const romanDict = [
      { value: 1000, numeral: 'M' },
      { value: 900, numeral: 'CM' },
      { value: 500, numeral: 'D' },
      { value: 400, numeral: 'CD' },
      { value: 100, numeral: 'C' },
      { value: 90, numeral: 'XC' },
      { value: 50, numeral: 'L' },
      { value: 40, numeral: 'XL' },
      { value: 10, numeral: 'X' },
      { value: 9, numeral: 'IX' },
      { value: 5, numeral: 'V' },
      { value: 4, numeral: 'IV' },
      { value: 1, numeral: 'I' }
    ];
  
    let romanNumeral = '';
  
    for (let i = 0; i < romanDict.length; i++) {
      while (arabicNumeral >= romanDict[i].value) {
        romanNumeral += romanDict[i].numeral;
        arabicNumeral -= romanDict[i].value;
      }
    }
  
    return romanNumeral;
}

const numberToConvert = document.querySelector('#number-to-convert');
const convertTo = document.querySelector('#convert-to');
const invertButton = document.querySelector('#invert-button');
const convertButton = document.querySelector('#convert-button');
const inputNum = document.querySelector('#number-value');
const resultText = document.querySelector('#result');

numberToConvert.innerHTML = 'Árabe';
convertTo.innerHTML = 'Romano' ;

let defaultValue = true;

onInvertClick = () => {
    defaultValue = !defaultValue;
    numberToConvert.innerHTML = defaultValue ? 'Árabe' : 'Romano';
    convertTo.innerHTML = defaultValue ? 'Romano' : 'Árabe';
}

invertButton.addEventListener('click', onInvertClick);

onConvertClick = () => {
    let convertResult = '';
    if (defaultValue) {
        convertResult = arabicToRoman(+inputNum.value);
    } else {
        convertResult = romanToArabic(inputNum.value.toUpperCase());
    }
    resultText.innerHTML = convertResult;
}

convertButton.addEventListener('click', onConvertClick)
