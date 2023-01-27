import React from 'react';
import styled from 'styled-components';
import { StyledText } from './score';

interface NameStringProps {
name: string;
color?: string;
}

const StyledNameString = styled.div`
    margin: 0 50px;
    width: 50%;
    height: 75px;
    background-color: ${props => props.color || 'grey'};
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