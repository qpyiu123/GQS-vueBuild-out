// 简单的前端数据存储，便于调试与修改，未来可替换为后端 API 调用
export const MAP_ELEMENTS = [
  {
    id: 'stn-1',
    name: '测试1',
    type: '测试',
    coords: [31.2304, 121.4737],
    description: '示例  A/B 测试点。',
    details: '对吗？对的对的',
    works: '东北project',
    source: '示例数据集',
    image: 'src/data/img/测试.jpg'
  },
  {
    id: 'stn-2',
    name: '测试2',
    type: '测试',
    coords: [31.2404, 121.4837],
    description: '示例  A/B 测试点。',
    details: '对吗？对的对的',
    works: '东北project',
    source: '示例数据集',
    image: 'https://picsum.photos/seed/stn2/400/200'
  },
  {
    id: 'stn-3',
    name: '测试3',
    type: '测试',
    coords: [31.2204, 121.4637],
    description: '示例  A/B 测试点。',
    details: '对吗？对的对的',
    works: '东北project',
    source: '示例数据集',
    image: 'https://picsum.photos/seed/stn3/400/200'
  },
   {
    id: 'stn-4',
    name: '自由女神像',
    type: '电影',
    coords: [40.689217, -74.044483],
    description: '美国',
    details: '暂无',
    works: '流浪地球2',
    source: '示例数据集',
    image: 'src/data/img/球2-自由女神像.jpg'
  },
     {
    id: 'stn-5',
    name: '联合政府总部大楼',
    type: '电影',
    coords: [40.717339, -73.982964],
    description: '美国',
    details: '暂无',
    works: '流浪地球2',
    source: '示例数据集',
    image: 'src/data/img/球2-联合政府总部大楼.jpg'
  },
       {
    id: 'stn-6',
    name: '北京国贸',
    type: '电影',
    coords: [39.907695, 116.454434],
    description: '中国',
    details: '暂无',
    works: '流浪地球2',
    source: '示例数据集',
    image: 'src/data/img/球2-北京国贸.jpg'
  },
       {
    id: 'stn-7',
    name: '神栖市',
    type: '动漫',
    coords: [35.888807, 140.668473],
    description: '日本',
    details: '故事主舞台神栖66町对应的现实位置。',
    works: '来自新世界',
    source: '示例数据集',
    image: 'src/data/img/来自新世界-神栖市.jpg'
  },
         {
    id: 'stn-8',
    name: '南阿佐ヶ谷駅',
    type: '动漫',
    coords: [35.663015, 139.683609],
    description: '日本',
    details: '自动售货机和背后建筑已拆除，原址现为プラウド南阿佐ヶ谷。',
    works: '来自新世界',
    source: '示例数据集',
    image: 'src/data/img/来自新世界-南阿佐ヶ谷駅.jpg'
  },
      {
    id: 'stn-9',
    name: '(23-23)　サンタ・ルチア駅前３',
    type: '动漫',
    coords: [45.436165, 12.327304],
    description: '欧洲',
    details: 'AVVENIRE第 1 集 最后一幕',
    works: '水星领航员',
    source: '示例数据集',
    image: 'src/data/img/水星领航员.jpg'
  },
        {
    id: 'stn-10',
    name: '城嶺神社',
    type: '游戏',
    coords: [36.651219, 137.865930],
    description: '日本',
    details: '博丽神社原型，15年地震倒塌，已经迁移到旁边的新社了',
    works: '东方project',
    source: '示例数据集',
    image: 'src/data/img/车.jpg'
  },
]

// 预留的 API hook（示例），未来可替代为 fetch('/api/elements') 等
export async function fetchMapElements() {
  // 目前直接返回本地数据，未来替换为真正的后端调用
  return Promise.resolve(MAP_ELEMENTS)
}
