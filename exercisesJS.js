//Problem 1.1
//Replace any one-like characters (iIl|!/) with the digit 1, and any zero-like characters (oO@Θθ) with the digit 0.
function problem1() {

    let problem1_input = '011l!0l0 |10/01/0 00|!l101 101θ0|1I 1/|00011 0!O10|01 11100I1@ 11110001 11l11!11 0θ|1o1θ/ 01Θ1O/01 010111l1 0o1111θi @OO0I|0θ 0@oi1!0l 111@Θ011 100IO0/| IΘ10/!θ0 Θ1@/100/ 1@1|100o 1|1Θθ011 00|01I0o 0001Oi10 @0||o/0θ 00100110 o0110001 0|I|ΘiI0 01111i10 0@1i01/1 1!10/10i 01|/101! Θi111l@1 !l1001|θ 000010θ1 000I1001 @!0I1@01 oO10I|/1 10θoOθ1| Θ0001i0@ θ1@Θ1000 /11/|0o1 1!i1l0o0 0/1011lO 0ΘOi00/0 /||θII00 !I000000 O0l11i1! 0|/Θ10|1 1l01I0|1 110!1000 0O11||l0 I1O0li10 l/00l100 110@110Θ 101i0θ!o θ0Oo/i01 |@1!000! 0100@01/ 1@01/|11 01θ00Θ11 1/O0100@ 00/l0100 0|1110o0 /0θθ00|1 I|iθ0Θil 000/|011 10oiθ1i| 1i10!ll1 o0O||110 1I|1l000 0001110Θ i10@I010 /θ01OI01 Θ100i011 01@110ol 011I!1@@ 1i100I/1 01/11I1/ l@1O0o00 1100|@@1 IO110!1I 0|0ΘI/θ0 11i0i010 11110i01 1@@00111 0il0I101 01O@010! |O1θ11O1 1!!IO000 0I|/0!1Θ 0110100! 0o001o0O 01011011 0o100O1l @001oI!0 0i/10@00 i10i001@ o00o0I01 Θ0011101 θθ0θ100|'
    let problem1_solution;

    const matchFor1 = /[iIl|!/]/g
    const matchFor0 = /[oO@Θθ]/g

    problem1_solution = problem1_input.replace(matchFor1, "1")
    problem1_solution = problem1_solution.replace(matchFor0, "0")

    console.log(problem1_solution)
}


//Problem 1.2
//Provide a list of the 1-based indices of the left-most 1 of each bite in the source data
function problem2() {
    
    let input = '00100001 01001100 10100011 11010010 11011011 01010000 10001001 00110110 00100001 11001010 11010001 10111001 10111001 00000110 11000110 10100000 11010100 10000100 00010000 00011110 00111011 11011001 11011110 11010100 01000000 10101011 10000100 01110111 11110110 10011100 11111100 01001101 10000011 11010000 10011111 01101101 01101100 01101011 01011001 11110010 11010011 00101001 01111101 01011110 10010111 01100110 10011101 10101001 11010011 11011010 11111111 00111100 10100000 11110100 10011111 00101101 01011101 00100100 00000010 10011011 10010111 01000010 10001110 00011010 10010111 00100101 11100000 00101110 11010001 10100101 10010111 01100111 00101010 11010011 10001110 01100011 01000111 11001101 01100100 01111111 11001011 11101010 01001110 11101111 00010101 01100001 11001110 00001010 10101111 01101100 01100001 01110111 11100101 10010111 01011101 00101110 10011101 11011111 10110000 01000101'
    let solution = '';

    let inputSplit = input.split(/\s/)

    for (str of inputSplit) {
        //let index = (str.match(/1/))['index'] + 1
        //solution = solution + String(index) + ' '
    }

    console.log(solution)
}


//Problem 1.3
//Provide a list of the 1-based indices of the right-most 1 of each bite in the source data
function problem3() {

    let input = '00100001 01001100 10100011 11010010 11011011 01010000 10001001 00110110 00100001 11001010 11010001 10111001 10111001 00000110 11000110 10100000 11010100 10000100 00010000 00011110 00111011 11011001 11011110 11010100 01000000 10101011 10000100 01110111 11110110 10011100 11111100 01001101 10000011 11010000 10011111 01101101 01101100 01101011 01011001 11110010 11010011 00101001 01111101 01011110 10010111 01100110 10011101 10101001 11010011 11011010 11111111 00111100 10100000 11110100 10011111 00101101 01011101 00100100 00000010 10011011 10010111 01000010 10001110 00011010 10010111 00100101 11100000 00101110 11010001 10100101 10010111 01100111 00101010 11010011 10001110 01100011 01000111 11001101 01100100 01111111 11001011 11101010 01001110 11101111 00010101 01100001 11001110 00001010 10101111 01101100 01100001 01110111 11100101 10010111 01011101 00101110 10011101 11011111 10110000 01000101'
    let solution = '';

    let inputSplit = input.split(/\s/)

    for (str of inputSplit) {
        let matches =[...str.matchAll(/1/g)]            //create an array of arrays for all matches for this subtstring
        let lastArray = matches[matches.length - 1]     //access the last array
        let lastIndex = lastArray['index'] + 1          //get the index from the last array and add 1
        solution += String(lastIndex) + ' '
    }

    console.log(solution)
}


//Problem 1.4
//Remove all of the even bytes from the source data
function problem4() {

    //if it ends with a 1 it's odd and if it ends with a 0 it's even

    let input = '00100001 01001100 10100011 11010010 11011011 01010000 10001001 00110110 00100001 11001010 11010001 10111001 10111001 00000110 11000110 10100000 11010100 10000100 00010000 00011110 00111011 11011001 11011110 11010100 01000000 10101011 10000100 01110111 11110110 10011100 11111100 01001101 10000011 11010000 10011111 01101101 01101100 01101011 01011001 11110010 11010011 00101001 01111101 01011110 10010111 01100110 10011101 10101001 11010011 11011010 11111111 00111100 10100000 11110100 10011111 00101101 01011101 00100100 00000010 10011011 10010111 01000010 10001110 00011010 10010111 00100101 11100000 00101110 11010001 10100101 10010111 01100111 00101010 11010011 10001110 01100011 01000111 11001101 01100100 01111111 11001011 11101010 01001110 11101111 00010101 01100001 11001110 00001010 10101111 01101100 01100001 01110111 11100101 10010111 01011101 00101110 10011101 11011111 10110000 01000101'
    //let input = '01010000 00000101 11010010 01101111'
    let solution = ''

    let inputSplit = input.split(/\s/)

    //better regex implementation
    for (str of inputSplit) {
        const pattern = /[01]{7}(?<lastBit>[01])/
        let lastBit = pattern.exec(str).groups.lastBit
        if (lastBit === '1') {
            solution += str + ' '
        }
    }

    console.log(solution)
}
//problem4()

//Problem 1.5
//Get absolute value of each byte
function problem5() {

    let input = '00100001 01001100 10100011 11010010 11011011 01010000 10001001 00110110 00100001 11001010 11010001 10111001 10111001 00000110 11000110 10100000 11010100 10000100 00010000 00011110 00111011 11011001 11011110 11010100 01000000 10101011 10000100 01110111 11110110 10011100 11111100 01001101 10000011 11010000 10011111 01101101 01101100 01101011 01011001 11110010 11010011 00101001 01111101 01011110 10010111 01100110 10011101 10101001 11010011 11011010 11111111 00111100 10100000 11110100 10011111 00101101 01011101 00100100 00000010 10011011 10010111 01000010 10001110 00011010 10010111 00100101 11100000 00101110 11010001 10100101 10010111 01100111 00101010 11010011 10001110 01100011 01000111 11001101 01100100 01111111 11001011 11101010 01001110 11101111 00010101 01100001 11001110 00001010 10101111 01101100 01100001 01110111 11100101 10010111 01011101 00101110 10011101 11011111 10110000 01000101'
    //let input = '01000011 10011110 11101011 11000000'
    let solution = ''

    let inputSplit = input.split(/\s/)

    for (str of inputSplit) {
        let firstBit = str.match(/^[1]/)
        
        //signed - need to flip bits
        if (firstBit !== null) {
            const pattern = /(?<bitsToFlip>[01]+)1(?<bitsToKeep>0*$)/
            let bitsToFlip = pattern.exec(str).groups.bitsToFlip
            let bitsToKeep = pattern.exec(str).groups.bitsToKeep

            //flip bits by using replaceAll, using x and y as placeholders
            let flippedBits = bitsToFlip.replaceAll(/1/g, "x")
            flippedBits = flippedBits.replaceAll(/0/g, "1")
            flippedBits = flippedBits.replaceAll(/x/g, "0")
        
            solution += flippedBits + '1' + bitsToKeep + ' '
        }
        else {
            solution += str + ' '
        }
        
    }

    console.log(solution)

}
//problem5()

//Problem 2.1
//Filter out bad arrows
//Arrows must be: 
    //consisting only of dashes
    //a sharp arrow head (end with >) 
    //fletchings that are two units long (begin with >>)
    //total length between 6 and 8 units (inclusive)
function problem6() {
    const fs = require('node:fs');
    let array = [];
    let badArrows = ''
    const pattern = /^(?:>{2})-{3,5}(?:>$)/

    fs.readFile('problem2-1.txt', 'utf8', (err, data) => {
        if (err) {
          console.error(err);
          return;
        }

        let inputSplit = data.split('\n')

        let lineNumber = 1
        for (str of inputSplit) {

            let isGoodArrow = pattern.test(str)
            if (!isGoodArrow) {
                badArrows += lineNumber + ' '
            }

            lineNumber++
        }

        console.log(badArrows)
    });

}

//problem6()


//helper function to read local text files
function readTxt(fileName) {

    let array = [];
    const fs = require('node:fs');

    fs.readFile(fileName, 'utf8', (err, data) => {
        if (err) {
          console.error(err);
          return;
        }

        array.push(data);
    });

}

//Problem 2.2
//Accept good arrows
//Fix arrows that:
    //Are to thick but have even thickness (i.e. >>=====>)
    //Have to many fletchings (i.e. >>>----->)
function problem7() {
    const fs = require('node:fs');
    
    const goodArrow = /^(?:>{2})-{3,5}(?:>$)/
    const arrowToFix = /^(?:>{2,})(-{3,5}|={3,5})(?:>$)/
    let solution = ''

    fs.readFile('problem2-2.txt', 'utf8', (err, data) => {
        if (err) {
          console.error(err);
          return;
        }

        let inputSplit = data.split('\n')
        for (arrow of inputSplit) {
            
            if (goodArrow.test(arrow)) {
                solution += arrow + '\n'
            }
            else if (arrowToFix.test(arrow)){
                //fix arrow
                arrow = arrow.replace(/>+/, '>>')       //clip fletchling
                arrow = arrow.replaceAll(/=/g, '-')    //thin arrow
    
                solution += arrow + '\n'
            }
        }

        //write to file        
        fs.writeFile('solution2-2.txt', solution, err => {
            if (err) {
            console.error(err);
            } else {
            // file written successfully
            }
        });
    });

}


//Problem 3.1
function problem8() {
    const fs = require('node:fs');

    fs.readFile('problem3-test.txt', 'utf8', (err, data) => {
        if (err) {
          console.error(err);
          return;
        }

        let inputSplit = data.split(/(?=\[)/)   //split at first [, but include it
        for (str of inputSplit) {

            const emailPrefixRegex = /(?<emailPrefix>\w+[.-_]?\w+[.-_]?\w+[.-_]?\w*)@/
            console.log(emailPrefixRegex.exec(str))
        }
    });

}

problem8()