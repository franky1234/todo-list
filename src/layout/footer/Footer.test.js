import React from 'react';
import { shallow } from 'enzyme';
import '../../setupTests';
import { Footer } from '../index';

describe('layout <Footer /> component', () => {
  let footerComponent;
  beforeEach(() => {
    footerComponent = shallow(<Footer />);
  });

  it('should have the className footer', () => {
    const footerClass = footerComponent.is('.footer');
    expect(footerClass).toBe(true);
  });

  it(`should have the text 'Made by Fr@nklin Flores T.'`, () => {
    const footerText = footerComponent.text();
    expect(footerText).toMatch('Made by Fr@nklin Flores T.');
  });
});