var ticTacToe = require('commander');

ticTacToe
  .version('0.0.1')
  .option('participate [participant]')
  .parse(process.argv)

console.log(ticTacToe.participate);

var zerozero = '- ';
var onezero = '- ';
var twozero = '- ';

var zeroone = '- ';
var oneone = '- ';
var twoone = '- ';

var zerotwo = '- ';
var onetwo = '- ';
var twotwo = '- ';

console.log(
        '- 0 1 2'
  + '\n' + '0 ' + zerozero + onezero + twozero
  + '\n' + '1 ' + zeroone + oneone + twoone
  + '\n' + '2 ' + zerotwo + onetwo + twotwo
)
