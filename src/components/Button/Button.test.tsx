import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Button from './Button'

const ButtonText = 'Submit'
const spy = jest.fn()

describe('Button ', () => {
  afterEach(() => {
    jest.clearAllMocks()
  })
  it('should render the text children', () => {
    render(<Button type="button">{ButtonText}</Button>)

    screen.getByText(ButtonText)
  })
  it('should trigger the onClick event', () => {
    render(
      <Button type="button" onClick={spy}>
        {ButtonText}
      </Button>
    )

    userEvent.click(screen.getByText(ButtonText))

    expect(spy).toHaveBeenCalled()
  })
  it('should render the button disabled', () => {
    render(
      <Button type="button" disabled>
        {ButtonText}
      </Button>
    )

    expect(screen.getByText(ButtonText)).toHaveAttribute('disabled')
  })
  it('should render the button disabled', () => {
    render(
      <Button type="button" disabled>
        {ButtonText}
      </Button>
    )

    expect(screen.getByText(ButtonText)).toHaveAttribute('disabled')
  })
  it(`shouldn't  trigger the onClick event if the button is disabled`, () => {
    render(
      <Button type="button" onClick={spy} disabled>
        {ButtonText}
      </Button>
    )

    userEvent.click(screen.getByText(ButtonText))

    expect(spy).not.toHaveBeenCalled()
  })
})
