import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, Button } from 'react-native';
import { MemoryCards, PageTitle } from '../components/styles';
import Card from './../games/memoDoo/Card'

const cards = [
    <MemoryCards resizeMode="cover" source={require('./../assets/img/1.png')} />,
    <MemoryCards resizeMode="cover" source={require('./../assets/img/2.png')} />,
    <MemoryCards resizeMode="cover" source={require('./../assets/img/3.png')} />,
    <MemoryCards resizeMode="cover" source={require('./../assets/img/4.png')} />,
    <MemoryCards resizeMode="cover" source={require('./../assets/img/5.png')} />,
    <MemoryCards resizeMode="cover" source={require('./../assets/img/doo.png')} />,

];

export default function Memo() {
    const [board, setBoard] = useState(() => shuffle([...cards, ...cards]));
    const [selectedCards, setSelectCards] = useState([]);
    const [matchedCards, setMatchedCards] = useState([]);
    const [score, setScore] = useState(0);

    useEffect(() => {
        if (selectedCards.length < 2) return;
        if (board[selectedCards[0]] === board[selectedCards[1]]) {
            setMatchedCards([...matchedCards, ...selectedCards])
            setSelectCards([]);
        } else {
            const timeoutId = setTimeout(() => setSelectCards([]), 1000);
            return () => clearTimeout(timeoutId);
        }
    }, [selectedCards]);

    const handleTapCard = (index) => {
        if (selectedCards.length >= 2 || selectedCards.includes(index)) return;
        setSelectCards([...selectedCards, index]);
        setScore(score + 1);
    };
    const didPlayerWin = () => matchedCards.length === board.length;

    const resetGame = () => {
        setMatchedCards([]);
        setScore(0);
        setSelectCards([]);
        setBoard(shuffle([...cards, ...cards]));
    };

    return (
        <View style={styles.container}>
            <PageTitle>{didPlayerWin() ? "Parabéns 👏" : "Jogo da Memória"}</PageTitle>
            <PageTitle>Placar: {score}</PageTitle>
            <View style={styles.board}>
                {board.map((card, index) => {
                    const isTurnedOver = selectedCards.includes(index) || matchedCards.includes(index)
                    return (
                        <Card
                            key={index}
                            isTurnedOver={isTurnedOver}
                            onPress={() => handleTapCard(index)}
                        >
                            {card}
                        </Card>
                    )
                })}
            </View>
            {didPlayerWin() && <Button onPress={resetGame}  title="recomeçar"/>}
            <StatusBar style="light" />
        </View>
    )
}

const styles = StyleSheet.create({ 
    container: {
        flex: 1,
        backgroundColor: "#0f172a",
        alignItems: "center",
        justifyContent: "center",
    },
    board: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
    },
});

/**
 * Retorna a matriz em uma ordem aleatória.
 * Não edite essa função.
 */
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const randomIndex = Math.floor(Math.random() * (i + 1));

        //Troca os elementos no i e no randomIndex
        [array[i], array[randomIndex]] = [array[randomIndex], array[i]];
    }
    return array;
}