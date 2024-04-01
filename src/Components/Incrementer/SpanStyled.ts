import styled, {css} from "styled-components";

type SpanStyledType = {
    isNumber: boolean
    isErrorText: boolean
    turnRed: boolean
}

export const SpanStyled
    = styled.span<SpanStyledType>`
  color: #6fe3ee;
  font-size: 25px;
  ${props => props.isNumber && css<SpanStyledType>`
    font-size: 65px;
  `}
  ${props => props.isErrorText && css<SpanStyledType>`
    font-size: 25px;
    color: rgb(253, 0, 1);
  `}
  ${props => props.turnRed && css<SpanStyledType>`
    font-size: 65px;
    color: rgb(253, 0, 1);
  `}

`