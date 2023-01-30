import React from 'react';
import styled from 'styled-components';

interface ButtonProps {
    position?: string;
    bg?: string;
    children?: any;
    color?: string;
    size: 'small' | 'medium' | 'big';
    placed?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
    onClick?: () => void;
}

const StyledButton = styled.button<ButtonProps>`
    position: ${props => props.position || 'static'};
    background-color: ${props => props.bg || 'none'};
    font-size: ${props => props.size || '1rem'};
    width: ${({ size }) => size};
    height: ${({ size }) => size};
    font-size: 30px;

    ${({ size = 'big' }) => {
    switch (size) {
        case 'big':
            return `width: 100px; height: 50%;`;
        case 'medium':
            return `width: 75px; height: 75px;`;
        case 'small':
            return `width: 25%; height: 25%;`;
        default:
            return '';
        }
    }}

    ${({ placed }) => {
        switch (placed) {
        case 'top-left':
            return `top: 0; left: 0;`;
        case 'top-right':
            return `top: 0; right: 0;`;
        case 'bottom-left':
            return `bottom: 0; left: 0;`;
        case 'bottom-right':
            return `bottom: 0; right: 0;`;
        default:
            return '';
        }
    }}

    border: 1 solid black;
`;

const Button: React.FC<ButtonProps> = (props) => {
    return (
        <StyledButton {...props}>
            {props.children}
        </StyledButton>
    )
}

export default Button;