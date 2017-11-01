import React, {Component} from 'react'
import {
    View,Text,Image,StyleSheet,TouchableOpacity
} from 'react-native'

export default class HistoryShedule extends Component {
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
            <View style={{flex: 1,backgroundColor:'white'}}>

            </View>
        );
    }
}
const styles = StyleSheet.create({
    image:{
        marginLeft:7
    }
});