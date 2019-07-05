import * as Lib from "Lib";

test("All 1", () => {
  expect(Lib.RegularRequiredFile).toBe("RegularRequiredFile");
});

test("All 2", () => {
  expect(Lib.FuncExample()).toBeGreaterThanOrEqual(0);
});
