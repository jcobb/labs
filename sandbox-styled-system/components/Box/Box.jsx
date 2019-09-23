import styled from '@emotion/styled';
import {
    color,
    space,
    layout,
    typography,
    flexbox,
    grid,
    background,
    position,
    border,
    shadow,
} from 'styled-system';

const Box = styled.div`
  ${space}
  ${layout}
  ${color}
  ${typography}
  ${flexbox}
  ${grid}
  ${background}
  ${position}
  ${border}
  ${shadow}
  ${props => props.transition ? `transition: ${props.transition};` : ''}
  outline: none;
  &:hover {
    ${props => props._hover ? {...props._hover} : ''}
  }
  &:active {
    ${props => props._active ? {...props._active} : ''}
  }
`;

export default Box;
