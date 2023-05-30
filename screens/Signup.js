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

const Signup = ({navigation}) => {
    const [hidePassword, setHidePassword] = useState(true)

    return (
        <KeyBoardAvoidingWrapper>
        <StyledContainer>
            <StatusBar style="dark" />
            <InnerContainer>
                <PageLogo resizeMode="cover" source={require('./../assets/img/doo.png')} />
                <PageTitle>Cadastre-se já!</PageTitle>

                <Formik
                    initialValues={{ nome: '', email: '', senha: '', confirmsenha: '' }}
                    onSubmit={(values) => {
                        console.log(values);
                        navigation.navigate('Welcome')
                    }}
                >{({ handleChange, handleBlur, handleSubmit, values }) => (<StyledFormArea>

                    <MyTextInput
                        icon="person"
                        placeholder="digite o seu nome"
                        placeholderTextColor={darkLight}
                        onChangeText={handleChange('nome')}
                        onBlur={handleBlur('nome')}
                        value={values.nome}
                    />

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

                    <MyTextInput
                        icon="lock"
                        placeholder="confirme a sua senha"
                        placeholderTextColor={darkLight}
                        onChangeText={handleChange('confirmsenha')}
                        onBlur={handleBlur('confirmsenha')}
                        value={values.confirmsenha}
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

                    <ExtraView>
                        <ExtraText>Já tem uma conta?</ExtraText>
                        <TextLink onPress={() => navigation.navigate('Login')}>
                            <TextLinkContent> Entre!</TextLinkContent>
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

export default Signup