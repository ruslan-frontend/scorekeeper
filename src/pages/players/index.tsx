import React from 'react';
import styled from 'styled-components';
import { Button } from '../../components/button';
import { Flex } from '../../components/flex';
import { NameString } from '../../components/name-string';
import { PersonLine } from '../../components/person-line';
import { Score } from '../../components/score';

interface PlayerProps {

}

const StyledImg = styled.img`
    width: 50px;
    height: 50px;
`


export const Player: React.FC<PlayerProps> = () => {
    return (
        <>
            <Flex 
                margin='0 50px' 
                justify='space-around' 
                align='center'
            >
                <NameString 
                    color='#FF0000' 
                    name='Ruslan'
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
            
            <div>
                <Button position="top-left">
                    <StyledImg src="./images/player.svg" alt="" />
                </Button>
                <Button position="top-right">
                    <StyledImg src="./images/sort.svg" alt="" />
                </Button>
                <Button position="bottom-left">
                    <StyledImg src="./images/refresh.svg" alt="" />
                </Button>
                <Button position="bottom-right">
                    <StyledImg src="./images/list.svg" alt="" />
                </Button>
            </div>
        </>
        
    )
};