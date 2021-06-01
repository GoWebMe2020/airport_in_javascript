'use strict';

describe('Plane', () => {
  let plane;
  beforeEach(() => {
    plane = new Plane();
  });
  it('can land at an airport', () => {
    expect(plane.land).not.toBeUndefined()
  });
});