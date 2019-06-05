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
  let result = {};
  let guesses = 0;

  if (typeof x !== "number") {
    return 'Please insert a number.'
  } else {
    return {

      guess(i){
        if (typeof i !== "number") {
          return null;
        } else {
          guesses++;
          if (i > upperBound) {
            result = {
              Message: `Try again with a number between 0 and ${upperBound}.`,
              Status: false
            }
          }
          if (i === winningNum) {
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
        }
        return result.Status;
      },
      
      reset() {
        let oldWin = winningNum;
        while (winningNum === oldWin) {
          winningNum = randomInteger(x);
        }
        guesses = 0;
        },

      giveUp() {
        result = {
          Message: `You gave up! The number was ${winningNum}. The game will be reset.`,
          Status: false
        };
        this.reset();
        return result.Message;
      },

      numberGuesses() {
        return guesses;
      }
    }
  }
}

function accountGenerator(initial) {
  let balance = initial;

  return {
    
    getBalance: function() {
      return balance;  
    },

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


/*
- [ ] Add function `getBalance` that returns the current
     balance
- [ ] Change `withdraw` to return a transaction object
     (see below)
- [ ] Change `deposit` to return a transaction object 
      (see below)
- [ ] Implement a function `transactionHistory` to get
  the last `n` withdrawals or deposits 💵 (see below)

   - [ ] Implement a function `averageTransaction` 
  that determines the average withdrawal and deposit
  amounts 💰. _IMPORTANT: Only approved transactions
  count towards the total!_. It should return an object
  that looks like

    ```js
    {
      deposit: number,
      withdrawal: number
    }
    ```

  - [ ] Use the `Date` object to incorporate a
    key `time` into the transactions 📅
*/