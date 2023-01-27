import React from 'react';
import styled from 'styled-components';
import { Button } from '../../components/button';

interface PlayerProps {

}

export const Player: React.FC<PlayerProps> = () => {
    return (
        <>
            <Button />
            <Button />
            <Button />
            <Button />
        </>
    )
};