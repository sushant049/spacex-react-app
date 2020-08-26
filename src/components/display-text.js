import React from 'react';
import styled, { css } from 'styled-components';

export const DisplayText = styled.span`
    /* Size */
    ${props => {
        switch (props.size) {
            case 'inherit': return css`font-size: inherit;`;
            case 'xsmall': return css`font-size: 0.675rem;`;
            case 'small': return css`font-size: 0.85rem;`;
            case 'medium': return css`font-size: 1.2rem;`;
            case 'large': return css`font-size: 1.5rem;`;
            case 'xlarge': return css`font-size: 2rem;`;
            default:
                return css`font-size: 0.85rem;`;
        }
    }}

    /* Weight */
    ${props => {
        switch (props.variant) {
            case 'inherit': return css`font-weight: inherit;`;
            case 'strong': return css`font-weight: 600;`;
            case 'subdued': return css`font-weight: 200;`;
            case 'regular': default:
                return css`font-weight: 400;`;
        }
    }}

    /* Color */
    ${props => {
        switch (props.color) {
            case 'inherit': return css`color: inherit;`;
            case 'light': return css`color: #777;`;
            case 'primary': return css`color: #333;`;
            case 'secondary': default:
                return css`color: ${typeof props.color === 'string' ? props.color : 'black'};`;
        }
    }}

    /* alignment */
    ${props => {
        switch (props.align) {
            case 'center': return css`text-align: center;`;
            case 'left': return css`text-align: left;`;
            case 'right': return css`text-align:right`;
        }
    }}
`;

export const Header = styled(props => <div><DisplayText size="large" variant="strong" {...props} /></div>)``;