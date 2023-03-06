import { http } from '@/utils/request';

export function records(data: { current: number; pageSize: number }) {
  return http.post<API.RecordItemProps[]>('/api/examples/records', data);
}

export function friends(data: {
  current: number;
  pageSize: number;
  queryFriendType: number /** 查询好友的类型 1, 直邀 2, 间接 */;
}) {
  return http.post<API.FriendsItemProps[]>('/api/examples/queryFriends', data);
}

export function task() {
  return http.post<API.TaskResponseProps>('/api/examples/task');
}

export function goldCoins(data: { current: number; pageSize: number }) {
  return http.post<API.ListItemProps[]>('/api/examples/goldCoins', data);
}
