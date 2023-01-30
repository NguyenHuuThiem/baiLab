
import React,{Component, useState} from 'react';
import { StyleSheet, Text, View,style, Button, TextInput } from 'react-native';
import ProductList from './src/screens/ProductList';
import ProductText, { ProductImage, ProductImage2 } from './src/screens/ProductText';
export default function App() {
  const [showStatus, setShowStatus] = useState(true);
  const [name,setname] = useState('');
  const [mota,setmota] = useState('');
  return (
    <View style={styles.container}>
      <View  style={styles.top}>
      <Text>Họ tên : Nguyễn Hữu Thiêm </Text>
      <Text>MSV : PH19987</Text>
      </View>
      <View style={styles.button}>
        <Button 
        title='Thêm mới'
        onPress={() => setShowStatus(!showStatus)}
        />
        {
        showStatus
        ?
        <>
        <TextInput
        onChangeText={(txt) => setname(txt)}
        value = {name}
        placeholder = 'Tên'
        />
        <TextInput
        onChangeText={(txt) => setmota(txt)}
        value = {mota}
        placeholder = 'Mô tả'
        />
        <TextInput
        onChangeText={(txt) => setmota(txt)}
        value = {mota}
        placeholder = 'Link'
        />
        <Button
        title='Lưu'
        onPress={() => setShowStatus(false)}
        />
        </>
        : null
        }

      </View>
       <View>
       <View style = {styles.textbottommota}>
       <ProductList />
       </View>
       </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex : 1,
    backgroundColor : '#FFFFFF',
  },
  top : {
    marginTop : 40
  },
  button: {
    marginTop : 80,
    backgroundColor : '#E0FFFF',
    marginLeft : 100,
    marginRight : 100,
    borderWidth : 2,
    borderColor : 'blue'
    
  },

  textbottommota : {
    flexDirection : 'column',
    paddingTop : 20,
    paddingLeft : 100,


  }

  });
