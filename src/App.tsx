import 'react-native-gesture-handler'
import * as React from 'react';
import { StatusBar} from 'react-native'
import { ThemeProvider } from 'styled-components/native'
import { NavigationContainer } from '@react-navigation/native'
import Routes from './routes/index'

import light from './styles/themes/light'

const App:React.FC = () => {
  return (
    <NavigationContainer>
        <ThemeProvider theme={light}>
        <StatusBar backgroundColor={light.color.primary}/>
        <Routes />
    </ThemeProvider>
    </NavigationContainer>
  );
}

export default App