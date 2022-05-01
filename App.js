import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { useCallback } from "react";
import { Alert, ScrollView, StyleSheet, Button, View, Image, Linking, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Card, Text} from '@rneui/themed';


import dailyImg from './assets/girl1.png'; 
import sexEdTopicImage from './assets/girl1.png'; 
import covidTopicImage from './assets/ideas.png'; 
import selfDefenseTopicImage from './assets/selfDefense.png'; 
import menstruationTopicImage from './assets/girl1.png'; 
import healthTopicImage from './assets/mentalHealth1.png'; 
import logo from './assets/WEquipLogoWhite.png'; 

const articles = [
  {
    catagory: 'menstruation',
    fact: 'herbal remedies contain anti-inflammatory and antispasmodic compounds that can reduce the muscle contractions and swelling associated with menstrual pain',
    link: 'https://www.healthline.com/health/womens-health/menstrual-cramp-remedies#herbs',
    sourceName: 'Healthline',
  },
  {
    catagory: 'Diseases',
    fact: '“Forty percent of diagnosed breast cancers are detected by women who feel a lump, so establishing a regular breast self-exam is very important.”',
    link: 'https://www.nationalbreastcancer.org/breast-self-exam',
    sourceName: 'National Breast Cancer',
  },
  {
    catagory: 'Personal Safety',
    fact: 'In a January 2018 survey of 1,000 women nationwide, 81 percent reported experiencing some form of sexual harassment, assault, or both in their lifetime.',
    link: 'https://www.healthline.com/health/womens-health/self-defense-tips-escape#protection-alternatives',
    sourceName: 'Healthline',
  },
  {
    catagory: 'menstruation',
    fact: 'The 2019 Academy Award-winning Netflix Documentary Short, Period. End of Sentence., aims to inspire people everywhere to think globally and recognize the impact young people can have.  It follows the women of Kathikhera, a village outside of New Delhi, India, as they install a machine and sell their pads throughout their district.',
    link: 'https://thepadproject.org/period-end-of-sentence/#:~:text=The%202019%20Academy%20Award%2Dwinning,on%20Netflix%20in%20February%202019.',
    sourceName: 'The Pad Project',
  },
  {
    catagory: 'menstruation',
    fact: '70%',
    link: '',
  },
  {
    catagory: 'menstruation',
    fact: '70%',
    link: '',
  },
  {
    catagory: 'menstruation',
    fact: '70%',
    link: '',
  },
  ];

//Get the number of days since app launch

// Start of code from: https://stackoverflow.com/questions/2627473/how-to-calculate-the-number-of-days-between-two-dates
const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
const launchDate = new Date(2022, 4, 30);
const d = new Date();
let currentDate = new Date(d.getFullYear(), d.getMonth, d.getDate);
let dayNum;

function diffDays(firstDate, secondDate){
  dayNum = Math.round(Math.abs((firstDate - secondDate) / oneDay));
  console.log(dayNum);
} 
// end of code from: https://stackoverflow.com/questions/2627473/how-to-calculate-the-number-of-days-between-two-dates

//.addEventListener("load", diffDays(launchDate, currentDate));
//onLoad={({nativeEvent: {source: {width, height}}}) => setImageRealSize({width, height})}


//Header Logo HomeScreen
function LogoTitle() {
  return (
    <Image
      style={{ width: 125, height: 25 }}
      source={logo}
    />
  );
}


const OpenURLButton = ({ url, children }) => {
  const handlePress = useCallback(async () => {
    // Checking if the link is supported for links with custom URL scheme.
    const supported = await Linking.canOpenURL(url);

    if (supported) {
      // Opening the link with some app, if the URL scheme is "http" the web link should be opened
      // by some browser in the mobile
      await Linking.openURL(url);
    } else {
      Alert.alert(`Don't know how to open this URL: ${url}`);
    }
  }, [url]);

  return <Button title={children} onPress={handlePress} />;
};


// HOME SCREEN

function HomeScreen() {
  return (
    <ScrollView>
    <View style={{ flex: 1, alignItems: 'flex-start', justifyContent: 'flex-start', padding:'5%' }}>
      
      <Text h1 h1Style ={{ fontSize: 20, }}>Daily Fact or Myth</Text>

      <Image
        style={styles.dailyImage}
        source={dailyImg}
      />
      <Text style={styles.normalText} >Did you know {articles[0].fact}?</Text>
      <View style={styles.container}>
      <OpenURLButton url={articles[0].link}>Read the article online</OpenURLButton>
      </View>

      
     

     {/* Topics */}
    
     <Card style={styles.card}>
      <Image 
        style={styles.cardImg}
        source={selfDefenseTopicImage}
      />
      <Text style={{ marginBottom: 10 }} h2 h2Style ={{ fontSize: 20, }}>
        Self Defense
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
         title="Learn More"
      />
    </Card>

    <Card style={styles.card}>
      <Image 
        style={styles.cardImg}
        source={healthTopicImage}
      />
      <Text style={{ marginBottom: 10 }} h2 h2Style ={{ fontSize: 20, }}>
        General Health
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
         title="Learn More"
      />
    </Card>


     <Card style={styles.card}>
      <Image 
        style={styles.cardImg}
        source={menstruationTopicImage}
      />
      <Text style={{ marginBottom: 10 }} h2 h2Style ={{ fontSize: 20, }}>
        Sex Ed
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
         title="Learn More"
      />
    </Card>



    <Card style={styles.card}>
      <Image 
        style={styles.cardImg}
        source={menstruationTopicImage}
      />
      <Text style={{ marginBottom: 10 }} h2 h2Style ={{ fontSize: 20, }}>
        Menstruation
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
         title="Learn More"
      />
    </Card>
    
    <Card style={styles.card}>
      <Image 
        style={styles.cardImg}
        source={covidTopicImage}
      />
      <Text style={{ marginBottom: 10 }} h2 h2Style ={{ fontSize: 20, }}>
        Covid
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
         title="Learn More"
      />
    </Card>


    </View>
    </ScrollView>
  );
}


//Topic SCREEN

function TopicScreen() {
  return (
    <View style={{ margin: 20, flex: 1, alignItems: 'flex-start', justifyContent: 'flex-start' }}>
     < Text h1 h1Style ={{ fontSize: 20, }}>Menstruation</Text>
     <Card style={styles.card}>
      <Text style={{ marginBottom: 10 }} h2 h2Style ={{ fontSize: 15, }}>
      Did you know {articles[0].fact}?
      </Text>
      <View style={styles.container}>
      <OpenURLButton url={articles[0].link}>Read the article online</OpenURLButton>
      </View>
    </Card>
     <Card style={styles.card}>
      <Text style={{ marginBottom: 10 }} h2 h2Style ={{ fontSize: 15, }}>
      {articles[3].fact}
      </Text>
      <View style={styles.container}>
      <OpenURLButton url={articles[3].link}>Read the article online</OpenURLButton>
      </View>
    </Card>
    </View>
  );
}

//SUGGESTION PAGE
const UselessTextInput = (props) => {
  return (
    <TextInput
      {...props} // Inherit any props passed to it; e.g., multiline, numberOfLines below
      editable
      maxLength={40}
    />
  );
}

function SuggestionScreen() {
  const [value, onChangeText] = React.useState('Placeholder');
  return (
    <View style={{margin: 20, flex: 1, alignItems: 'flex-start', justifyContent: 'flex-start' }}>
      <UselessTextInput 
        onChangeText={text => onChangeText(text)}
        value={value}
        style={{ marginTop: 20, padding: 5, width: 300, backgroundColor: '#ffffff'}}
      />

      <UselessTextInput 
        onChangeText={text => onChangeText(text)}
        value={value}
        style={{ marginTop: 20,padding: 5, width: 300, backgroundColor: '#ffffff'}}
      />

      <UselessTextInput 
        multiline
        numberOfLines={4}
        onChangeText={text => onChangeText(text)}
        value={value}
        style={{ marginTop: 20,padding: 5, width: 300, backgroundColor: '#ffffff'}}
      />

  <Button s
          // icon={
          //   <Icon
          //     name="code"
          //     color="#ffffff"
          //     iconStyle={{ marginRight: 10 }}
          //   />
          // }
        
          title="Submit"
        />

    </View>
  );
}

// function TopicsScreen({navigation}) {
//   return (
//     <View style={{ flex: 1, alignItems: 'flex-start', justifyContent: 'flex-start' }}>
//       <Text>Suggestion Screen</Text>
      

//     </View>
//   );
// }



const Tab = createBottomTabNavigator();


function App() {
  return (
    <NavigationContainer>
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} options={{
   headerTitle: (props) => <LogoTitle {...props} /> ,
  headerStyle: {
    backgroundColor: '#4059AD',
  },
  headerTitleAlign: 'center',
  headerTintColor: '#fff',
}}
/>
      <Tab.Screen name="Submit a post" component={SuggestionScreen} options={{
        headerStyle: {
          backgroundColor: '#4059AD',
        },
    headerTitleAlign: 'center',
    headerTintColor: '#fff',
      }}
      />
      <Tab.Screen name="Topics" component={TopicScreen} options={{
        headerStyle: {
          backgroundColor: '#4059AD',
        },
    headerTitleAlign: 'center',
    headerTintColor: '#fff',
      }}/>
    </Tab.Navigator>
  </NavigationContainer>

  );
}


const styles = StyleSheet.create({
  container: {
    
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
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
    width: 260,
    height: 100,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
});


window.onload = (event) => {
  diffDays(launchDate, currentDate);
};



 export default App;