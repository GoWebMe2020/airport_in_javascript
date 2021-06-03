'use strict';

describe('Airport', () => {

  let airport;
  let plane;

  beforeEach(() => {
    airport = new Airport();
    plane = jasmine.createSpy('plane', ['land']);
  });

  it('has no planes by default', () => {
    expect(airport.planes()).toEqual([]);
  });

  it('can clear planes for landing', () => {
    airport.clearForLanding(plane);
    expect(airport.planes()).toEqual([plane]);
  });

  it('can clear planes for takeoff', () => {
    airport.clearForLanding(plane);
    airport.clearForTakeOff(plane);
    expect(airport.planes()).toEqual([]);
  });

  it('can check for stormy conditions', () => {
    expect(airport.isStormy()).toBeFalsy();
  })

});

describe('under stormy conditions', () => {
  let airport;
  let plane;

  beforeEach(() => {
    airport = new Airport();
    plane = jasmine.createSpy('plane', ['land']);
  });
  
  it('does not clear planes for takeoff', () => {
    spyOn(airport,'isStormy').and.returnValue(true);
    expect(() => { airport.clearForTakeOff(plane); }).toThrowError('cannot takeoff during storm');
  });
});