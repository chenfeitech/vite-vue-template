/*
 * @Author: Lee
 * @Date: 2023-03-06 18:11:14
 * @LastEditors: Lee
 * @LastEditTime: 2023-03-06 18:15:55
 * @Description:
 */

export default {
  plugins: {
    autoprefixer: {
      overrideBrowserslist: [
        'Android 4.1',
        'iOS 7.1',
        'Chrome > 31',
        'ff > 31',
        'ie >= 8',
      ],
    },
    'postcss-pxtorem': {
      rootValue: 37.5, // Vant 官方根字体大小是 37.5
      propList: ['*'],
      selectorBlackList: ['.norem'], // 过滤掉.norem-开头的class，不进行rem转换
    },
  },
};
