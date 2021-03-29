import styled from 'styled-components/native'


interface IWrapperProps{
    index: number;
    size: number;
}

interface ICardWrapperProps{
    color: string;
}

export const Container = styled.View`
    flex: 1;
`;

export const Wrapper = styled.View<IWrapperProps>`
    padding-left: 20px;
    padding-right: 20px;
    margin-bottom: ${props => props.index === (props.size - 1) ? 30 : 10}px;
`;

export const CardWrapper = styled.View<ICardWrapperProps>`
    background: ${props => props.color};
    border-radius: 25px;
    padding-top: 20px;
    flex-direction: row;
    overflow: hidden;
    height: 96px;
    justify-content: space-between;
    padding-left: 20px;
`;

export const CardInfo = styled.View`
    justify-content: space-between;
`;

export const CardTitle = styled.Text`
    font-family: 'Montserrat-Bold';
    font-size: 15px;
    color: #fff;
`;


export const CardCountdown = styled.Text`
    font-family: 'Montserrat-Medium';
    font-size: 15px;
    margin-bottom: 15px;
    color: #fff;
`;

export const CardDeleteButton = styled.View`
    margin-right: 10px;
`;