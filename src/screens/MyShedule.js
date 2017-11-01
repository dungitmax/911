import React, {Component} from 'react'
import {
    View, Text, TouchableOpacity, Image, StyleSheet, FlatList
} from 'react-native'

export default class MyShedule extends Component {
    static navigationOptions = ({navigation}) => {
        const {state} = navigation;
        return {
            headerLeft:
                <TouchableOpacity onPress={() => {
                    navigation.navigate('DrawerOpen')
                }}>
                    {/*<Icon name={'user-circle'} size={30} style={{marginLeft: 7}}></Icon>*/}
                    <Image style={styles.image} source={require('../images/iconperson.png')}/>
                </TouchableOpacity>
        }
    }

    render() {
        return (
            <View style={styles.container}>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    image: {
        marginLeft: 7
    }
})