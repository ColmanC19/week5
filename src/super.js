export class Age {
  constructor(years) {
    this.years = years;
    // this.mercury = mercury;
    // this.venus = venus;
    // this.mars = mars;
    // this.jupiter = jupiter;
   }
  // }
  // const yearsOld = 0;
  // const expectancy = 77;

  mercury() {
    const mercuryAge = .24;
    let years = (this.years*mercuryAge);
    return years;
  }

  venus() {
    const venusAge = .62;
    let years = (this.years*venusAge);
    return years;
  }

  mars() {
    const marsAge = 1.88;
    let years = (this.years*marsAge);
    return parseFloat(years.toFixed(1));
  }

  jupiter() {
    const jupiterAge = 11.86;
    let years = (this.years*jupiterAge);
    return parseFloat(years.toFixed(2));
  }

  expectancy() {
    const lifeExpectancy = 77.8;
    let years = (lifeExpectancy-this.years);
    return parseFloat(years.toFixed(1));
  }

  mercuryExpectancy() {
    const lifeExpectancy = 18.67;
    let years = (lifeExpectancy - this.mercury());
    return parseFloat(years.toFixed(2));
  }

  venusExpectancy() {
    const lifeExpectancy = 48.3;
    let years = (lifeExpectancy - this.venus());
    return parseFloat(years.toFixed(2));
  }

  marsExpectancy() {
    const lifeExpectancy = 146.264;
    let years = (lifeExpectancy - this.mars());
    return parseFloat(years.toFixed(3));
  }

  jupiterExpectancy() {
    const lifeExpectancy = 922.708;
    let years = (lifeExpectancy - this.jupiter());
    return parseFloat(years.toFixed(3));
  }

};
