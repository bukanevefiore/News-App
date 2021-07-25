/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { View, Text, SafeAreaView, FlatList, StyleSheet } from 'react-native';
import news_data from './news_data.json';
import NewsCard from './components/NewsCard/NewsCard';

function App() {
  /* <FlatList
          data={[1,2,3,4,5]}
          renderItem={data => <Text>{data.item}</Text>}/>  */

          const renderItem = ({item}) => <NewsCard news={item}/>;


  return (
    <SafeAreaView style={styles.container}>
      <View>

        <FlatList
          data={news_data}
          renderItem={renderItem}
          keyExtractor={(item ,index) => item.u_id.toString}
        />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#eceff1',
  
  }
})

export default App;