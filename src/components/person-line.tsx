import React, { useState } from 'react';
import styled from 'styled-components';
import { IPlayer } from '../interfaces';
import Button from './button';
import { Flex } from './flex';
import { NameString } from './name-string';
import { Score } from './score';

interface PersonLineProps {
    item: IPlayer
    data: IPlayer[]
    setData?: any
}

const StyledPersonLine = styled.div`
    width: calc(100% - 100px);
    margin: 0 auto;
    `

export const PersonLine: React.FC<PersonLineProps> = ({item, data, setData}) => {

const changeScore = (num: number) => {
    setData(data.map((i: IPlayer) => i.id === item.id ? {...i, score: i.score+num} : i ))
}

    return (
        <StyledPersonLine>
            <Flex 
                margin='0 50px' 
                justify='space-around' 
                align='center'>

                <NameString 
                    color='#FF0000' 
                    name={item.name}
                />
                <Score 
                    color='' 
                    score={item.score}
                />
                <Button 
                    size='medium' 
                    color='#FF0000'
                    onClick={() => changeScore(-1)}
                >-</Button>
                <Button 
                    size='medium' 
                    color='#FF0000'
                    onClick={() => changeScore(1)}
                >+</Button>
            </Flex>
        </StyledPersonLine>
        
    )
};