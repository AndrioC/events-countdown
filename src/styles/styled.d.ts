import 'styled-components'

declare module 'styled-components' {
    export interface DefaultTheme {
            title: string;
        
            color: {
                primary: string;
            
                white: string;
                black: string;
                gray: string;
        
                backgroundedit: string;

                save:  string;
                cancel:  string;
                
                colorone:  string;
                colortwo:  string;
                colorthree:  string;
                colorfour:  string;
                colorfive:  string;
                colorsix:  string;
            }
    }
}