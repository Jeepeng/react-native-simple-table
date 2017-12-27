/**
 * Created by Jeepeng on 2016/11/20.
 */

import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  ScrollView,
  Text
} from 'react-native'
import PropTypes from 'prop-types'

const DEFAULT_HEIGHT = 240;
const DEFAULT_COLUMN_WIDTH = 60;

class Table extends Component {

  static propTypes = {
    columns: PropTypes.arrayOf(PropTypes.shape({
      title: PropTypes.string.isRequired,
      dataIndex: PropTypes.string.isRequired,
      width: PropTypes.number
    })).isRequired,
    columnWidth: PropTypes.number,
    height: PropTypes.number,
    dataSource: PropTypes.array.isRequired,
    renderCell: PropTypes.func,
  };

  static defaultProps = {
    columns: [],
    dataSource: [],
    columnWidth: DEFAULT_COLUMN_WIDTH,
    height: DEFAULT_HEIGHT,
    renderCell: undefined
  };

  _renderCell(cellData, col) {
    let style = {width: col.width || this.props.columnWidth || DEFAULT_COLUMN_WIDTH};
    return (
      <View key={col.dataIndex} style={[styles.cell, style]}>
        <Text>{cellData}</Text>
      </View>
    )
  }

  _renderHeader() {
    let { columns, columnWidth } = this.props;
    return columns.map((col, index) => {
      let style = {width: col.width || columnWidth || DEFAULT_COLUMN_WIDTH};
      return (
        <View key={index} style={[styles.headerItem, style]}>
          <Text>{col.title}</Text>
        </View>
      )
    })
  }

  _renderRow(rowData, index) {
    let { columns, renderCell } = this.props;
    if(!renderCell) {
      renderCell = this._renderCell.bind(this, );
    }
    return (
      <View key={index} style={styles.row}>
        {
          columns.map(col => renderCell(rowData[col.dataIndex], col))
        }
      </View>
    );
  }

  render() {
    let { dataSource, height } = this.props;
    return (
      <ScrollView
        style={styles.container}
        contentContainerStyle={[styles.contentContainer , { height }]}
        horizontal={true}
        bounces={false} >
        <View>
          <View style={styles.header}>
            { this._renderHeader() }
          </View>
          <ScrollView
            style={styles.dataView}
            contentContainerStyle={styles.dataViewContent} >
            { dataSource.map((rowData, index) => this._renderRow(rowData, index)) }
          </ScrollView>
        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
  },
  contentContainer: {
    height: 240
  },
  header: {
    flexDirection: 'row',
  },
  headerItem: {
    minHeight: 30,
    width: DEFAULT_COLUMN_WIDTH,
    backgroundColor: '#efefef',
    borderRightWidth: 1,
    borderRightColor: '#dfdfdf',
    alignItems: 'center',
    justifyContent: 'center'
  },
  dataView: {
    flexGrow: 1,
  },
  dataViewContent: {
  },
  row: {
    flexDirection: 'row',
    backgroundColor: '#fbfbfb',
    borderBottomWidth: 1,
    borderBottomColor: '#dfdfdf',
  },
  cell: {
    minHeight: 25,
    width: DEFAULT_COLUMN_WIDTH,
    backgroundColor: 'transparent',
    borderRightWidth: 1,
    borderRightColor: '#dfdfdf',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default Table
