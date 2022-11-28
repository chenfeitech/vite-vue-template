/*
 * @Author: Lee
 * @Date: 2022-11-25 17:52:59
 * @LastEditors: Lee
 * @LastEditTime: 2022-11-25 21:15:20
 * @Description:
 */
import { http } from "@/utils/request";

// 首页 - 任务
export function task() {
  return http.post<API.TaskResponseProps>("/test/task");
}

// 金币明细
export function goldCoins(data: { page: number; pageSize: number }) {
  return http.post<API.ListItemProps[]>("/test/goldCoins", data);
}

// 记录
export function records(data: { page: number; pageSize: number }) {
  return http.post<API.RecordItemProps[]>("/test/records", data);
}

// 好友列表
export function friends(data: { page: number; pageSize: number; queryFriendType: number /** 查询好友的类型 1, 直邀 2, 间接 */ }) {
  return http.post<API.FriendsItemType[]>("/test/queryFriends", data);
}
