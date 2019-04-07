import React from 'react';
import { StyleSheet, Text, View,TextInput, SafeAreaView , TouchableOpacity, Alert} from 'react-native';



// var kg = 0.0;
// var heightIncms = 0.0;
// var heightInm = heightIncms / 100
// var deno = heightInm * heightInm
// var BMI = kg / deno

export default class App extends React.Component {
  constructor(props)
  {
    super(props);
    this.state ={

      StringAt : "Please Enter Correct Values of Height and Weight",
      kg : 0.0,
      height : 0.0,
      BMI: 0.0

    }
  }

  calculateBMI = () =>
  {
    //Alert.alert("Calculating BMI: "+ this.state.kg + " " + this.state.height)
    if(this.state.height <= 0)
    {
      Alert.alert(" Please Enter Correct Height")
    }

    if(this.state.kg <= 0)
    {
      Alert.alert(" Please Enter Correct Weight")
    }

    var mBMI = this.state.kg / ((this.state.height*this.state.height)/10000)
    this.state.BMI = mBMI;

    Alert.alert("Calculated BMI: " + this.state.BMI)

    if(this.state.BMI <= 18.5)
    {
      this.setState({StringAt : "UnderWeight"})
    }
    else if (this.state.BMI > 18.5 & this.state.BMI <= 24.9)
    {
      this.setState({StringAt : "Normal"})
    }
    else if( this.state.BMI > 24.9 & this.state.BMI <= 29.9)
    {
      this.setState({StringAt : "OverWeight"})
    }
    else if( this.state.BMI > 30.0)
    {
      this.setState({StringAt : "Obese"})
    }

  }










  render() {
    return (
      <SafeAreaView>
      <View style={{marginTop : 170, alignItems: 'center'}}>
      <TextInput
      style = {styles.inputcontainer}
      placeholder = "Enter weight in Kgs"
      placeholderTextColor = "white"
      keyboardType= "numeric"
      onChangeText = {(kg) => this.setState({kg})}
      ></TextInput>

      <TextInput
      style = {styles.inputcontainer}
      placeholder = "Enter Height in Cms"
      placeholderTextColor = "white"
      keyboardType= "numeric"
      
      
      onChangeText = {(height) => this.setState({height})}
      ></TextInput>

      <TouchableOpacity
      onPress = {this.calculateBMI}
      style = {styles.inputcontainer}

      >
      <Text style={{
        fontSize : 15, 
        fontWeight : 'bold', 
        color : 'white',
        }}>Calculate BMI</Text>

        </TouchableOpacity>


        <Text>{this.state.StringAt}</Text> 

      
        
      </View>

      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F1E4F3',
    alignItems: 'center',
    justifyContent: 'center',
  },

  inputcontainer:{
    height: 50,
    width : 350,
    backgroundColor: '#8B78E6',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    borderWidth: 2,
    borderColor : 'white',
    marginTop : 30,
    color: 'white',
    justifyContent:'center',
    alignItems:'center',
    textAlign :'center',

  }
});
