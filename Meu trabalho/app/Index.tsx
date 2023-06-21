import { StatusBar } from 'expo-status-bar';
import { TextInput, Button, StyleSheet, Text, View, Image } from 'react-native';
import { Tabs } from "expo-router";
import { Link } from "expo-router";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}> Meu APP </Text>
      <Image source={require('../assets/JonChina.png')} />
      <TextInput
        style={styles.input}
        placeholder="Nome"
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        secureTextEntry
      />
      <TextInput
        style={styles.input}
        placeholder="Data de Nascimento"
      />
      <TextInput
        style={styles.input}
        placeholder="CPF"
        secureTextEntry
      />
      <Button title="Salvar" onPress={() => {}} />
      <Button title="Voltar" onPress={() => {}} />
      <Link href="/Home">Ir para a Home</Link>
      <StatusBar style="auto" />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

titulo: {
    fontSize: 35,
    fontWeight: 'bold',
  },

input: {
    width: '300px',
    height: 30,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 1,
    paddingHorizontal: 8,
  },
});