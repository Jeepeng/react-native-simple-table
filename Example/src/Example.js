/**
 * Created by Jeepeng on 2016/11/20.
 */

import React, { Component } from 'react'
import {
  Platform,
  StyleSheet,
  View,
  Text
} from 'react-native'
import Table from 'react-native-simple-table'

import DataFactory from '../mock/DataFactory'

const columns = [
  {
    title: 'Mobile',
    dataIndex: 'mobile',
    width: 105
  },
  {
    title: 'Name',
    dataIndex: 'name',
    width: 140
  },
  {
    title: 'Age',
    dataIndex: 'age'
  },
  {
    title: 'Sex',
    dataIndex: 'sex'
  },
];

class Example extends Component {
  render() {
    let dataSource = DataFactory.generate().data;
    return (
      <View style={styles.container}>
        <Text style={styles.title}>react-native-simple-table</Text>
        <Table height={320} columnWidth={60} columns={columns} dataSource={dataSource} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    ...Platform.select({
      ios: {
        paddingTop: 20
      },
      android: {}
    }),
  },
  title: {
    fontSize: 18,
    padding: 10,
    textAlign: 'center'
  }
});

export default Example