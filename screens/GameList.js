import {
    StyledContainer,
    InnerContainer,
    ListTitleView,
    ListLogo,
    ListSquare,
    ListContainer,
    TextLink,
    TextLinkContent,
    GameListCardLogo,
    GameListLink,
    GameListLinkContent,
} from '../components/styles';

const GameList = ({ navigation }) => {

    return (
        <StyledContainer>
            <InnerContainer>
                <ListTitleView>
                    <ListLogo resizeMode="cover" source={require('./../assets/img/doo.png')} />
                </ListTitleView>
                <ListContainer>
                    <ListSquare>
                        <GameListLinkContent onPress={() => navigation.navigate("Memo")}>
                            Memo
                        </GameListLinkContent>
                        <GameListCardLogo resizeMode="cover" source={require('./../assets/img/memo.png')} />
                    </ListSquare>
                    <ListSquare />
                    <ListSquare />
                    <ListSquare />
                    <ListSquare />
                    <ListSquare />
                </ListContainer>
            </InnerContainer>
        </StyledContainer>
    );
}

export default GameList;