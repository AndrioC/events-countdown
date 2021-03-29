import styled from 'styled-components/native'


interface ICircleObjectProps {
    color: string;
}

export const Container = styled.View`
    flex: 1;
`;



export const CenteredView = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    margin-top: 22px;
`;


export const ModalView = styled.View`
    margin: 20px;
    background-color: #fff;
    border-radius: 20px;
    padding-left: 35px;
    padding-right: 35px;
    align-items: center;
    width: 339px;
    height: 384px;
`;


export const TextInputView = styled.View`


`;


export const TextInput = styled.TextInput`
    width: 296px;
    height: 48px;
    border-radius: 15px;
    border-width: 1px;
    border-color: ${props => props.theme.color.gray};
    color: #A19F9F;
    padding-left: 18px;
    font-size: 18px;
    font-family: 'Montserrat-Medium';
    margin-bottom: 10px;
`;



export const ModalText = styled.Text`
    text-align: center;
    font-size: 24px;
    font-family: 'Montserrat-Regular';
    margin-top: 13px;
    margin-bottom: 24px;
`;

export const ModalViewColors = styled.View`
    flex-direction: row;
    padding-left: 21px;
    align-items: center;
    justify-content: center;
    margin-top: 45px;
`;

export const CircleObject = styled.View<ICircleObjectProps>`
    background-color: ${props => props.color};
    width: 40px;
    height: 40px;
    border-radius: 20px;
    margin-left: 10px;
`;

export const ModalViewButton = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-top: 75px;
`;


export const SaveButton = styled.Pressable`
    
`;


export const TextSaveButton = styled.Text`
    color: #1C4EAF;
    font-size: 18px;
    font-family: 'Montserrat-Medium';
`;


export const CancelButton = styled.Pressable`
    margin-left: 72px;
`;


export const TextCancelButton = styled.Text`
    color: #CE3E3E;
    font-size: 18px;
    font-family: 'Montserrat-Medium';
`;

