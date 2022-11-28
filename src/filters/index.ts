/*
 * @Author: Lee
 * @Date: 2022-11-25 17:11:39
 * @LastEditors: Lee
 * @LastEditTime: 2022-11-28 09:45:33
 * @Description:
 */
export interface FiltersProps {
  isBangScreen: () => boolean;
}
const filters: FiltersProps = {
  isBangScreen: () => {
    return window && window.screen.height >= 812 && window.devicePixelRatio >= 2;
  },
};
export default filters;
