import React from 'react';
import styled from 'styled-components';
import Button from '../../components/button';
import { PersonLine } from '../../components/person-line';

interface PlayerProps {
}

const StyledImg = styled.img`
    width: 60px;
    height: 60px;
`

export const Player: React.FC<PlayerProps> = () => {
    return (
        <>
            <PersonLine />
            <PersonLine />
            <PersonLine />
            <PersonLine />
            
            <div>
                <Button 
                    placed='top-left' 
                    size='big' 
                    position="absolute"
                >
                    <StyledImg src="./images/player.svg" alt="" />
                </Button>

                <Button 
                    placed='top-right' 
                    size='big' 
                    position="absolute"
                >
                    <StyledImg src="./images/sort.svg" alt="" />
                </Button>

                <Button 
                    placed='bottom-left'
                    size='big' 
                    position="absolute"
                >
                    <StyledImg src="./images/refresh.svg" alt="" />
                </Button>

                <Button 
                    placed='bottom-right'
                    size='big' 
                    position="absolute"
                >
                    <StyledImg src="./images/list.svg" alt="" />
                </Button>
            </div>
        </>
        
    )
};