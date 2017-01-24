/**
 * Created by Jeepeng on 2016/11/20.
 */

import mockjs, { Random } from 'mockjs'

export default class DataFactory {
  static generate() {
    return mockjs.mock({
      'data|1-20': [{
        'mobile|12300000000-12399999999': 1,
        'name|1': '@first @last',
        'age|18-80': 1,
        'sex|1': () => Random.pick(['male','female']),
      }]
    });
  }
}