import React, { useState } from 'react'


import FeatherIcon from 'react-native-vector-icons/Feather'
import { TouchableOpacity } from 'react-native-gesture-handler'

import { ScrollView } from 'react-native'
import {
    Container,
    HeaderContainer,
    HeaderTitle,
    Title,
    HeaderButtons,
    HeaderButton,
    BodyContainer,
    ContainerSafeAreaView,
} from './styles'


import Card from '../../components/Card'
import ModalBox from '../../components/ModalBox'

import data from '../../assets/data'


const Home:React.FC = () => {

    const [modalVisible, setModalVisible] = useState(false)

    function setModal() {
        setModalVisible(!modalVisible);
    }

    return (
        <Container>
            <HeaderContainer>
                <HeaderTitle>
                    <Title>Eventos</Title>
                </HeaderTitle>
                <HeaderButtons>
                    <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
                        <HeaderButton>
                            <FeatherIcon name="plus" size={24} />
                        </HeaderButton>   
                    </TouchableOpacity>  
                    <TouchableOpacity>
                        <HeaderButton>
                            <FeatherIcon name="list" size={24} />
                        </HeaderButton>
                    </TouchableOpacity>
                </HeaderButtons>
            </HeaderContainer>

            <BodyContainer>
                <ScrollView contentInsetAdjustmentBehavior="automatic" showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}>
                    <ContainerSafeAreaView>
                        {data.map((item, index) => (
                            <Card 
                            key={item.id}
                            color={item.color}
                            title={item.title}
                            countdown={item.countdown}
                            index={index}
                            size={data.length}
                        />
                        ))}

                    </ContainerSafeAreaView>
                </ScrollView>

                <ModalBox 
                    description="Adicionar novo evento"
                    title="Novo evento"
                    countdown="Data final"
                    isVisible={modalVisible}
                    modalVisible={setModal}
                />   
            </BodyContainer>

            

            
        </Container>

        
    )
}

export default Home