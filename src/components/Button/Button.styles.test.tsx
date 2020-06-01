import React from 'react'
import { render } from '@testing-library/react'
import { ButtonContainer } from './Button.styles'
import 'jest-styled-components'

describe('ButtonContainer', () => {
  it('has default styles', () => {
    const { container } = render(<ButtonContainer />)

    expect(container.firstChild).toMatchSnapshot()
    expect(container.firstChild).toHaveStyleRule('transform', 'scale(0.9)', {
      modifier: ':hover',
    })
    expect(container.firstChild).toHaveStyleRule('transform', 'scale(1)', {
      modifier: ':active',
    })
  })

  it('should render diferents styles with "back" prop', () => {
    const { container, rerender } = render(<ButtonContainer />)

    expect(container.firstChild).toHaveStyleRule('background-color', 'green')

    rerender(<ButtonContainer back />)

    expect(container.firstChild).toHaveStyleRule(
      'background-color',
      'lightgrey'
    )
  })

  it('should render diferents styles with "back" prop', () => {
    const { container, rerender } = render(<ButtonContainer />)

    expect(container.firstChild).toHaveStyleRule('cursor', 'pointer')
    expect(container.firstChild).toHaveStyleRule('opacity', '1')

    rerender(<ButtonContainer disabled />)

    expect(container.firstChild).toHaveStyleRule('cursor', 'not-allowed')
    expect(container.firstChild).toHaveStyleRule('opacity', '0.5')
  })
})
