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

  it("should have a guess method", ()=>{
    const game = gameGenerator(1);
    expect(game.guess).toBeDefined();
  })

  it("should have a reset method", () => {
    const bound = 16;
    const game = gameGenerator(bound);
    game.reset();
    console.log("mannaiaboia", game.reset());
    expect(game.reset).toBeDefined();
    expect(game.reset).not.toEqual(bound);
    const x = [];
    for (let i = 0; i <= x.length; i++) {

    }
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
    const bound = 100
    const game = gameGenerator(bound)
    console.log("dayum", game.reset)
    game.giveUp();
    spyOn(game.giveUp,"reset")
    expect(game.giveUp.reset).toHaveBeenCalled();
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
