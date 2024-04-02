import styled, {css} from "styled-components";

type GradientWrapperStyledType = {
    inputFieldSet?: boolean
    buttonFieldSet?: boolean
}

export const GradientWrapperStyled
    = styled.div<GradientWrapperStyledType>`
  background-color: #6c6161;
  border-radius: 12px;
  padding: 15px;
  height: 100%;
  display: flex;
  column-gap: 5px;
  flex-direction: column;
  align-items: stretch;
  justify-content: space-between;
  ${props => props.inputFieldSet && css<GradientWrapperStyledType>`
    align-items: center;
    justify-content: center;
  `
  }
  ${props => props.buttonFieldSet && css<GradientWrapperStyledType>`
    justify-content: center;
    align-items: center;
    flex-direction: row;
    gap: 30px;
  `
  }
`