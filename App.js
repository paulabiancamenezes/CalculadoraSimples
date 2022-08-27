import React,{useState} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default function App() {
	const [valor1, setValor1] = useState(20);
	const [valor2, setValor2] = useState(20);
	const [resultado, setResultado] = useState();
	function somar(){
		let r = parseFloat(valor1) + parseFloat(valor2);
		setResultado(r);
	}
	function subtrair(){
		let x = parseFloat(valor1) - parseFloat(valor2);
		setResultado(x);
	}
	function dividir(){
		let y = parseFloat(valor1) / parseFloat(valor2);
		setResultado(y);
	}
	function multiplicar(){
		let a = parseFloat(valor1) * parseFloat(valor2);
		setResultado(a);
	}
	function potencia(){
		let b = parseFloat(valor1) ** parseFloat(valor2);
		setResultado(b);
	}

  return (
    <View style={styles.container}>
		  <View style={styles.bloco}>
			  <Text style={styles.titulo}>Calculadora Simples</Text>
		  </View>
		  <View style={styles.bloco}>
		  	<Text>Valor 1: </Text>
			  <TextInput 
				style = {styles.input}
				value={valor1}
				  onChangeText={(valor)=>setValor1(valor)}
				  keyboardType="numeric"
				/>
		  </View>
		  <View style={styles.bloco}>
		  	<Text>Valor 2: </Text>
			  <TextInput 
				style = {styles.input}
				value={valor2}
				  onChangeText={(valor)=>setValor2(valor)}
				  keyboardType="numeric"
				/>
		  </View>

		  <View style={styles.bloco}>
		  	<TouchableOpacity style = {styles.botao}
				onPress={somar}
				>
			 	<Text style = {styles.textoBotao}>Somar</Text> 
			</TouchableOpacity>
		  </View>

		  <View style={styles.bloco}>
		  	<TouchableOpacity style = {styles.botao}
				onPress={subtrair}
				>
			 	<Text style = {styles.textoBotao}>Subtrair</Text> 
			</TouchableOpacity>
		  </View>

		  <View style={styles.bloco}>
		  	<TouchableOpacity style = {styles.botao}
				onPress={dividir}
				>
			 	<Text style = {styles.textoBotao}>Dividir</Text> 
			</TouchableOpacity>
		  </View>

		  <View style={styles.bloco}>
		  	<TouchableOpacity style = {styles.botao}
				onPress={multiplicar}
				>
			 	<Text style = {styles.textoBotao}>Multiplicar</Text> 
			</TouchableOpacity>
		  </View>
		  
		  <View style={styles.bloco}>
		  	<TouchableOpacity style = {styles.botao}
				onPress={potencia}
				>
			 	<Text style = {styles.textoBotao}>Potência</Text> 
			</TouchableOpacity>
		  </View>

		  <View style={styles.titulo}>
		  <Text style={styles.titulo}>Resultado: {resultado} </Text>
		  </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
	bloco:{
		marginTop: 20,
		width:'80%',
		marginLeft:'10%'
	},
	titulo:{
		fontSize:30,
		textAlign:'center'
	},
	input:{
		borderWidth:2,
		fontSize: 20
	},
	botao:{
		backgroundColor:'#000',
		padding: 5,
		borderRadius: 10
	},
	textoBotao:{
		color:'#FFF',
		textAlign:'center',
		fontSize:20
	},
});
