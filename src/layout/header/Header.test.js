import React from 'react';
import { shallow } from 'enzyme';
import '../../setupTests';
import logoImage from '../../assets/logo.svg';
import { Header } from '../index';

describe('Layout <Header/> component', () => {
  let headerComponent;
  beforeEach(() => {
    headerComponent = shallow(<Header />)
  });

  it('should have className header', () => {
    const headerClass = headerComponent.is('.header');
    expect(headerClass).toBe(true);
  });

  it('should have show the logo of app.', () => {
    const loadedLogo = headerComponent.find('img').prop('src');
    expect(loadedLogo).toEqual(logoImage);
  });

  it(`should show the content 'Todo list.' inside the span`, () => {
    const spanText = headerComponent.text();
    expect(spanText).toEqual('Todo list.');
  });
})