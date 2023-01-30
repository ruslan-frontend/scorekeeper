import React from 'react';
import styled from 'styled-components';
import { StyledText } from './score';

interface NameStringProps {
name: string;
color?: string;
}

const StyledNameString = styled.div`
    width: 66%;
    height: 75px;
    background-color: ${props => props.color || 'grey'};
    border: 1px solid red;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const NameString: React.FC<NameStringProps> = ( { name } ) => {
    return (
        <>
            <StyledNameString>
                <StyledText>
                    {name}
                </StyledText>
            </StyledNameString>
        </>
        
    )
};