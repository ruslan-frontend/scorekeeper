import React from 'react';
import styled from 'styled-components';

interface PersonLineProps {

}

const StyledPersonLine = styled.div`
    margin: 0 50px;
    /* background-color: grey; */
    width: 744px;
    height: 25%;
`
    
export const PersonLine: React.FC<PersonLineProps> = () => {
    return (
        <StyledPersonLine />
    )
};