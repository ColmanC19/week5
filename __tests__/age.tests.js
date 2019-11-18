import { Age } from './../src/super.js';

describe("Age", () => {
  test("should correctly multiply the user age by 0.24", () => {
    let age = new Age(10);
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
  test("should correctly subtract user age from 77.8", () => {
    let age = new Age(25);
    let lifeExpectancy = age.expectancy();
    expect(lifeExpectancy).toEqual(52.8);
  });
  test("should correctly show the users life expectancy on mercury", () => {
    let age = new Age(10);
    let mercuryExpectancy = age.mercuryExpectancy();
    expect(mercuryExpectancy).toEqual(16.27);
  });
  test("should correctly show the users life expectancy on venus", () => {
    let age = new Age(10);
    let venusExpectancy = age.venusExpectancy();
    expect(venusExpectancy).toEqual(42.1);
  });
  test("should correctly show the users life expectancy on mars", () => {
    let age = new Age(10);
    let marsExpectancy = age.marsExpectancy();
    expect(marsExpectancy).toEqual(127.464);
  });
  test("should correctly show the users life expectancy on jupiter", () => {
    let age = new Age(10);
    let jupiterExpectancy = age.jupiterExpectancy();
    expect(jupiterExpectancy).toEqual(804.108);
  });
});
