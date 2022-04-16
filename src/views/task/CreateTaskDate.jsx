import { useNavigation } from '@react-navigation/core';
import { Text, View, TouchableOpacity } from 'react-native'

import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import { SafeAreaView } from 'react-native-safe-area-context';

import Icon from 'react-native-vector-icons/AntDesign';

export default function Date() {

    const navigation = useNavigation()

    return (

        <SafeAreaView style={styles.container}>

            <View style={styles.backContainer}>

                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Text><Icon name="left" size={23} color="black" /></Text>
                </TouchableOpacity>

            </View>

            <View style={styles.main}>

                <View style={styles.titleContainer}>
                    <Text style={styles.title}>Date :</Text>
                </View>

                <View style={styles.calendarContainer}>

                    <Calendar style={styles.calendar}
                        // Initially visible month. Default = now
                        current={'2022-04-16'}
                        // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
                        minDate={'2022-01-01'}
                        // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
                        maxDate={'2050-01-31'}
                        // Handler which gets executed on day press. Default = undefined
                        onDayPress={day => {
                          console.log('selected day', day);
                        }}
                        // Handler which gets executed on day long press. Default = undefined
                        onDayLongPress={day => {
                          console.log('selected day', day);
                        }}
                        // Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
                        monthFormat={'yyyy MM'}
                        // Handler which gets executed when visible month changes in calendar. Default = undefined
                        onMonthChange={month => {
                          console.log('month changed', month);
                        }}
                        // Hide month navigation arrows. Default = false
                        hideArrows={false}
                        // Replace default arrows with custom ones (direction can be 'left' or 'right')
                        // renderArrow={direction => <Arrow />}
                        // Do not show days of other months in month page. Default = false
                        hideExtraDays={false}
                        // If hideArrows = false and hideExtraDays = false do not switch month when tapping on greyed out
                        // day from another month that is visible in calendar page. Default = false
                        disableMonthChange={false}
                        // If firstDay=1 week starts from Monday. Note that dayNames and dayNamesShort should still start from Sunday
                        firstDay={1}
                        // Hide day names. Default = false
                        hideDayNames={false}
                        // Show week numbers to the left. Default = false
                        showWeekNumbers={false}
                        // Handler which gets executed when press arrow icon left. It receive a callback can go back month
                        onPressArrowLeft={subtractMonth => subtractMonth()}
                        // Handler which gets executed when press arrow icon right. It receive a callback can go next month
                        onPressArrowRight={addMonth => addMonth()}
                        // Disable left arrow. Default = false
                        disableArrowLeft={false}
                        // Disable right arrow. Default = false
                        disableArrowRight={false}
                        // Disable all touch events for disabled days. can be override with disableTouchEvent in markedDates
                        disableAllTouchEventsForDisabledDays={true}
                        // Replace default month and year title with custom one. the function receive a date as parameter
                        //renderHeader={date => {
                          /*Return JSX*/
                        //}}
                        // Enable the option to swipe between months. Default = false
                        enableSwipeMonths={true}
                    />

                </View>


            </View>
                
            <View style={styles.addContainer}>
                <TouchableOpacity style={styles.buttonContainer} onPress={() => navigation.push("CreateTask/Category")}>
                    <Text style={styles.icon}><Icon name="arrowright" size={23} color="#FFF" /></Text>
                </TouchableOpacity>
            </View>

        </SafeAreaView>

    )

}


const styles = {
    container: {
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center" 
    },
    backContainer: {
        marginTop: 10,
        marginLeft: 20,
        width: "100%",
    },
    main: {
        alignSelf: "center",
        width: "90%",
        marginTop: "50%",
        transform: [{translateY: "-50%"}]
    },
    titleContainer: {
        marginBottom: 50,
        borderBottomWidth: 7,
        borderColor: "#0A2CF3",
        width: "23%",
    },
    title: {
        fontSize: 30,
    },
    calendar: {
        width: "100%",
    },
    addContainer: {
        position: 'absolute',
        bottom: 25,
        right: 20,
        padding: 10,
        backgroundColor: "#0A2CF3",
        borderRadius: 5,
    },
}