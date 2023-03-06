/*
 * @Author: Lee
 * @Date: 2023-03-06 19:12:02
 * @LastEditors: Lee
 * @LastEditTime: 2023-03-06 19:12:09
 * @Description:
 */

export interface FiltersProps {
  isBangScreen: () => boolean;
}
const filters: FiltersProps = {
  /**
   * 判断是否是刘海屏
   * @returns
   */
  isBangScreen: () => {
    return (
      window && window.screen.height >= 812 && window.devicePixelRatio >= 2
    );
  },
};
export default filters;
