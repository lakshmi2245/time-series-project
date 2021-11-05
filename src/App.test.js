import { render, screen } from '@testing-library/react';
import { shallow } from 'enzyme'
import App from './App';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

// describe('Addition', () => {
//   it('It adds 2 and 2, result is 4', () => {
//     expect(2 + 2).toBe(4);
//   })

  describe('Counter', () => {
    it('It starts from 0', () => {
      const wrapper = shallow(<App/>)
      const text = wrapper.find('p').text();
      expect(text).toEqual('Count: 0')
    })
  })
// })
