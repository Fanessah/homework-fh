// HW#1
//  Declare variables called ‘country', ‘continent' and 
// assign their values according to your own country. (Console log the response)
// 
const country = "unitedStates" 
const continent = "northAmerica"

console.log ('I live in the ' + country)

const car = " Sedan"
const make = ' Nissan'
const model = ' Altima'

console.log('I drive a ' + car )


//homework# 3 
// Pyramid problem:
// print:  (using a loop)
// #
// ##
// ###
// ####
// #####

let line ='#'
let numberofHashes =5 

for (let i = 1 ; i < numberofHashes; i++) {
    console.log(line)
    line = line +"#"
}
