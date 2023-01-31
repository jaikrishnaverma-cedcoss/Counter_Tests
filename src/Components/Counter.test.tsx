import Counter from './Counter'
import React from 'react'
import {render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
let basicCounter:HTMLButtonElement
let increaseCount:HTMLButtonElement
let decreaseCount:HTMLButtonElement
test('renders learn react link', () => {
    render(<Counter />);
    basicCounter = screen.getByTestId('button2')
   increaseCount = screen.getByTestId('button3')
   decreaseCount = screen.getByTestId('button1')
  expect(basicCounter).toHaveTextContent('1')
  });

  it('should increase count when plus button is clicked', () => {
    expect(basicCounter).toHaveValue(1)
    userEvent.click(increaseCount)
    expect(basicCounter).toHaveValue(2)
  })
  it('should decrease count when minus button is clicked', () => {
    userEvent.click(increaseCount)
    expect(basicCounter).toHaveValue(2)
    userEvent.click(decreaseCount)
    expect(basicCounter).toHaveValue(1)
  })
  it('should not decrease to less than 1', () => {
    expect(basicCounter).toHaveValue(1)
    userEvent.click(decreaseCount)
    expect(basicCounter).toHaveValue(1)
  })