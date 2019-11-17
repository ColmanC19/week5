import { Age } from './../src/super.js';

describe("Age", () => {
  test("should correctly multiply the user age by 0.24", () => {
    let age = new Age(10);
    expect(age.years).toEqual(10);
    let mercuryAge = age.mercury();
    expect(mercuryAge).toEqual(2.4);
  });
  test("should correctly multiply the user age by 0.62", () => {
    let age = new Age(10);
    let venusAge = age.venus();
    expect(venusAge).toEqual(6.2);
  });
  test("should correctly multiply the user age by 1.88", () => {
    let age = new Age(10);
    let marsAge = age.mars();
    expect(marsAge).toEqual(18.8);
  });
  test("should correctly multiply the user age by 11.86", () => {
    let age = new Age(10);
    let jupiterAge = age.jupiter();
    expect(jupiterAge).toEqual(118.6);
  });
  // test("should correctly multiply the user age by 1.88", () => {
  //   var age = new Age(10);
  //   expect(this.years).toEqual(18.8);
  // });
  // test("should correctly multiply the user age by 11.86", () => {
  //   var age = new Age(10);
  //   expect(this.years).toEqual(118.6);
  // });
});
