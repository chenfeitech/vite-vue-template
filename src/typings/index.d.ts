/*
 * @Author: Lee
 * @Date: 2023-03-06 18:51:12
 * @LastEditors: Lee
 * @LastEditTime: 2023-03-06 20:15:39
 * @Description:
 */

export {};

// -- 全局组件属性定义
import { FiltersProps } from '@/filters';
declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $filters: FiltersProps;
  }
}

declare global {
  // 👉 定义全局属性
  interface Window {
    /** 百度统计 */
    _hmt: any;
    /** 微信S*/
    wx: any;
    /** 百度地图 */
    AMap: any;
    /** 腾讯地图 */
    qq: any;
    /** 支付宝 */
    AlipayJSBridge: any;
    /** iOS回调地址 */
    CONFIG_URL_FOR_IOS: string;
  }
  // 👉 定义API数据类型
  declare namespace API {
    /**********************
     ** 列表页
     **********************/
    type ListProps<T = any> = {
      page: number;
      data: T;
      type: 'refresh' | 'load';
      isRefreshing: boolean;
      isLoading: boolean;
      isFinished: boolean;
    };

    /**********************
     ** Examples
     **********************/
    type RecordItemProps = {
      amount: number;
      paymentStatus: number /** 提现状态 (0：处理中 1：成功 2：失败) */;
      withdrawTime: string;
    };
    type FriendsItemProps = {
      avatar: string;
      nickName: string;
      activeStatus: number;
    };
    type TaskResponseProps = {
      signStatus: number;
      count: number;
      amount: number;
      videoCount: number;
      residueCount: number;
      videoSubTitle: string;
      inviteSubTitle: string;
      treasureSubTitle: string;
      treasureStatus: number;
    };
    type ListItemProps = {
      title: string;
      date: string;
      count: number;
      status: number;
      failMsg: string;
    };
  }
}
