import React from 'react'
import { Modal } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'


import {
    Container,
    CenteredView,
    ModalView,
    TextInputView,
    TextInput,
    ModalText,
    ModalViewColors,
    CircleObject,
    ModalViewButton,
    SaveButton,
    TextSaveButton,
    CancelButton,
    TextCancelButton
} from './styles'

interface IModalBoxProps{
    description: string;
    title: string;
    countdown: string;
    isVisible: boolean;
    modalVisible(): void;
}

const ModalBox:React.FC<IModalBoxProps> = ({ description, title, countdown, isVisible, modalVisible}) => {

    const colors = [
      {
        id: '1',
        color: '#68AEFF',
      },
      {
        id: '2',
        color: '#E02896',
      },
      {
        id: '3',
        color: '#854DE0',
      },
      {
        id: '4',
        color: '#56C9D3',
      },
      {
        id: '5',
        color: '#CCD2D7',
      },
      {
        id: '6',
        color: '#FE903F',
      },
    ]

    return (
        <Container>
          <Modal
                  animationType="slide"
                  transparent={true}
                  visible={isVisible}
                  onRequestClose={modalVisible}
          >

            <CenteredView>
              <ModalView>
                  <ModalText>{title}</ModalText>
                  <TextInputView>
                    <TextInput>{description}</TextInput>
                    <TextInput>{countdown}</TextInput>
                  </TextInputView>
                  <ModalViewColors>
                    {colors.map((item) => (
                      <CircleObject color={item.color} key={item.id}/>  
                    ))}
                  </ModalViewColors>
                  <ModalViewButton>
                    <SaveButton onPress={modalVisible}>
                      <TextSaveButton>Salvar</TextSaveButton>
                    </SaveButton>
                    <CancelButton onPress={modalVisible}>
                      <TextCancelButton>Cancelar</TextCancelButton>
                    </CancelButton>
                  </ModalViewButton>
              </ModalView>
              </CenteredView>

          </Modal>
        </Container>
    )
}


/* const styles = StyleSheet.create({

    button: {
      borderRadius: 20,
      padding: 10,
      elevation: 2
    },
    buttonOpen: {
      backgroundColor: "#F194FF",
    },
    buttonClose: {
      backgroundColor: "#2196F3",
    },
    textStyle: {
      color: "white",
      fontWeight: "bold",
      textAlign: "center"
    },
    modalText: {
      marginBottom: 15,
      textAlign: "center"
    }
  });
 */
export default ModalBox