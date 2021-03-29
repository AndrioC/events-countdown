import React, { useState } from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import FeatherIcon from 'react-native-vector-icons/Feather'

import ModalBox from '../ModalBox'

import {
    Container,
    Wrapper,
    CardWrapper,
    CardInfo,
    CardTitle,
    CardCountdown,
    CardDeleteButton,
} from './styles'

interface ICardProps{
    color: string;
    title: string;
    countdown: string;
    index: number;
    size: number;
}

const Card:React.FC<ICardProps> = ({ color, title, countdown, index, size}) => {

    const [modalVisible, setModalVisible] = useState(false)

    function setModal() {
        setModalVisible(!modalVisible);
    }
  

    return (
        <Container>
            <Wrapper index={index} size={size}>
                <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>                
                    <CardWrapper color={color}>
                        <CardInfo>
                            <CardTitle>{title}</CardTitle>
                            <CardCountdown>{countdown}</CardCountdown>
                        </CardInfo>
                        <TouchableOpacity>
                            <CardDeleteButton>
                                <FeatherIcon name="trash" size={18} color="#fff"/>
                            </CardDeleteButton>
                        </TouchableOpacity>
                    </CardWrapper>
                </TouchableOpacity>
            </Wrapper>
        
            <ModalBox 
                description="Aniversário"
                title="Editar evento"
                countdown="5 meses, 14 dias, 6 horas"
                isVisible={modalVisible}
                modalVisible={setModal}
            />
        </Container>
    )
}

export default Card