import styled, { css } from 'styled-components/macro'

const ButtonGroup = styled.div`
  ${() => css`
    margin-top: 20px;
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
  `}
`

const ButtonContainer = styled.button`
  ${({ back, disabled }: { back: boolean; disabled: boolean }) => css`
    padding: 5px 10px;
    background-color: ${back ? 'lightgrey' : 'green'};
    font-size: 20px;
    color: ${back ? 'inherit' : 'white'};
    border: 0;
    box-shadow: none;
    border-radius: 5px;
    cursor: ${disabled ? 'not-allowed' : 'pointer'};
    transition: all 0.2s ease-in-out;
    opacity: ${disabled ? '0.5' : '1'};

    &:hover {
      transform: scale(0.9);
    }
    &:active {
      transform: scale(1);
    }
  `}
`

export { ButtonGroup, ButtonContainer }
