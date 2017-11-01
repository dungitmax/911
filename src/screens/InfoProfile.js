import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,


} from 'react-native';

export default class InfoProfile extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <View style={{flex: 1, backgroundColor: 'white'}}>
                <Text style={styles.textTitle}>Username</Text>
                <View style={{height: 1, backgroundColor: '#cccccc', marginTop: 5}}/>

                <Text style={styles.textTitle}>Email</Text>
                <View style={{height: 1, backgroundColor: '#cccccc', marginTop: 5}}/>
                <Text style={styles.textTitle}>Phone Number</Text>
                <View style={{height: 1, backgroundColor: '#cccccc', marginTop: 5}}/>
                <Text style={styles.textTitle}>Leaguage</Text>
                <View style={{height: 1, backgroundColor: '#cccccc', marginTop: 5}}/>
                <Text style={styles.textTitle}>Join Date</Text>
                <View style={{height: 1, backgroundColor: '#cccccc', marginTop: 5}}/>


            </View>

        );

    }
}
const styles = StyleSheet.create({
    textTitle: {
        marginTop: 5,
        marginLeft: 6,
        color: '#212121'
    },
    textValue: {
        marginLeft: 6

    }

});