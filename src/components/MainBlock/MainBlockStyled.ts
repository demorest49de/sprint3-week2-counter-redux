import styled, {css} from "styled-components";

type MainBlockStyledType = {
    isSetter?: boolean
    isIncrementer?: boolean
}

export const MainBlockStyled
    = styled.div<MainBlockStyledType>`
  width: 400px;
  height: fit-content;
  border-radius: 15px;
  padding: 4px;
  ${props => props.isSetter && css<MainBlockStyledType>`
    background: linear-gradient(to right, red, purple);
  `
  }
  ${props => props.isIncrementer && css<MainBlockStyledType>`
    background: linear-gradient(to right, greenyellow, blueviolet, dodgerblue);
  `
  }
`