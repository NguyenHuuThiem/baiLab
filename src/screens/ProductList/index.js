import { FlatList, Text, StyleSheet, Image } from "react-native";

export default function ProductList (props){
    const productList = [
        {id: 1, name: 'Nguyễn Hữu Thiêm', moTa: 'Đẹp trai'},
        {id: 2, name: 'Nguyễn Thị H', moTa: 'Xinh gái'},
    ];

    return (
        <FlatList 
        data={productList}

        //item là giao diện trả về sau mỗi vòng lặp
        renderItem={({item}) => (
            <>
            <Image 
            style={styles.tinyLogo}
            source={{uri:"data:image/png;base64,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"}}
            />
            <Text style = {styles.text}> Tên : {item.name}</Text>
            <Text> Mô tả: {item.moTa}</Text>
            </>
        )}

        // key là giá trị duy nhất trả về sau mỗi vòng lặp
        keyExtractor={(item) => item.id}
    />
  )
};

const styles = StyleSheet.create({
    tinyLogo: {
        width: 30,
        height: 30,
      },
});