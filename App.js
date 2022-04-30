import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { ScrollView, StyleSheet, Button, View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {Card, Text, ButtonGroup } from '@rneui/themed';
import dailyImg from './assets/placeholder.jpg'; 


const articles = [
  {
    catgory: 'menstruation',
    fact: 'herbal remedies contain anti-inflammatory and antispasmodic compounds that can reduce the muscle contractions and swelling associated with menstrual pain',
    link: 'https://www.healthline.com/health/womens-health/menstrual-cramp-remedies#herbs',
  },
  {
    catgory: 'Diseases',
    fact: '“Forty percent of diagnosed breast cancers are detected by women who feel a lump, so establishing a regular breast self-exam is very important.”',
    link: 'https://www.nationalbreastcancer.org/breast-self-exam',
  },
  {
    catgory: 'Personal Safety',
    fact: 'In a January 2018 survey of 1,000 women nationwide, 81 percent reported experiencing some form of sexual harassment, assault, or both in their lifetime.',
    link: 'https://www.healthline.com/health/womens-health/self-defense-tips-escape#protection-alternatives',
  },
  {
    catgory: 'menstruation',
    fact: 'The 2019 Academy Award-winning Netflix Documentary Short, Period. End of Sentence., aims to inspire people everywhere to think globally and recognize the impact young people can have.  It follows the women of Kathikhera, a village outside of New Delhi, India, as they install a machine and sell their pads throughout their district.',
    link: 'https://thepadproject.org/period-end-of-sentence/#:~:text=The%202019%20Academy%20Award%2Dwinning,on%20Netflix%20in%20February%202019.',
  },
  {
    catgory: 'menstruation',
    fact: '70%',
    link: '',
  },
  {
    catgory: 'menstruation',
    fact: '70%',
    link: '',
  },
  {
    name: 'whatever',
    catgory: 'menstruation',
    fact: '70%',
    link: '',
  },
  ];




//Get the number of days since app launch

// Start of code from: https://stackoverflow.com/questions/2627473/how-to-calculate-the-number-of-days-between-two-dates
// const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
// const launchDate = new Date(2022, 4, 31);
// const d = new Date();
// let currentDate = new Date(d.getFullYear(), d.getMonth, d.getDate);
// let dayNum;

// function diffDays(firstDate, secondDate){
//   dayNum = Math.round(Math.abs((firstDate - secondDate) / oneDay));
// } 
// end of code from: https://stackoverflow.com/questions/2627473/how-to-calculate-the-number-of-days-between-two-dates

//.addEventListener("load", diffDays(launchDate, currentDate));
//onLoad={({nativeEvent: {source: {width, height}}}) => setImageRealSize({width, height})}










// HOME SCREEN

function HomeScreen({ navigation }) {
  return (
    <ScrollView>
    <View style={{ flex: 1, alignItems: 'flex-start', justifyContent: 'flex-start', padding:'5%' }}>
      {/* <Text h1 h1Style={{ fontSize: 30, }}>{articles[dayNum]['fact']}</Text> */}
      <Image
        style={styles.dailyImage}
        source={dailyImg}
      />
      <Text style={styles.normalText} >Lorem Ipsum</Text>
      <Button
        title="Go to Topics"
        onPress={() => navigation.navigate('Topics')}
      />

     {/* Topics */}
<Text style={styles.text} h2 h2Style={{ fontSize: 30, }}>Heading</Text>

    <Card style={styles.card}>
      <Image
        style={styles.cardImg}
        source={dailyImg}
      />
      <Text style={{ marginBottom: 10 }}>
        The idea with React Native Elements is more about component
        structure than actual design.
      </Text>
      <Button
        // icon={
        //   <Icon
        //     name="code"
        //     color="#ffffff"
        //     iconStyle={{ marginRight: 10 }}
        //   />
        // }
        buttonStyle={{
          borderRadius: 0,
          marginLeft: 0,
           marginRight: 0,
          marginBottom: 0,
        }}
         title="VIEW NOW"
      />
    </Card>
    


    </View>
    </ScrollView>
  );
}


//TOPICS SCREEN

function TopicsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'flex-start', justifyContent: 'flex-start' }}>
      <Text>Topics Screen</Text>
    </View>
  );
}

//SUBTOPIC SCREEN

function subtopicsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'flex-start', justifyContent: 'flex-start' }}>
      <Text>Subtopics Screen</Text>
    </View>
  );
}

//SUGGESTION PAGE

function SuggestionScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'flex-start', justifyContent: 'flex-start' }}>
      <Text>Suggestion Screen</Text>

    </View>
  );
}


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" 
        component={HomeScreen}
        options={{
          title: 'Home',
          headerStyle: {
            backgroundColor: '#4059AD',
          },
          headerTitleAlign: 'center',
          headerTintColor: '#fff',
        }} />
        <Stack.Screen name="Topics" component={TopicsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dailyImage: {
    width: 320,
    height: 200,
  },
  text:{
    paddingTop: 10,
  },
  normalText:{
    fontSize: 16, 
    paddingTop: 10,
  },
  cardImg: {
    width: 200,
    height: 100,
  },
});

 export default App;