import React, { FC } from 'react';
import styled from 'styled-components';

interface FlexProps {
    direction?: 'row' | 'column';
    align?: 'stretch' | 'center';
    justify?: 'stretch' | 'center' | 'space-around';
    margin?: string;
    children?: React.ReactNode;
}

const StyledFlex = styled.div<FlexProps>`
    display: flex;
    flex-direction: ${props => props.direction || 'row'};
    align-items: ${props => props.align || 'stretch'};
    justify-content: ${props => props.justify || 'stretch'};
    margin: ${({margin}) => margin || '0'};
`

export const Flex: FC<FlexProps> = (props: any) => {
    return (
        <StyledFlex {...props} />
    )
};