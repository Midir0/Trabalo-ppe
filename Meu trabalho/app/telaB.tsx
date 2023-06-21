import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Tabs } from "expo-router";
import { Link } from "expo-router";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}> Tela B </Text>
      <Image source={require('../assets/JonChina.png')} />
      <Text style={styles.texto}>Texto aleatório. Texto aleatório. Texto aleatório. Texto aleatório.</Text>
      <Link href="/telaC">Ir para a tela C</Link>
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
  texto: {
    fontSize: 25,
    width: '200px',
  }
});