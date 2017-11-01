import React, {Component} from 'react'
import {
    View, Text, StyleSheet, Image, TouchableOpacity
} from 'react-native'
import images from '../Images'

export default class Profile extends Component {
    constructor(props) {
        super(props)
        this.state = {
            token: '',
            account: ''

        }
    }

    render() {
        return (
            <View style={{flex: 1}}>
                <Image style={styles.picture} source={images.iconProfile}>
                    <Image style={styles.imageProfile} source={images.iconUser}>

                    </Image>
                    <Text style={{
                        marginLeft: 20,
                        marginTop: 20,
                        color: 'white'
                    }}>
                    </Text>
                    <Text style={{marginLeft: 20, color: 'white'}}></Text>
                </Image>
                <View style={{flex: 3}}>
                    <TouchableOpacity>

                        <View style={styles.infoContainer}>

                            <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
                                <Image source={images.iconUserInfo}/>
                            </View>

                            <View style={{flex: 9, marginLeft: 13}}>
                                <Text>Account Info</Text>
                            </View>

                        </View>
                    </TouchableOpacity>
                    <View style={{height: 1, backgroundColor: '#cccccc', marginTop: 10}}/>
                    <TouchableOpacity
                    >
                        <View style={styles.infoContainer}>

                            <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
                                <Image source={images.iconSetting}/>
                            </View>

                            <View style={{flex: 9, marginLeft: 13}}>
                                <Text>Setting</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <View style={{height: 1, backgroundColor: '#cccccc', marginTop: 10}}/>
                    <TouchableOpacity
                    >
                        <View style={styles.infoContainer}>

                            <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
                                <Image source={images.iconSignOut}/>
                            </View>

                            <View style={{flex: 9, marginLeft: 13}}>
                                <Text>Sign Out</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>

            </View>
        );
    }
}
const styles = StyleSheet.create({
    viewHeader: {
        flex: 1,

    },
    infoContainer: {
        flexDirection: 'row',
        marginTop: 5,

    },
    picture: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'cover',
    },
    imageProfile: {
        marginTop: 20,
        marginLeft: 20,
        width: 50,
        height: 50
    }
});