import React from 'react';
import styled, {css} from 'styled-components';

export const OptionButton = styled.div`
  /* Size */
  ${props => {
    switch(props.size) {
      case 'small': return css`height: 20px;`;
      case 'medium': return css`height: 30px;`;
      case 'large': return css`height: 50px;`;
      default: return css`height: 20px;`;
    }
  }}

  /* Color */
  ${props => {
    switch(props.variant) {
      case 'active': return css`background-color: #7cba01;`;
      case 'inactive': return css`background-color: #c5e09b;`;
      default: return css`background-color: #c5e09b;`;
    }
  }}

  text-align: center;
  width: auto;
  color: #000;
  margin: 4px;
  border-radius: 4px;
  font-size: 0.9rem;
  cursor: pointer;
`;