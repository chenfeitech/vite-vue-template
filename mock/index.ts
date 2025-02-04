/*
 * @Author: Lee
 * @Date: 2023-03-06 19:52:04
 * @LastEditors: Lee
 * @LastEditTime: 2023-03-06 20:36:06
 * @Description:
 */

import Mock from 'mockjs';

export default [
  {
    url: '/api/examples/records',
    method: 'POST',
    response: (req: any) => {
      const { current, pageSize } = req.body;
      return Mock.mock({
        code: 0,
        'data|15': [
          {
            'paymentStatus|1': [0, 1, 2],
            'amount|1-100': 100,
            withdrawTime: '@datetime("yyyy-MM-dd HH:mm")',
          },
        ],
        page: {
          current,
          pageSize,
          pages: 3,
          total: 30,
        },
      });
    },
  },
  {
    url: '/api/examples/queryFriends',
    method: 'POST',
    response: (req: any) => {
      const { current, pageSize } = req.body;
      return Mock.mock({
        code: 0,
        'data|15': [
          {
            avatar: "@Image('30x30','@color')",
            nickName: '@cname',
            'activeStatus|1': [0, 1],
          },
        ],
        page: {
          current,
          pageSize,
          pages: 3,
          total: 30,
        },
      });
    },
  },
  {
    url: '/api/examples/task',
    method: 'POST',
    response: () => ({
      code: 0,
      data: {
        signStatus: 0,
        count: 3700,
        amount: 0.37,
        videoCount: 24,
        residueCount: 24,
        videoSubTitle: '看视频得金币',
        inviteSubTitle: '每邀请1人激活账号，奖励1000金币',
        treasureSubTitle: '最高开出价值188元现金',
        treasureStatus: 1,
      },
      message: '参数有误',
    }),
  },
  {
    url: '/api/examples/goldCoins',
    method: 'POST',
    response: (req) => {
      const { current, pageSize } = req.body;
      return Mock.mock({
        code: 0,
        'data|15': [
          {
            'title|1': ['金币大转盘奖励', '好友帮我赚', '金币提现'],
            date: "@datetime('yyyy-MM-dd HH:mm:ss')",
            'count|0-1000': 1000,
            'status|1': [0, 1],
            failMsg:
              '按理说马拉松山卡拉啦塞拉斯拉拉手了按理说拉伸拉伸拉伸拉上按时',
          },
        ],
        page: {
          current,
          pageSize,
          pages: 3,
        },
      });
    },
  },
];
