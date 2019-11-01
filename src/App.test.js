import React from 'react';
import App from './App';
import { shallow } from 'enzyme';
import { Header, Section, Footer } from './layout/index';
import './setupTests';

describe('Layout <App/> component', () => {
  let appComponent;
  beforeEach(() => {
    appComponent = shallow(<App />);
  });

  it('renders the Header component.', () => {
    const header = appComponent.find(Header);
    expect(header).toHaveLength(1);
  });

  it('renders the Section component.', () => {
    const section = appComponent.find(Section);
    expect(section).toHaveLength(1);
  });

  it('renders the Footer component.', () => {
    const footer = appComponent.find(Footer);
    expect(footer).toHaveLength(1);
  });

  it('renders three level top nodes.', () => {
    expect(appComponent.children().length).toBe(3);
  });
});