/*
 * @Author: Lee
 * @Date: 2022-11-25 16:23:02
 * @LastEditors: Lee
 * @LastEditTime: 2022-11-28 09:47:10
 * @Description:
 */

import { FiltersProps } from "@/filters";
export {};

/********************
 ** 全局属性定义
 ********************/
declare module "@vue/runtime-core" {
  interface ComponentCustomProperties {
    $filters: FiltersProps;
  }
}

/********************
 ** 全局类型声明
 ********************/
declare global {
  interface Window {
    _hmt: any;
    wx: any;
    AMap: any;
    qq: any;
    AlipayJSBridge: any;
    CONFIG_URL_FOR_IOS: string;
  }

  declare namespace GD {
    /**********************
     ** 列表数据
     **********************/
    type ListProps<T = any> = {
      page: number;
      data: T;
      type: "refresh" | "load";
      isRefreshing: boolean;
      isLoading: boolean;
      isFinished: boolean;
    };
  }

  declare namespace API {
    /**********************
     ** 登录相关
     **********************/
    type LoginParams = {
      username: string;
      password: string;
    };
    type LoginResult = {
      token: string;
    };

    /**********************
     ** 首页
     **********************/
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

    type RecordItemProps = {
      amount: number;
      paymentStatus: number /** 提现状态 (0：处理中 1：成功 2：失败) */;
      withdrawTime: string;
    };

    type FriendsItemType = {
      avatar: string;
      nickName: string;
      activeStatus: number;
    };
  }
}
