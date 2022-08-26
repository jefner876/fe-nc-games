const { secondsToAge } = require("../utils/seconds-to-age");

describe("secondsToAge()", () => {
  it("should convert undefined just now for optimistic rendering", () => {
    // first test here
    const seconds = undefined;
    const time = secondsToAge(seconds);
    expect(time).toBe("just now");
  });
  it("should convert less than 1 minute to just now", () => {
    // first test here
    const seconds = 2;
    const time = secondsToAge(seconds);
    expect(time).toBe("just now");
  });
  it("should convert 1 minute to 1 min ago", () => {
    // first test here
    const seconds = 60;
    const time = secondsToAge(seconds);
    expect(time).toBe("1 min ago");
  });
  it("should convert 120 seconds to a 2 mins ago", () => {
    // first test here
    const seconds = 120;
    const time = secondsToAge(seconds);
    expect(time).toBe("2 mins ago");
  });

  it("should convert 3661 seconds to 1 hour ago", () => {
    // first test here
    const seconds = 3661;
    const time = secondsToAge(seconds);
    expect(time).toBe("1 hour ago");
  });

  it("should convert 31626061 seconds to 1 month ago", () => {
    // first test here
    const seconds = 3162601;
    const time = secondsToAge(seconds);
    expect(time).toBe("1 month ago");
  });

  it("should convert 31626061 seconds to 1 year ago", () => {
    // first test here
    const seconds = 31626061;
    const time = secondsToAge(seconds);
    expect(time).toBe("1 year ago");
  });
  it("should convert 127702942 seconds 4 years ago", () => {
    // first test here
    const seconds = 127702942;
    const time = secondsToAge(seconds);
    expect(time).toBe("4 years ago");
  });
});
