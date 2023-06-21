import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Tabs } from "expo-router";
import { Link } from "expo-router";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}> Home </Text>
      <Image source={require('../assets/JonChina.png')} />
      <Link href="/telaB">Ir para a tela B</Link>
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
  }
});