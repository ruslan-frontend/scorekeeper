import React from 'react';
import styled from 'styled-components';
import { Button } from '../../components/button';
import { PersonLine } from '../../components/person-line';

interface PlayerProps {
}

const StyledImg = styled.img`
    width: 50px;
    height: 50px;
`

export const Player: React.FC<PlayerProps> = () => {
    return (
        <>
            <PersonLine />
            
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