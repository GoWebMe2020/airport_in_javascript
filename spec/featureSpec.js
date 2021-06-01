'use strict';

describe('Feature Test:', () => {
  
  let plane;
  let airport;

  beforeEach(() => {
    plane = new Plane();
    airport = jasmine.createSpyObj('airport', ['clearForLanding']);
  });

  it('planes can be instructed to land at an airport', () => {
    plane.land(airport);
    expect(airport.clearForLanding).toHaveBeenCalledWith(plane);
  });

});