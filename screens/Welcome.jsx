import {
    StyledContainer,
    PageTitle,
    StyledFormArea,
    StyledButton,
    ButtonText,
    WelcomeLogo,
    WelcomeContainer,
    WelcomeTitleView,
    SubTitle,
    WelcomeTextView,
    WelcomeText
} from './../components/styles';

const Welcome = ({navigation}) => {

    return (
        <StyledContainer>
            <WelcomeContainer>
                <WelcomeTitleView>
                    <WelcomeLogo resizeMode="cover" source={require('./../assets/img/doo.png')} />
                    <PageTitle welcome={true}>Olá eu sou o Doo! O Pinguim</PageTitle>
                </WelcomeTitleView>
                <WelcomeTextView>
                    <SubTitle welcome={true}>Objetivo</SubTitle>
                    <WelcomeText>Esse aplicativo tem como principal objetivo fornecer uma plataforma de entretenimento e jogos que ajudem crianças
                    a desenvolverem habilidades importantes para o seu dia a dia.</WelcomeText>
                    <SubTitle welcome={true}>Público-Alvo</SubTitle>
                    <WelcomeText>Todas as crianças</WelcomeText>
                    <SubTitle welcome={true}>Custo</SubTitle>
                    <WelcomeText>100% gratuito</WelcomeText>
                </WelcomeTextView>
                <StyledFormArea>
                    <StyledButton>
                        <ButtonText onPress={() => navigation.navigate("GameList")}>
                            Continuar
                        </ButtonText>
                    </StyledButton>
                </StyledFormArea>
            </WelcomeContainer>
        </StyledContainer>
    );
}

export default Welcome