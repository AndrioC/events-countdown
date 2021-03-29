import styled from 'styled-components/native'

export const Container = styled.View`
    flex: 1;
`;



export const HeaderContainer = styled.View`
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 40px;
    padding-bottom: 20px;
    margin-bottom: 40px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-bottom-width: 1px;
    border-bottom-color: ${props => props.theme.color.gray};
`;


export const HeaderTitle = styled.View`
`;


export const Title = styled.Text`
    font-family: 'Montserrat-Bold';
    font-size: 33px;
`;


export const HeaderButtons = styled.View`
    flex-direction: row;
`;


export const HeaderButton = styled.View`
    align-items: center;
    justify-content: center;
    height: 50px;
    width: 50px;
    border-width: 2px;
    border-radius: 25px;
    border-color: ${props => props.theme.color.gray};
    margin-left: 10px;
`;



export const BodyContainer = styled.View`
    flex: 1;
`;


export const ContainerSafeAreaView = styled.SafeAreaView`


`;


