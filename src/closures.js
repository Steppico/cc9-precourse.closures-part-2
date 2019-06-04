/* exported gameGenerator accountGenerator randomInteger */
/*
We've written a few tests for your Game Generator function which you can find them in the 'specs' folder.
By the end of this exercise, you'll be writing tests for the functions yourself.
*/

function randomInteger(n) {
  return Math.floor(Math.random() * (n + 1));
}

function gameGenerator(x) {
  let upperBound = x;
  let winningNum = randomInteger(x);
  console.log("test uB e x", upperBound, x)
  console.log("test winner", winningNum)
  let result = {};
  let guesses = 0;

  return {

    guess(i){
      guesses++
      console.log(i)
      if (i > upperBound) {
        result = {
          Message: `Try again with a number between 0 and ${upperBound}.`,
          Status: false
        }
      }
      if (i === winningNum) {
        console.log("sono qua!", i)
        result = {
          Message: "Congrats! This is correct",
          Status: true
        }
      } else {
        result = {
          Message: "Aw naw! Try again",
          Status: false
        }
      }
      console.log("maddonna", result.Status === true)
      return result.Status === true;
    },
    
    reset() {
      let oldWin = winningNum;
      winningNum = randomInteger(x);
      guesses = 0;
      console.log("nuovi signò!", winningNum, guesses);
      if (winningNum === oldWin) {
        winningNum = randomInteger(x);
        return winningNum;
      } else {
        return winningNum;
      }
    },

    giveUp() {
      result = {
        Message: `You gave up! The number was ${winningNum}. Game reset.`,
        Status: false
      };
      this.reset();
      console.log("sentiunpò", winningNum, guesses)
      console.log(result.Message)
      return result;
    }
  } 
}

function accountGenerator(initial) {
  let balance = initial;

  return {
    withdraw: function(amount) {
      if (balance - amount >= 0) {
        balance = balance - amount;
        return `Here’s your money: $${amount}`;
      }
      return "Insufficient funds.";
    },
    deposit: function(amount) {
      balance = balance + amount;
      return `Your balance is: $${balance}`;
    }
  };
}
