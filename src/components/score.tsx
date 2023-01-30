import React from 'react';
import styled from 'styled-components';

interface ScoreProps {
score: number;
color: string;
}

const StyledScore = styled.div`
    width: 75px;
    height: 75px;
    background-color: ${props => props.color || props.theme.colors.secondPlayer};
    border: 1px solid red;
`

export const StyledText = styled.p`
    font-size: 30px;
    font-family: sans-serif;
    text-align: center;
`
    
export const Score: React.FC<ScoreProps> = ( { color, score } ) => {
    return (
        <StyledScore color={color}>
            <StyledText>
                {score}
            </StyledText>
        </StyledScore>
    )
};