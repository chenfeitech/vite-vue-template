/*
 * @Author: Lee
 * @Date: 2021-08-20 12:33:26
 * @LastEditors: Lee
 * @LastEditTime: 2021-12-17 14:19:10
 * @Description: 支付宝Api
 */
export interface AlipayLocationProps {
  longitude: string;
  latitude: string;
  country: string;
  city: string;
  pois: {
    address: string;
    name: string;
  }[];
  streetNumber: {
    number: string;
    street: string;
  };
}

class LibForAli {
  public static isIntalled(callback: Function) {
    // 如果jsbridge已经注入则直接调用
    if (window.AlipayJSBridge) {
      callback && callback();
    } else {
      // 如果没有注入则监听注入的事件
      // @ts-ignore
      window.document.addEventListener("AlipayJSBridgeReady", callback, false);
    }
  }
}
export default LibForAli;
