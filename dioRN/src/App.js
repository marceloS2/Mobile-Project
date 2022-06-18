import React from 'react';
import {View, Image, StyleSheet, SafeAreaView, StatusBar, Text, Pressable, Linking} from 'react-native';

const colorGithub = '#24292f'; //passando variavel colorgithub 
const colorFontGithub = '#f6f8fa';
const colorDarkFontGithub ='#778493';
const ImageProfileGithub ='https://avatars.githubusercontent.com/u/82478461?v=4'
const urlToMyGithub = 'https://github.com/marceloS2';

const App = () => {
    const handlePressGotoGithub = async ()=>{
      console.log('verication link');
        const res = await Linking.canOpenURL(urlToMyGithub);
        if(res){
      console.log('link aprovado!');
      console.log ('abrindo link'); 
      await  Linking.openURL(urlToMyGithub)
      }
    };
    return (
        <SafeAreaView style = {style.container}> 
    
      <StatusBar backgroundColor={colorGithub} barStyle="silver-content"/> 
   
     <View style={style.content}> 
   
    <Image accessibilityLabel='Marcelo no shop' 
    style={style.avatar} source={{uri:ImageProfileGithub}} />
  
   <Text accessibilityLabel='Nome: marcelo' 
   style={[style.defaultText, style.name]}>Macelo Santos
   </Text>
   
   <Text accessibilityLabel='nickname: marcelos2' 
   style={[style.defaultText, style.nickname]}  >marcelos2
   </Text>
    
    <Text accessibilityLabel='Descrição: Soft engineer | C# Developer | Mobile Developer
    linkdin: marcelosantos6' 
    style={[style.defaultText, style.descripiton]}> Soft engineer | C# Developer | Mobile Developer
    linkdin: marcelosantos6
    </Text>
   
    <Pressable onPress={handlePressGotoGithub}> 
     <View style={style.button}>
     <Text style={[style.defaultText, style.textButton]}>
        Open in Github</Text>
   </View>
    </Pressable>
    
    </View>
    
        </SafeAreaView> // safeAreaview serve para aqules smartphone que tem uma telinha em cima
    );                 // StatusBar serve para munda a cor da barra acima
};

export default App; 

const style = StyleSheet.create({
    container: {
        backgroundColor: colorGithub,
       flex: 1, // Expandir para tela inteira
       justifyContent: 'center',
    },
    content:{
       alignItems: 'center',
       padding: 75,
    },
   
    avatar:{
    height: 200,
    width: 200,
    borderRadius: 100, //deixando a borda redonda
    borderColor: 'silver',
    borderWidth: 2,  
},
 defaultText:{
    color: colorFontGithub,
 },
name:{
    marginTop: 25,
    fontWeight:'bold',
    fontSize: 35,

},

nickname:{
    fontSize: 18,
    color: colorDarkFontGithub,
},

descripiton:{
    fontWeight:'bold',
  fontSize: 14,  
},

button:{
    marginTop: 20,
    backgroundColor:colorDarkFontGithub,
    borderRadius: 10,
    padding: 20,
},

textButton:{
    fontWeight: 'bold',
    fontSize: 14,
},
});

