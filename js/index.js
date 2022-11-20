console.log('I am ready!')
// Iteration 1: Names and Input

let hacker1 = 'Alfredo';
console.log(`The driver's name is ${hacker1}`);

let hacker2 = 'Julia';
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longes name, it has
     ${hacker1.length} characters.`);
} else if (hacker1.length < hacker2.lenght) {
    console.log(`It seems the navigator has the longes name,
    it has ${hacker2.length} characters.`)
} else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
}

// Iteration 3: Loops
console.log(hacker1.split('').join(' '))
console.log(hacker1.split('').reverse().join(''))
if(hacker1.localeCompare(hacker2) == -1) {
    console.log(`The driver's name goes first.`)
} else if (hacker1.localeCompare(hacker2) == 1) {
    console.log('Yo, the navigator goes first definitely')
} else {
    console.log('What?! You both have the same name?')
}

//Bonus 1:

let randomText = "Lorem ipsum dolor amet, consectetur adipiscing elit. Mauris sit amet est non ante euismod mollis et eu enim. Nulla at elit massa. Phasellus fringilla imperdiet nibh et tristique. In sit amet turpis in nisi tempus lacinia. Nam tincidunt laoreet purus ac iaculis. Nunc commodo vulputate nunc, consectetur scelerisque urna sollicitudin non. Mauris eleifend gravida velit, eu tempus ipsum tincidunt sed. Sed porttitor tincidunt sem, sed cursus lacus elementum dictum. Duis enim mauris, rhoncus vel sapien a, fringilla semper metus. Pellentesque quis nunc in diam condimentum laoreet eu eget nulla. Cras ut congue velit. Vestibulum molestie semper odio, vel faucibus diam dictum efficitur. Quisque tempus varius suscipit. Curabitur vitae tempor est.In vehicula velit risus, nec ultrices justo tempus at. Mauris at ligula interdum, iaculis sapien a, sodales diam. Etiam vehicula vitae erat sed malesuada. Duis ornare dui ut suscipit sagittis. Vestibulum consequat mi ut leo feugiat imperdiet. Proin velit ligula, tincidunt eget venenatis eget, tempor vitae magna. Cras ac dui interdum, pulvinar ex vel, ultricies purus. Morbi venenatis eros sed rutrum aliquam.Curabitur mattis est magna, nec mollis risus venenatis quis. Proin vel ullamcorper nibh. Maecenas ac dignissim est. Nam congue, magna sit amet feugiat facilisis, ipsum risus rutrum neque, at efficitur quam neque in tellus. Nam dignissim dui ut enim imperdiet, quis dapibus ex mattis. Pellentesque quis tincidunt massa. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aenean at lacus in turpis sagittis euismod. Aenean efficitur metus dignissim, condimentum neque ac, tincidunt elit."
console.log(randomText.split(' ').length)

//Bonus 2: Check palindrome

let phraseToCheck = "A man, a plan, a ernal, Panama!";
phraseToCheck = phraseToCheck.replace(/\W/g, "").toLowerCase().split('');
let palindrome = 'yes'


while(phraseToCheck.length > 1) {
    console.log(phraseToCheck.length)
    if(phraseToCheck.pop() != phraseToCheck.shift()) {
        palindrome = 'no'
        break
    }
}

if (palindrome == 'yes') {
    console.log('The phrase is a palindrome')
} else {
    console.log('The phrase is NOT a palindrome')
}



