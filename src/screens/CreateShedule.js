import React, {Component} from 'react'
import {
    View, Text, TouchableOpacity, Image, StyleSheet, TextInput, Picker, ScrollView, CheckBox, PixelRatio
} from 'react-native'
import DatePicker from 'react-native-datepicker';
import CountryPicker, {getAllCountries} from 'react-native-country-picker-modal'

const NORTH_AMERICA = ['CA', 'MX', 'US'];
export default class CreateShedule extends Component {
    constructor(props, context) {
        super(props, context);
        let userLocaleCountryCode = DeviceInfo.getDeviceCountry();
        const userCountryData = getAllCountries()
            .filter((country) => NORTH_AMERICA.includes(country.cca2))
            .filter((country) => country.cca2 === userLocaleCountryCode).pop();
        let callingCode = null;
        let cca2 = userLocaleCountryCode;
        if (!cca2 || !userCountryData) {
            cca2 = 'US';
            callingCode = '1';
        } else {
            callingCode = userCountryData.callingCode;
        }
        this.state = {
            cca2,
            callingCode
        };

        this.state = {language: "Afghanistan"}

        this.state = {
            selected:
                '008 - Support Centre and Retail'
        }
        this.state = {
            selected1: 'SubDep1'
        }
        this.state = {
            selected2: 'as ddd'
        }
        this.state = {
            selected3: 'Male'
        }
        this.state = {
            selected4: 'Regular On-site Interpretation'

        }
        this.state = {date: ""}
        this.state = {time: ""}

    }

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
            <View style={{flex: 1, backgroundColor: 'white', padding: 7}}>
                <ScrollView contentContainerStyle={{paddingVertical: 20}}>
                    <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                        <Text style={{color: 'red', fontSize: 18}}>Requester Information</Text>
                    </View>
                    <Text>Customer*</Text>
                    <TextInput placeholder={'customer'}/>
                    <Text>Department</Text>
                    <View>
                        <Picker
                            selectedValue={this.state.selected}
                            onValueChange={(itemValue, itemIndex) => this.setState({selected: itemValue})}>
                            <Picker.Item label="008-Support Centre and Retail" value="008-Support Centre and Retail"/>
                            <Picker.Item label="Department Testing" value="Department Testing"/>
                            <Picker.Item label="Dep1" value="Dep1"/>
                            <Picker.Item label="Department1" value="Department1"/>
                        </Picker>
                    </View>
                    <Text>Sub-department</Text>
                    <View>
                        <Picker
                            selectedValue={this.state.selected1}
                            onValueChange={(itemValue, itemIndex) => this.setState({selected1: itemValue})}>
                            <Picker.Item label="SubDep1" value="SubDep1"/>
                            <Picker.Item label="SubDep2" value="SubDep2"/>
                        </Picker>
                    </View>
                    <Text>Requester*</Text>
                    <View>
                        <Picker
                            selectedValue={this.state.selected2}
                            onValueChange={(itemValue, itemIndex) => this.setState({selected2: itemValue})}>
                            <Picker.Item label="as ddd" value="as ddd"/>
                            <Picker.Item label="acx sss" value="acx sss"/>
                        </Picker>
                    </View>
                    <Text>Requester Phone</Text>
                    <TextInput placeholder={'Requester Phone'}/>
                    <Text>Requester Email</Text>
                    <TextInput placeholder={'Requester Email'}/>
                    <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                        <Text style={{color: 'red', fontSize: 18}}>Appointment Information</Text>
                    </View>
                    <Text>Date*</Text>
                    <DatePicker
                        style={{width: 200}}
                        date={this.state.date}
                        mode="date"
                        placeholder="select date"
                        format="YYYY-MM-DD"
                        confirmBtnText="Confirm"
                        cancelBtnText="Cancel"
                        customStyles={{
                            dateIcon: {
                                position: 'absolute',
                                left: 0,
                                top: 4,
                                marginLeft: 0
                            },
                            dateInput: {
                                marginLeft: 36
                            }
                        }}
                        onDateChange={(date) => {
                            this.setState({date: date})
                        }}
                    />
                    <Text>Time*</Text>
                    <DatePicker
                        style={{width: 200}}
                        date={this.state.time}
                        mode="time"
                        placeholder="select time"
                        format="HH:mm"
                        confirmBtnText="Confirm"
                        cancelBtnText="Cancel"
                        customStyles={{
                            dateIcon: {
                                position: 'absolute',
                                left: 0,
                                top: 4,
                                marginLeft: 0
                            },
                            dateInput: {
                                marginLeft: 36
                            }
                        }}
                        onDateChange={(time) => {
                            this.setState({time: time})
                        }}
                    />
                    <Text>Estimated Duration (hours)</Text>
                    <TextInput placeholder={'enter the number'}
                               keyboardType={'numeric'}
                    />
                    <Text>Language*</Text>
                    <TextInput placeholder={'Language'}/>
                    <Text>Gender Request</Text>
                    <Picker
                        selectedValue={this.state.selected3}
                        onValueChange={(itemValue, itemIndex) => this.setState({selected3: itemValue})}>
                        <Picker.Item label="Male" value="Male"/>
                        <Picker.Item label="Female" value="Female"/>
                    </Picker>
                    <Text>Service Type</Text>
                    <Picker
                        selectedValue={this.state.selected4}
                        onValueChange={(itemValue, itemIndex) => this.setState({selected4: itemValue})}>
                        <Picker.Item label="Regular On-site Interpretation" value="Regular On-site Interpretation"/>
                        <Picker.Item label="After Hours On-site Interpretation"
                                     value="After Hours On-site Interpretation"/>
                        <Picker.Item label="Rush Request On-site Interpretation"
                                     value="Rush Request On-site Interpretation"/>
                    </Picker>
                    <View style={{flex: 1, flexDirection: 'row'}}>
                        < CheckBox
                            label='Label'
                            checked={true}
                            onChange={(checked) => console.log('I am checked', checked)}
                        />
                        <Text style={{marginTop: 5}}>On-Site Appointment</Text>
                    </View>


                </ScrollView>
            </View>

        );
    }
}
const styles = StyleSheet.create({
    image: {
        marginLeft: 7
    }
});