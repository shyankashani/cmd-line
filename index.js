var ticTacToe = require('commander');

ticTacToe.zeroZero = '-';
ticTacToe.oneZero = '-';
ticTacToe.twoZero = '-';

ticTacToe.zeroOne = '-';
ticTacToe.oneOne = '-';
ticTacToe.twoOne = '-';

ticTacToe.zeroTwo = '-';
ticTacToe.oneTwo = '-';
ticTacToe.twoTwo = '-';

ticTacToe
  .version('0.0.1')
  .option('zeroZero [zeroZero]')
  .option('oneZero [oneZero]')
  .option('twoZero [twoZero]')
  .option('zeroOne [zeroOne]')
  .option('oneOne [oneOne]')
  .option('twoOne [twoOne]')
  .option('zeroTwo [zeroTwo]')
  .option('oneTwo [oneTwo]')
  .option('twoTwo [twoTwo]')
  .parse(process.argv)

if (ticTacToe.zeroTwo === 'X' && ticTacToe.oneTwo === 'X' && ticTacToe.twoTwo === 'X') {
  console.log('X wins!');
}

console.log(
        '  0 1 2'
  + '\n' + '0 ' + ticTacToe.zeroZero + ' ' + ticTacToe.oneZero + ' ' + ticTacToe.twoZero
  + '\n' + '1 ' + ticTacToe.zeroOne + ' ' + ticTacToe.oneOne + ' ' + ticTacToe.twoOne
  + '\n' + '2 ' + ticTacToe.zeroTwo + ' ' + ticTacToe.oneTwo + ' ' + ticTacToe.twoTwo
)
