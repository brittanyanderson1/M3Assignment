let choice = prompt('Choose Heads or Tails and enter your choice below.').toLowerCase();

coinFlip = Math.round(Math.random())

if (coinFlip === 0 && choice === 'heads') {
    alert('The flip was heads and you chose heads...you win!')
}else if (coinFlip === 0 && choice === 'tails') {
    alert('The flip was tails and you chose heads...you lose!')
}else if (coinFlip === 1 && choice === 'heads') {
    alert('The flip was tails and you chose heads...you lose!')
}else if (coinFlip === 1 && choice === 'Tails') {
    alert('The flip was tails and you chose tails...you win!')
}else{
    alert('Invalid choice. Please enter Heads or Tails.')
}
