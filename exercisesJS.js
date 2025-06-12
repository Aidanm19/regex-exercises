//Problem 1
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

function problem2() {

    let input = '01010000 00000101 11010001 01101111'
    let solution = '';

    let inputSplit = input.split(/\s/)

    for (str of inputSplit) {
        let index = (str.match(/1/))['index'] + 1
        solution = solution + String(index) + ' '
    }

    console.log(solution)

}

problem2()