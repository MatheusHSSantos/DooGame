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

const Login = ({ navigation }) => {
    const [visible, setVisible] = useState(false);

    const [hidePassword, setHidePassword] = useState(true)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);

    const handleSignIn = () => {
        setVisible(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                console.log('Signed in!')
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
                    <PageTitle>Entre já!</PageTitle>

                    <Formik>
                        <StyledFormArea>

                            <MyTextInput
                                icon="mail"
                                placeholder="digite o seu email"
                                placeholderTextColor={darkLight}
                                onChangeText={(text) => setEmail(text)}
                                keyBoardType="email-adress"
                            />

                            <MyTextInput
                                icon="lock"
                                placeholder="digite a sua senha"
                                placeholderTextColor={darkLight}
                                onChangeText={(text) => setPassword(text)}
                                secureTextEntry={hidePassword}
                                isPassword={true}
                                hidePassword={hidePassword}
                                setHidePassword={setHidePassword}
                            />
                            <MsgBox>...</MsgBox>
                            <StyledButton >
                            <AppLoader visible={visible}/>
                                <ButtonText onPress={handleSignIn}>
                                    Continuar
                                </ButtonText>
                            </StyledButton>
                            <Line />
                            <ExtraView>
                                <ExtraText>Não tem conta?</ExtraText>
                                <TextLink onPress={() => navigation.navigate("Signup")}>
                                    <TextLinkContent> Cadastre!</TextLinkContent>
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

export default Login