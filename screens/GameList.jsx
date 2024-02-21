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

import styled from "styled-components";
import { Entypo } from '@expo/vector-icons';

import { MaterialCommunityIcons } from '@expo/vector-icons';

import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';


const GameList = ({ navigation }) => {

    return (
        <StyledContainer>

            <InnerContainer>
                <ListTitleView>
                    <ListLogo resizeMode="cover" source={require('./../assets/img/doo.png')} />
                </ListTitleView>
                <ListContainer>
                    {/*    <ListSquare>
                        <GameListLinkContent onPress={() => navigation.navigate("Memo")}>
                            Memo
                        </GameListLinkContent>
                        <GameListCardLogo resizeMode="cover" source={require('./../assets/img/memo.png')} />
                    </ListSquare>
                    <ListSquare>
                        <GameListLinkContent onPress={() => navigation.navigate("TicTac")}>
                            Tic-TacToe
                        </GameListLinkContent>
                        <GameListCardLogo resizeMode="cover" source={require('./../assets/img/memo.png')} />
                    </ListSquare>
                    <ListSquare>
                        <GameListLinkContent onPress={() => navigation.navigate("Flappy")}>
                            Flappy Pinguin
                        </GameListLinkContent>
                        <GameListCardLogo resizeMode="cover" source={require('./../assets/img/memo.png')} />
                    </ListSquare>
                    <ListSquare />
                    <ListSquare />
                    <ListSquare /> */}
                    <View style={styles.container}>
                        <View style={styles.itemWrapper}>
                            <Image style={styles.memo} source={require('../assets/img/memoria.png')} />
                            <Text style={styles.title}>Memo</Text>
                            <View style={styles.selectWrapper}>
                                <Entypo name="chevron-with-circle-right" size={26} color="black" style={styles.selectIcon} onPress={() => navigation.navigate("Memo")} />
                            </View>
                        </View>
                        <View style={styles.itemWrapper}>
                        <Image style={styles.tic} source={require('../assets/img/velha.png')} />
                        <Text style={styles.title}>Tic-Tac</Text>
                        <View style={styles.selectWrapper}>
                            <Entypo name="chevron-with-circle-right" size={26} color="black" style={styles.selectIcon} onPress={() => navigation.navigate("TicTac")} />
                        </View>
                    </View>
                    </View>
                    <View style={styles.container}>
                        <View style={styles.itemWrapper}>
                            <Image style={styles.number} source={require('../assets/img/numeros.png')} />
                            <Text style={styles.title}>2048</Text>
                            <View style={styles.selectWrapper}>
                                <Entypo name="chevron-with-circle-right" size={26} color="black" style={styles.selectIcon} onPress={() => navigation.navigate("Number")} />
                            </View>
                        </View>
                        <View style={styles.itemWrapper}>
                        <Image style={styles.flappy} source={require('../assets/img/birdCard.png')} />
                        <Text style={styles.title}>Flappy Pinguin</Text>
                        <View style={styles.selectWrapper}>
                            <Entypo name="chevron-with-circle-right" size={26} color="black" style={styles.selectIcon} onPress={() => navigation.navigate("Flappy")}  />
                        </View>
                    </View>
                    </View>


                </ListContainer>
            </InnerContainer>
        </StyledContainer>
    );
}

export default GameList;

const styles = StyleSheet.create({
    container: {
       flexDirection: 'row',
       marginTop: 20,
    },
    
    itemWrapper: {
        backgroundColor: '#fefefe',
        width: '47%',
        height: 200,
        marginRight: 15,
        borderRadius: 20,
    },

    memo: {
        width: 60,
        height: 60,
        marginTop: 25,
        alignSelf: 'center',
        marginHorizontal: 20,

    },

    tic: {
        width: 60,
        height: 60,
        marginTop: 25,
        alignSelf: 'center',
        marginHorizontal: 20,

    },

    number: {
        width: 60,
        height: 60,
        marginTop: 25,
        alignSelf: 'center',
        marginHorizontal: 20,

    },

    flappy: {
        width: 75,
        height: 55,
        marginTop: 25,
        alignSelf: 'center',
        marginHorizontal: 20,

    },
    title: {
        textAlign: 'center',
        fontFamily: 'MontserratRegular',
        fontSize: 14,
        marginTop: 10,
    },
    selectWrapper: {
        alignSelf: 'center',
        justifyContent: 'center',
        marginTop: 20,
        width: 26,
        height: 26,
        borderRadius: 26,
        marginBottom: 26,
    },
    selectIcon: {
        alignSelf: 'center',
    },
});