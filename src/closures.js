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
        result = winningNum
        this.reset();
        return result;
      },

      numberGuesses() {
        return guesses;
      }
    }
  }
}

function accountGenerator(initial) {
  let balance = initial;
  let prevBal = 0;
  let transaction;
  let transHis = [];
  let avgDepo = 0;
  let avgWith = 0;

  return {
    
    getBalance: function() {
      return balance;  
    },

    withdraw: function(amount) {
      if (balance - amount >= 0) {
        prevBal = balance;
        balance = balance - amount;
        avgWith += amount;
        transaction = {
          type: "withdrawal",
          amount: amount,
          before: prevBal,
          after: balance,
          status: "approved"
        }
        transHis.push(transaction);
        return transaction;
      }
      transaction = {
        type: "withdrawal",
        amount: amount,
        before: balance,
        after: balance,
        status: "denied"
      }
      transHis.push(transaction);
      return transaction;
    },
    deposit: function(amount) {
      prevBal = balance;
      balance = balance + amount;
      avgDepo += amount;
      transaction = {
        type: "deposit",
        amount: amount,
        before: prevBal,
        after: balance,
        status: "approved"
      };
      transHis.push(transaction);
      return transaction;
    },

    transactionHistory: function(n) {
      if (n >= transHis.length) {
        return transHis;
      }
      let num = transHis.length-n;
      return transHis.slice(num);
    },
    
    averageTransaction: function() {
      let depoHis = transHis.filter(x => x.type === "deposit");
      let withHis = transHis.filter(x => x.type === "withdrawal" && x.status !== "denied");
      return {
        deposit: avgDepo/depoHis.length,
        withdrawal: avgWith/withHis.length
      }
    }

  }
}


/*

  - [ ] Use the `Date` object to incorporate a
    key `time` into the transactions 📅
*/