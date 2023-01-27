import React from 'react';
import styled from 'styled-components';
import { StyledText } from './score';

interface NameStringProps {
name?: string;
score?: string;
color?: ;
}

const StyledNameString = styled.div`
    margin: 0 50px;
    width: 50%;
    height: 75px;
    background-color: ${({ color = '#B5B8B1' }) => color};
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