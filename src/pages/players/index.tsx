import userEvent from '@testing-library/user-event';
import React, { useState } from 'react';
import styled from 'styled-components';
import Button from '../../components/button';
import { PersonLine } from '../../components/person-line';

interface PlayerProps {
}


const StyledImg = styled.img`
    width: 60px;
    height: 60px;
`

export const Players: React.FC<PlayerProps> = () => {

const [data, setData] = useState([{id: 1, name: 'user1', score: 0},{id: 2, name: 'user2', score: 0},{id: 3, name: 'user3', score: 0},{id: 4, name: 'user4', score: 0}]);

const refreshScore = () => {
    setData(data.map((item) => {
        item.score = 0;
        return item
    }))
}


    return (
        <>
            {data.map(
                (item) => (
                    <PersonLine
                    key={item.id}
                    item={item}
                    data={data}
                    setData={setData}
                    />
                )
            )}
            
            
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
                    onClick={refreshScore}
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