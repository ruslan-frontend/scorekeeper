import React from 'react';
import styled from 'styled-components';
import Button from './button';
import { Flex } from './flex';
import { NameString } from './name-string';
import { Score } from './score';

interface PersonLineProps {
}

const StyledPersonLine = styled.div`
    width: calc(100% - 100px);
    margin: 0 auto;

`

export const PersonLine: React.FC<PersonLineProps> = () => {
    return (
        <StyledPersonLine>
            <Flex 
                margin='0 50px' 
                justify='space-around' 
                align='center'>

                <NameString 
                    color='#FF0000' 
                    name='ruslan'
                />
                <Score 
                    color='#FF0000' 
                    score='123'
                />
                <Button 
                    size='medium' 
                    color='#FF0000'
                />
                <Button 
                    size='medium' 
                    color='#FF0000'
                />
            </Flex>
        </StyledPersonLine>
        
    )
};