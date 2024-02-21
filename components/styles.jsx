import styled from 'styled-components';
import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';

const StatusBarHeight = Constants.StatusBarHeight;

//colors
export const Colors = {
    primary: "#8265F8",
    blue: "#80D5FA",
    tertiary: "#ffffff",
    black: "#000000",
    darkLight: "#7B6B6B",
    brand: "#ffffff",
    green: "#10B981",
    red: "#EF4444",
    link: "#00068B"
};

const { primary, blue, tertiary, black, darkLight, brand, green, red, link } = Colors;

export const StyledContainer = styled.View`
    flex: 1;
    padding: 25px;
    background-color: ${primary};
`

export const InnerContainer = styled.View`
    flex: 1;
    width: 100%;
    align-items: center;
`;

export const ListContainer = styled.View`
    flex: 1;
    flex-direction: row;
    flex-wrap: wrap;
`;

export const WelcomeContainer = styled.View`
    flex: 1;
    width: 99%;
    margin-left: 3px;
    align-items: center;
    background-color: ${tertiary};
    border-radius: 50px;
`;

export const PageLogo = styled.Image`
    width: 140px;
    height: 140px;
`;

export const MemoryCards = styled.Image`
    width: 60px;
    height: 60px;
`;

export const WelcomeLogo = styled.Image`
    width: 96px;
    height: 78px;
    margin-left: 300px;
    margin-top: -50px;
    justify-content: center;
    align-items: center;
`;

export const ListLogo = styled.Image`
    width: 140px;
    height: 140px;
`;

export const PageTitle = styled.Text`
    font-size: 31px;
    font-family: "MontserratBold";
    text-align: center;
    color: ${brand};
    padding: 10px;

    ${(props) => props.welcome && `
        margin-bottom: 35px;
        font-weight: normal;
        font-family: "MontserratBold";
        color: ${black};
        justify-content: center;
        align-items: center;
        margin-top: 35px;
    `}

    ${(props) => props.list && `
    margin-bottom: 35px;
    font-family: "MontserratBold";
    color: ${tertiary};
    justify-content: center;
    align-items: center;
    margin-top: 35px;
`}
`;

export const SubTitle = styled.Text`
    font-size: 35px;
    font-family: "MontserratRegular";
    margin-bottom: 20px;
    letter-spacing: 1px;
    font-weight: bold;
    color: ${brand};

    ${(props) => props.welcome && `
        margin-bottom: 25px;
        margin-left: 120px;
        justify-content: center;
        align-items: center;
        font-weight: normal;
        font-family: "MontserratRegular";
        color: ${black};
    `}
`;

export const WelcomeText = styled.Text`
    font-size: 21px;
    font-family: "MontserratRegular";
    margin-bottom: 10px;
    margin-left: 80px;
    margin-right: -30px;
    justify-content: center;
    align-items: center;
    color: ${black};
`;



export const StyledFormArea = styled.View`
    width: 90%;
`;

export const StyledTextInput = styled.TextInput`
    background-color: ${tertiary}
    padding: 15px;
    padding-left: 55px;
    padding-right: 55px;
    border-radius: 5px;
    font-size: 16px;
    font-family: "MontserratRegular";
    height: 60px;
    margin-bottom: 5px;
    margin-vertical: 3px;
    color: ${darkLight};
`;

export const StyledInputLabel = styled.Text`
    color: ${tertiary};
    font-size: 13px;
    text-align: left;
`;

export const LeftIcon = styled.View`
    left: 15px;
    top: 38px;
    position: absolute;
    z-index: 1;
`;

export const RightIcon = styled.TouchableOpacity`
    right: 15px;
    top: 38px;
    position: absolute;
    z-index: 1;
`;

export const StyledButton = styled.TouchableOpacity`
   padding: 15px;
   background-color: ${blue};
   justify-content: center;
   align-items: center;
   border-radius: 50px;
   margin-vertical: 5px;
   height: 60px;

   ${(props) => props.google == true && `
     background-color: ${green};
     flex-direction: row;
     justify-content: center;
   `}
`;

export const ButtonText = styled.Text`
    color: ${brand};
    font-size: 16px;
    font-family: "MontserratBold";

    ${(props) => props.google == true && `
     padding: 5px;
     font-family: "MontserratBold";
   `}
`;

export const MsgBox = styled.Text`
    text-align: center;
    font-size: 13px;
`;

export const Line = styled.View`
    height: 1px;
    width: 100%;
    background-color: ${tertiary};
    margin-vertical: 10px;
`;

export const ExtraView = styled.View`
    justify-content: center;
    flex-direction: row;
    align-items: center;
    padding: 10px;
`;

export const ExtraGameListView = styled.View`
    justify-content: center;
    flex-direction: row;
    align-items: center;
    padding: 40px;
`;

export const WelcomeTitleView = styled.View`
    justify-content: center;
    flex-direction: row;
    align-items: center;
    margin-right: 100px;
`;

export const WelcomeTextView = styled.View`
    width: 100%;
    justify-content: center;
    align-items: center;
    margin-right: 100px;
`;

export const ListTitleView = styled.View`
    justify-content: center;
    flex-direction: row;
    align-items: center;
    margin-right: -10px;
`;

export const ListTextView = styled.View`
    width: 100%;
    justify-content: center;
    align-items: center;
    margin-right: 100px;
`;

export const ExtraText = styled.Text`
    justify-content: center;
    align-content: center;
    color: ${tertiary};
    font-size: 20px;
    font-family: "MontserratRegular";
`;

export const TextLink = styled.Text`
    justify-content: center;
    align-items: center;
`;

export const TextLinkContent = styled.Text`
    color: ${link};
    font-size: 20px;
    font-family: "MontserratRegular";
`;

export const ListSquare = styled.View`
    margin-top: 20px;
    margin-bottom: 20px;
    margin-left: 30px;
    width: 140px;
    height: 140px;
    border-radius: 21px;
    background-color: ${tertiary};
`;

export const GameListCardLogo = styled.Image`
    width: 140px;
    height: 140px;
    margin-right: 120px;
`;

export const GameListLinkContent = styled.Text`
    color: ${link};
    font-size: 20px;
    margin-left: 40px;
    font-family: "MontserratRegular";
`;




