const sum = require("./Sum");

test("adds 1 + 2 to equal 3", () => {
  expect(sum(2, 2)).toBe(4);
});

test("object assignment", () => {
  const data = { one: 1 };
  data["two"] = 2;

  // data = {one: 1, two: 2}
  // toEqual for object
  expect(data).toEqual({ one: 1, two: 2 });
});

test("adding positive number is not zero", () => {
  for (let a = 1; a < 10; a++) {
    for (let b = 1; b < 10; b++) {
      expect(a + b).not.toBe(0);
    }
  }
});

test("null", () => {
  const n = null;

  expect(n).toBeNull();
  expect(n).toBeDefined();
  expect(n).not.toBeUndefined();
  expect(n).not.toBeTruthy();
  expect(n).toBeFalsy();
});

test("adding floating numbers", () => {
  const value = 0.1 + 0.2;

  expect(value).toBeCloseTo(0.3);
});

// test("the data is penaut butter", async () => {
//   const data = await fetchData();
//   expect(data).toBe("penaut butter");
// });
