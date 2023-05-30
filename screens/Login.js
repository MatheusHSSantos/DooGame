import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";

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

const Login = ({navigation}) => {
    const [hidePassword, setHidePassword] = useState(true)

    return (
        <KeyBoardAvoidingWrapper>
            <StyledContainer>
                <StatusBar style="dark" />
                <InnerContainer>
                    <PageLogo resizeMode="cover" source={require('./../assets/img/doo.png')} />
                    <PageTitle>Entre já!</PageTitle>

                    <Formik
                        initialValues={{ email: '', senha: '' }}
                        onSubmit={(values) => {
                            console.log(values);
                            navigation.navigate("Welcome");
                        }}
                    >{({ handleChange, handleBlur, handleSubmit, values }) => (<StyledFormArea>

                        <MyTextInput
                            icon="mail"
                            placeholder="digite o seu email"
                            placeholderTextColor={darkLight}
                            onChangeText={handleChange('email')}
                            onBlur={handleBlur('email')}
                            value={values.email}
                            keyBoardType="email-adress"
                        />

                        <MyTextInput
                            icon="lock"
                            placeholder="digite a sua senha"
                            placeholderTextColor={darkLight}
                            onChangeText={handleChange('senha')}
                            onBlur={handleBlur('senha')}
                            value={values.senha}
                            secureTextEntry={hidePassword}
                            isPassword={true}
                            hidePassword={hidePassword}
                            setHidePassword={setHidePassword}
                        />
                        <MsgBox>...</MsgBox>
                        <StyledButton onPress={handleSubmit}>
                            <ButtonText>
                                Continuar
                            </ButtonText>
                        </StyledButton>
                        <Line />
                        <StyledButton google={true} onPress={handleSubmit}>
                            <Fontisto name="google" color={brand} size={25} />
                            <ButtonText google={true}>
                                Conecte-se com o Google
                            </ButtonText>
                        </StyledButton>
                        <ExtraView>      
                            <ExtraText>Não tem conta?</ExtraText>
                            <TextLink onPress={() => navigation.navigate("Signup")}>
                                <TextLinkContent> Cadastre!</TextLinkContent>
                            </TextLink>
                        </ExtraView>

                    </StyledFormArea>)}

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