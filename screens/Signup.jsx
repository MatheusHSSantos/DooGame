import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";

import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from '../firebase-config';

//formik
import { Formik } from "formik";

// icons
import { Octicons, Ionicons, Fontisto } from '@expo/vector-icons';

import {
    StyledContainer,
    InnerContainer,
    PageLogo,
    PageTitle,
    StyledFormArea,
    LeftIcon,
    StyledInputLabel,
    StyledTextInput,
    RightIcon,
    StyledButton,
    ButtonText,
    Colors,
    MsgBox,
    Line,
    ExtraView,
    ExtraText,
    TextLink,
    TextLinkContent
} from './../components/styles';
import { View } from "react-native";

//Colors
const { blue, darkLight, brand } = Colors;

// keyboard avoiding view
import KeyBoardAvoidingWrapper from "../components/KeyBoardAvoidingWrapper";
import AppLoader from "../components/AppLoader";

const Signup = ({navigation}) => {
    const [visible, setVisible] = useState(false);

    const [hidePassword, setHidePassword] = useState(true)
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const app = initializeApp(firebaseConfig);

    const auth = getAuth(app);

    const handleCreateAccount = () => {
        setVisible(true);
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            console.log('Account created!')
            const user = userCredential.user;
            console.log(user)
            navigation.navigate('Welcome');
        })
        .catch(error => {
            console.log(error)
        })
    }

    return (
        <KeyBoardAvoidingWrapper>
        <StyledContainer>
            <StatusBar style="dark" />
            <InnerContainer>
                <PageLogo resizeMode="cover" source={require('./../assets/img/doo.png')} />
                <PageTitle>Cadastre-se já!</PageTitle>

                <Formik>
                    <StyledFormArea>

                    <MyTextInput
                        icon="person"
                        placeholder="digite o seu nome"
                        placeholderTextColor={darkLight}
                        onChangeText={(text) =>setNome(text)}
                    />

                    <MyTextInput
                        icon="mail"
                        placeholder="digite o seu email"
                        placeholderTextColor={darkLight}
                        onChangeText={(text) =>setEmail(text)}
                        keyBoardType="email-adress"
                    />

                    <MyTextInput
                        icon="lock"
                        placeholder="digite a sua senha"
                        placeholderTextColor={darkLight}
                        onChangeText={(text) =>setPassword(text)}
                        secureTextEntry={hidePassword}
                        isPassword={true}
                        hidePassword={hidePassword}
                        setHidePassword={setHidePassword}
                    />
                    <MsgBox>...</MsgBox>
                    <AppLoader  visible={visible}/>
                    <StyledButton onPress={handleCreateAccount}>
                        <ButtonText>
                            Continuar
                        </ButtonText>
                    </StyledButton>
                    <Line />

                    <ExtraView>
                        <ExtraText>Já tem uma conta?</ExtraText>
                        <TextLink onPress={() => navigation.navigate('Login')}>
                            <TextLinkContent> Entre!</TextLinkContent>
                        </TextLink>
                    </ExtraView>
                </StyledFormArea>
                </Formik>
            </InnerContainer>
        </StyledContainer>
        </KeyBoardAvoidingWrapper>
    );
}

const MyTextInput = ({ label, icon, isPassword, hidePassword, setHidePassword, ...props }) => {
    return (
        <View>
            <LeftIcon>
                <Octicons name={icon} size={30} color={blue} />
            </LeftIcon>
            <StyledInputLabel>{label}</StyledInputLabel>
            <StyledTextInput {...props} />
            {isPassword && (
                <RightIcon onPress={() => setHidePassword(!hidePassword)}>
                    <Ionicons name={hidePassword ? 'md-eye-off' : 'md-eye'} size={30} color={darkLight} />
                </RightIcon>
            )}
        </View>
    )
}

export default Signup