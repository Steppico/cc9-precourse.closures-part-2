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

  it("should have some tests", () => {
    expect(false).toBeTruthy();
  });
});
