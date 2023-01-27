import React from 'react';
import styled from 'styled-components';

interface ScoreProps {
score: string;
color: string;
}

const StyledScore = styled.div`
    width: 75px;
    height: 75px;
    background-color: ${props => props.color || 'grey'};
`

export const StyledText = styled.p`
    font-size: 30px;
    font-family: sans-serif;
    text-align: center;
`
    
export const Score: React.FC<ScoreProps> = ( { score } ) => {
    return (
        <StyledScore>
            <StyledText>
                {score}
            </StyledText>
        </StyledScore>
    )
};