describe("gameGenerator", () => {
  it("should be there", () => {
    expect(gameGenerator).toBeDefined();
    expect(typeof gameGenerator).toBe("function");
  });

  it("should generate some games!", () => {
    const game = gameGenerator(4);
    expect(typeof game).toBe("object");
  });

  it("should have just one winning number", () => {
    const bound = 4;
    const game = gameGenerator(bound);
    const number = [];
    for (let i = 0; i <= bound; i++) {
      if (game.guess(i)) {
        number.push(i);
      }
    }
    expect(number.length).toBe(1);
  });
  
  it("gameGenerator should only accept numbers as parameter", ()=>{
    const bound = "foo";
    game = gameGenerator(bound);
    expect(typeof game).toBe("string")
    expect(game.guess).not.toBeDefined();
  })

  it("should have a guess method", ()=>{
    const game = gameGenerator(1);
    expect(game.guess).toBeDefined();
  })

  it("guess should only accept numbers as paramenter", ()=>{
    const bound = 10;
    game = gameGenerator(bound);
    expect(game.guess("goo")).toBe(null);
    expect(game.numberGuesses()).toBe(0);
  })

  it("should have a reset method", () => {
    const bound = 16;
    const game = gameGenerator(bound);
    game.reset();
    let result = [];
    for (let i = 0; i <= bound; i++) {
      if (game.guess(i)) {
        result.push(i);
      }
    }
    expect(game.reset).toBeDefined();
    expect(result.length).toBe(1);
    expect(result[0]).not.toBe(bound);
  });

  it("should have a give up method", () => {
    const game = gameGenerator(4);
    expect(game.giveUp).toBeDefined();
  });

  it("give up should return an object", ()=>{
    const game = gameGenerator(1)
    game.giveUp();
    expect(typeof game).toBe("object")
  })

  it("give up should reset the game",()=>{
    let game = gameGenerator(60);
    const firstRes = [];
    for (let i = 0; i <= 60; i++) {
      if (game.guess(i)){
        firstRes.push(i)
      }
    }
    game.giveUp();
    game = gameGenerator(90);
    const secondRes = [];
    for (let i = 0; i <= 90; i++) {
      if (game.guess(i)){
        secondRes.push(i)
      }
    }
    expect(firstRes[0]).not.toEqual(secondRes[0]);
  })

  it("should have a method numberGuesses", ()=> {
    const game = gameGenerator(3);
    expect(game.numberGuesses).toBeDefined();
  })

  it("numberGuesses should return the number of game played", ()=>{
    const bound = 10
    const game = gameGenerator(bound);
    const playedGames = 3;
    for (let i = 0; i < playedGames; i++) {
      game.guess(Math.floor(Math.random()*bound));
    }
    expect(game.numberGuesses()).toEqual(playedGames)
  })

});

describe("accountGenerator", () => {
  it("should be there", () => {
    expect(accountGenerator).toBeDefined();
    expect(typeof accountGenerator).toBe("function");
  });


  it("should have a getBalance function", () => {
    const account = accountGenerator(0)
    expect(account.getBalance).toBeDefined();
  });

  it("getBalance should work!",()=>{
    const money = 1000;
    const account = accountGenerator(money);
    expect(account.getBalance()).toBe(money);
    account.withdraw(500);
    account.deposit(100);
    expect(account.getBalance()).toBe(600);
  });

  it("withdraw should return an object",()=>{
    const account = accountGenerator(450);
    const withdraw = account.withdraw(200);
    expect(typeof withdraw).toBe("object")
  });

  it("withdraw should... work!", ()=>{
    const account = accountGenerator(500);
    const withdraw = account.withdraw(300);
    expect(withdraw.after).toBe(200); 
  })

  it("withdraw should deny the transaction if the balance is smaller than the requested amount",()=>{
    const account = accountGenerator(500);
    const withdraw = account.withdraw(600);
    expect(account.getBalance()).toBe(500);
  });

  it("deposit should return an object", ()=>{
    const account = accountGenerator(1000);
    const deposit = account.deposit(100);
    expect(typeof deposit).toBe("object");
  });
  
  it("deposit should... work!", ()=>{
    const account = accountGenerator(0);
    const deposit = account.deposit(1000);
    expect(deposit.after).toBe(1000);
  });

  it("should have a transactionHistory function", ()=>{
    const account = accountGenerator(1000);
    expect(account.transactionHistory).toBeDefined();
    expect(typeof account.transactionHistory).toBe("function")
  });

  it("transactionHistory should... work!", ()=>{
    const account = accountGenerator(1000);
    account.withdraw(100);
    account.withdraw(200);
    account.withdraw(300);
    account.deposit(500);
    const transaction = account.transactionHistory(3);
    expect(transaction.length).toBe(3)
  });

  it("return all transactions if the transactionHistory parameter is greater than the number of transactions",()=>{
    const account = accountGenerator(1000);
    account.withdraw(100);
    account.withdraw(300);
    account.deposit(500);
    const transaction = account.transactionHistory(6);
    expect(transaction.length).toBe(3);
  });

  it("should have an averageTransaction function", ()=>{
    const account = accountGenerator(8000);
    expect(account.averageTransaction).toBeDefined();
    expect(typeof account.averageTransaction).toBe("function");
  });

  it ("averageTransaction should... work!", ()=>{
    const account = accountGenerator(0);
    account.deposit(1000);
    account.deposit(2000);
    account.withdraw(200);
    account.withdraw(400);
    account.withdraw(10000);
    expect(account.averageTransaction().deposit).toBe(1500);
    expect(account.averageTransaction().withdrawal).toBe(300);
  });

});
