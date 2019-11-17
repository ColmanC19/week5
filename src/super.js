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
    let years = (this.years*.24);
    return years;
  }

  // Age.prototype.venus = function() {
  //   const venusAge = .62;
  //   let years = this.years*.62;
  //   return years;
  //   }
  // Age.prototype.mars = function() {
  //   const marsAge = 1.88;
  //   let years = this.years*1.88;
  //   return years;
  //   }
  //
  // Age.prototype.jupiter = function() {
  //   const venusAge = 11.86;
  //   let years = this.years*11.86;
  //   return years;
  //   }
  //
  // Age.prototype.expectancy = function() {
  //   if (this.years > 1){
  //     (yearsOld-expectancy);
  //   }
  //  }
};
