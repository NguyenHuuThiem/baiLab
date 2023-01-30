import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import ProductList from './src/screens/ProductList';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Họ tên: Nguyễn Hữu Thiêm </Text>
      <Text>MSV: PH19987</Text>

      <Button
      title = {'Thêm mới'}
      />
      
      <ProductList style = {styles.text1}/>

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

  text1: {
    
  },
});
