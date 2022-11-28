/*
 * @Author: Lee
 * @Date: 2022-11-25 16:21:15
 * @LastEditors: Lee
 * @LastEditTime: 2022-11-25 17:53:41
 * @Description:
 */
import { http } from "@/utils/request";

/** 登录接口 */
export function login(data: API.LoginParams) {
  return http.post<API.LoginResult>("/api/user/login", data);
}
