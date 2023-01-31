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

  test('should increase count when plus button is clicked', () => {
    expect(basicCounter).toHaveTextContent("1")
    userEvent.click(increaseCount)
    expect(basicCounter).toHaveTextContent("2")
  })
  test('should decrease count when minus button is clicked', () => {
    userEvent.click(increaseCount)
    expect(basicCounter).toHaveTextContent("2")
    userEvent.click(decreaseCount)
    expect(basicCounter).toHaveTextContent("1")
  })
  test('should not decrease to less than 1', () => {
    expect(basicCounter).toHaveTextContent("1")
    userEvent.click(decreaseCount)
    expect(basicCounter).toHaveTextContent("1")
  })