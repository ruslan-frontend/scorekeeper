import React from 'react';
import styled from 'styled-components';

interface IButtonProps {
    position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
    color?: string;
    size?: 'small' | 'medium' | 'big';
    text?: string;
}

export const Button = styled.button<IButtonProps>`
    position: absolute;
    background-color: ${({ color = '#B5B8B1' }) => color};
    width: ${({ size }) => size};
    height: ${({ size }) => size};

    ${({ size = 'big' }) => {
    switch (size) {
        case 'big':
            return `width: 100px; height: 50%;`;
        case 'medium':
            return `width: 50px; height: 50px;`;
        case 'small':
            return `width: 25%; height: 25%;`;
        default:
            return '';
        }
    }}

    ${({ position }) => {
        switch (position) {
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

    border: none;

    /* Эффект нажатия */
    transform: translate(0, 0);
    &:active {
        transform: translate(1px, 1px);
    }
    /* Тень при нажатии */
    box-shadow: 2px 2px 2px #d9d9d9;

      /* Текст внутри кнопки */
    content: ${({ text }) => text};
    text-align: center;
    font-size: 20px;
    padding-top: 10px;
`;