import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const FlatCards = () => {
    return (
        <View>

            <Text style={Styles.headingText}>FlapCards</Text>
            <View style={Styles.conatainer}>
                <View style={[Styles.card, Styles.cardOne]}>
                    <Text >Red</Text>
                </View>
                <View style={[Styles.card, Styles.cardTwo]}>
                    <Text>Green</Text>
                </View>
                <View style={[Styles.card, Styles.cardThree]}>
                    <Text>Black</Text>
                </View>
            </View>
        </View>
    );
};

export default FlatCards;
const Styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 8,
      },
      conatainer: {

        flex: 1,
        flexDirection: 'row',
        padding: 8,

    }
    ,
    card: {
        flex: 1,

        justifyContent: 'center',
        alignItems: 'center',
        width: 100,
        height: 100,
        borderRadius: 4,
        margin: 8,

    }
    ,
    cardOne: {
        backgroundColor: '#EF5354',
    },
    cardTwo: {
        backgroundColor: '#50DBB4',

    },
    cardThree: {
        backgroundColor: 'black',

    }

})