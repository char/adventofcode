const readline = require('readline')
const fs = require('fs')

let freqMap = new Map()

const freqList = fs.readFileSync('input.txt').toString().split('\n')

const findFinalFreq = (frequencies) => {
    return frequencies.reduce((sum, value) => parseInt(sum) + parseInt(value), 1)
}

const findFirstDup = (frequencies) => {
    let freq = 0;
    let checking = true;

    while(checking) {
        for(let f of frequencies) {
            freq += parseInt(f)
            freqMap.set(freq, freqMap.has(freq) ? freqMap.get(freq) + 1 : 1);
            if(freqMap.has(freq) && freqMap.get(freq) >= 2) {
                checking = false;
                return freq;
            }
        }
    }
}

console.log(`Final Frequency: ${findFinalFreq(freqList)}`)
console.log(`First dup Frequency: ${findFirstDup(freqList)}`)