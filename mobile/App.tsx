import React from 'react';
import {AppLoading} from 'expo';
import {StatusBar} from "react-native";

import {Roboto_400Regular, Roboto_500Medium} from '@expo-google-fonts/roboto';
import {Ubuntu_700Bold, useFonts} from '@expo-google-fonts/ubuntu';

import Routes from "./src/routes";

// View - Caixa, container
// Display: flex por natureza
// Não tem erança e nem cascata de estilos
// <> </> - Fragment, não ocupa espaço na tela
export default function App() {
    // Carregando as fontes do google
    const [fontsLoaded] = useFonts({
        Roboto_400Regular,
        Roboto_500Medium,
        Ubuntu_700Bold
    });

    // Enquando não carregar as fontes
    if (!fontsLoaded) {
        return <AppLoading/>
    }

    return (
        <>
            <StatusBar
                barStyle="dark-content"
                backgroundColor="transparent"
                translucent
            />
            <Routes/>
        </>
    );
}
