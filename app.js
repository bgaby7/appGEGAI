import * as React from 'react'; import { StyleSheet,  View, Text ,Button, TouchableOpacity, TextInput, Image, ScrollView,  } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


function Feed ({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Associação GEGAI</Text>
        <View style={styles.headerButtons}>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity> 
          </View>
      </View>
      <View style={styles.retangulo}>
       <Image source={{uri: 'https://raw.githubusercontent.com/IsabellaBertolo/GGAI-IMAGENS/main/Captura%20de%20tela%202024-03-14%20095542.png'}}
      style={{width: 400, height: 370}} />
        <Text style={styles.legenda}>Legenda da imagem</Text>
      </View>
      <View style={styles.retangulo21}>
        <Image source={{uri: 'https://raw.githubusercontent.com/IsabellaBertolo/GGAI-IMAGENS/main/Captura%20de%20tela%202024-03-14%20095703.png'}}
      style={{width: 400, height: 370}} />
        <Text style={styles.legenda}>Legenda da imagem</Text>
      </View>
     
      <View style={styles.retangulo41}>
        <Image source={{uri: 'https://raw.githubusercontent.com/IsabellaBertolo/GGAI-IMAGENS/main/Captura%20de%20tela%202024-03-14%20124007.png'}}
      style={{width: 400, height: 370}} />
        <Text style={styles.legenda}>Legenda da imagem</Text>
      </View>
      <View style={styles.retangulo51}>
        <Image source={{uri: 'https://raw.githubusercontent.com/IsabellaBertolo/GGAI-IMAGENS/main/Captura%20de%20tela%202024-03-14%20125507.png'}}
      style={{width: 400, height: 370}} />
        <Text style={styles.legenda}>Legenda da imagem</Text>
      </View>
      <View style={styles.retangulo31}>
        <Image source={{uri: 'https://raw.githubusercontent.com/IsabellaBertolo/GGAI-IMAGENS/main/Captura%20de%20tela%202024-03-14%20095846.png'}}
      style={{width: 400, height: 370}} />
        <Text style={styles.legenda}>Legenda da imagem</Text>
      </View>
       <View style={styles.retangulo61}>
        <Image source={{uri: 'https://raw.githubusercontent.com/IsabellaBertolo/GGAI-IMAGENS/main/Captura%20de%20tela%202024-03-14%20131851.png'}}
      style={{width: 400, height: 370}} />
        <Text style={styles.legenda}>Legenda da imagem</Text>
      </View>
      <View style={styles.footer1}>
      <TouchableOpacity onPress={() => navigation.navigate('Cadastro')}>
        <Text style={styles.footerText1}>Cadastrar</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Doar')}>
        <Text style={styles.footerText1}>Razões para doar</Text>
      </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 3,
    backgroundColor: 'bisque',
  },
  header: {
    backgroundColor: '#FF4375',
    padding: 20,
    alignItems: 'center',
  },
  headerText: {
    color: 'white',
    fontSize: 27,
  },
  headerButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 12,
  },
  button: {
    backgroundColor: 'transparent',
    padding: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  footer: {
    backgroundColor: '#FF4375',
    padding: 19,
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    width: '100%',
   marginBottom: -40, // Adicionando margem inferior ao rodapé
  },
  retangulo: {
    width: 405,
    height: 400,
    marginLeft: 90,
    backgroundColor: '#FFC0CB',
    borderWidth: 2,
    borderColor: '#FF69B4',
    borderRadius: 5,
    position: 'relative',
    marginTop: 15,
    marginBottom: 20, // Adicionando margem inferior ao retângulo
  },
  retangulo21: {
    width: 402,
    height: 400,
    marginLeft: 90,
    backgroundColor: '#FFC0CB',
    borderWidth: 2,
    borderColor: '#FF69B4',
    borderRadius: 5,
    position: 'relative',
    marginTop: 15,
    marginBottom: 140, // Adicionando margem inferior ao retângulo
  },
 
   retangulo41: {
    width: 405,
    height: 400,
    marginLeft: 680,
    backgroundColor: '#FFC0CB',
    borderWidth: 2,
    borderColor: '#FF69B4',
    borderRadius: 5,
    position: 'relative',
    marginTop: -970,
    marginBottom: 20, // Adicionando margem inferior ao retângulo
  },
   retangulo51: {
    width: 405,
    height: 400,
    marginLeft: 680,
    backgroundColor: '#FFC0CB',
    borderWidth: 2,
    borderColor: '#FF69B4',
    borderRadius: 5,
    position: 'relative',
    marginTop: 19,
    marginBottom: 26, // Adicionando margem inferior ao retângulo
  },
    retangulo31: {
    width: 408,
    height: 400,
    marginLeft: 1300,
    backgroundColor: '#FFC0CB',
    borderWidth: 2,
    borderColor: '#FF69B4',
    borderRadius: 5,
    position: 'relative',
    marginTop: -860,
    marginBottom: 20, // Adicionando margem inferior ao retângulo
  },
    retangulo61: {
    width: 405,
    height: 400,
    marginLeft: 1300,
    backgroundColor: '#FFC0CB',
    borderWidth: 2,
    borderColor: '#FF69B4',
    borderRadius: 5,
    position: 'relative',
    marginTop: 10,
    marginBottom: 20, // Adicionando margem inferior ao retângulo
  },
 
  legenda: {
    position: 'absolute',
    bottom: 5,
    left: 5,
    color: 'white',
    fontSize: 15,
  },
                                      


  container1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header1: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ff4375',
    padding: 10,
    width: '100%',
    marginBottom: 20,
  },
  headerLeft1: {
    marginRight: 10,
  },
  headerText1: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    flex: 1, // Permite que o texto ocupe o espaço restante
    textAlign: 'center', // Centraliza o texto
  },
  headerRight1: {
    marginRight: 10,
  },
  main1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginTitle1: {
    fontSize: 24,
    marginBottom: 20,
    color: '#fff',
  },
  logo1: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  image1: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  form1: {
    width: 400, // Largura ajustada para 400
    padding: 20,
    backgroundColor: '#ff4375', // Cor da caixa de login
    borderRadius: 10,
    alignItems: 'center',
  },
  label1: {
    marginBottom: 5,
    color: '#fff', // Cor do texto dentro da caixa de login
  },
  input1: {
    width: '100%',
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#fff',
    borderRadius: 5,
  },
  footer1: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#ff4375',
    padding: 10,
    width: '100%',
  },
  formFooter1: {
    backgroundColor: '#ff4375', // Mesma cor do rodapé
  },
  footerText1: {
    color: '#fff',
    fontSize: 16,
  },





  container2: {
    flex: 1,
    backgroundColor: '#ffdbc5',
  },
  header2: {
    backgroundColor: '#ff4375',
    color: '#fff',
    textAlign: 'center',
    padding: 16,
  },
  headerText2: {
    color: '#fff',
    fontSize: 20,
  },
  heading2: {
    fontSize: 18,
    margin: 10,
  },
  tabContent2: {
    flex: 1,
  },
  tabPane2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  form2: {
    maxWidth: 600,
    margin: 10,
  },
  label2: {
    fontSize: 16,
    marginBottom: 5,
  },
  textArea2: {
    width: 600,
    height: 120,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    padding: 8,
  },
  publishButton2: {
    backgroundColor: '#ff4375',
    padding: 10,
    borderRadius: 5,
  },
  buttonText2: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
  footer2: {
    backgroundColor: '#ff4375',
    color: '#fff',
    textAlign: 'center',
    padding: 16,
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },




  container3: {
    backgroundColor: 'bisque',
  },
  header3: {
    backgroundColor: '#FF4375',
    padding: 20,
    alignItems: 'center',
  },
  headerText3: {
    color: 'white',
    fontSize: 27,
  },
  headerButtons3: {
    flexDirection: 'row',
    justifyContent: 'space-between',
