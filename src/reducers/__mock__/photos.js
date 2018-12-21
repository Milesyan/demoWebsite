function genTestPost(id, photos, hasText=true) {
  return {
    id,
    date: '2017-05-29',
    text: hasText ? '新年第一天，我的宝贝更乖了，吃完饺子主动要喝水，饭后乖乖吃水果，还会自己用毛巾擦嘴巴～\n哎呦我的小宝贝啊，妈妈怎么能不爱你呢～' : null,
    photos
  }
}
export const photoPosts = [
  genTestPost(100, [10], true),
  genTestPost(100, [1], true),
  genTestPost(100, [1], false),
  genTestPost(100, [4], false),
  genTestPost(100, [4], true),
  genTestPost(100, [1,2], true),
  genTestPost(100, [1,2], false),
  genTestPost(100, [5,4], true),
  genTestPost(100, [5,4], false),
  genTestPost(100, [1,2,3], true),
  genTestPost(100, [1,2,3], false),
  genTestPost(100, [5,4,4], true),
  genTestPost(100, [5,4,4], false),
  genTestPost(100, [1,2,3,6], true),
  genTestPost(100, [1,2,3,6], false),
  genTestPost(100, [5,4,4,5], true),
  genTestPost(100, [5,4,4,5], false),
  genTestPost(100, [1,2,3,6,7,7], true),
  genTestPost(100, [1,2,3,6,7,7], false),
  genTestPost(100, [5,4,4,5,4,5], true),
  genTestPost(100, [5,4,4,5,4,5], false),
  {
    id: 1,
    date: '2018-01-01',
    text: '新年第一天，我的宝贝更乖了，吃完饺子主动要喝水，饭后乖乖吃水果，还会自己用毛巾擦嘴巴～\n哎呦我的小宝贝啊，妈妈怎么能不爱你呢～',
    photos: [
      1,2,3,4,5,6, 7
    ],
  },
  {
    id: 2,
    text: '新年第一天，我的宝贝更乖了，吃完饺子主动要喝水，饭后乖乖吃水果，还会自己用毛巾擦嘴巴～\n哎呦我的小宝贝啊，妈妈怎么能不爱你呢～',
    date: '2018-02-02',
    photos: [
      11, 12,13, 14, 15, 16
    ],
  },
  {
    id: 3,
    text: '新年第一天，我的宝贝更乖了，吃完饺子主动要喝水，饭后乖乖吃水果，还会自己用毛巾擦嘴巴～\n哎呦我的小宝贝啊，妈妈怎么能不爱你呢～',
    date: '2018-03-03',
    photos: [
      17
    ],
  },
  {
    id: 4,
    text: '新年第一天，我的宝贝更乖了，吃完饺子主动要喝水，饭后乖乖吃水果，还会自己用毛巾擦嘴巴～\n哎呦我的小宝贝啊，妈妈怎么能不爱你呢～',
    date: '2018-04-04',
    photos: [
      20, 21, 22
    ],
  },
  {
    id: 5,
    text: '',
    date: '2018-10-05',
    photos: [
     23, 24, 25, 26
    ],
  },
  {
    id: 7,
    text: '新年第一天，我的宝贝更乖了，吃完饺子主动要喝水，饭后乖乖吃水果，还会自己用毛巾擦嘴巴～\n哎呦我的小宝贝啊，妈妈怎么能不爱你呢～',
    date: '2018-12-06',
    photos: [
      30, 31, 32, 33, 34, 35, 36, 37, 38
    ],
  },
  {
    id: 10,
    text: '新年第一天，我的宝贝更乖了，吃完饺子主动要喝水，饭后乖乖吃水果，还会自己用毛巾擦嘴巴～\n哎呦我的小宝贝啊，妈妈怎么能不爱你呢～',
    date: '2019-07-14',
    photos: [
      40, 41
    ]
  }
]

export const photos = {
  1: { id: 1, url: 'https://s3.cn-north-1.amazonaws.com.cn/glowstatic/app/solar/baby_photo/YLteG6SVL0TaQ3rp5POD3Q==/8070d164-3c76-43ad-9a4f-76066543eb06.jpg', width: null, height: null},
  2: { id: 2, url: 'https://s3.cn-north-1.amazonaws.com.cn/glowstatic/app/solar/baby_photo/YLteG6SVL0TaQ3rp5POD3Q==/84f118b1-f9ab-4e67-ad43-afaeef0f1b6b.jpg', width: null, height: null},
  3: { id: 3, url: 'https://s3.cn-north-1.amazonaws.com.cn/glowstatic/app/solar/baby_photo/YLteG6SVL0TaQ3rp5POD3Q==/d6e229e7-a7e4-4842-afab-71658513c823.jpg', width: null, height: null},
  4: { id: 4, url: 'https://s3.cn-north-1.amazonaws.com.cn/glowstatic/app/solar/baby_photo/YLteG6SVL0TaQ3rp5POD3Q==/fefef08d-9388-49fb-8480-e8b63ac42045.jpg', width: null, height: null},
  5: { id: 5, url: 'https://s3.cn-north-1.amazonaws.com.cn/glowstatic/app/solar/baby_photo/YLteG6SVL0TaQ3rp5POD3Q==/af42148d-f333-4c9a-97fb-6c76e426add1.jpg', width: null, height: null},
  6: { id: 6, url: 'https://s3.cn-north-1.amazonaws.com.cn/glowstatic/app/solar/baby_photo/YLteG6SVL0TaQ3rp5POD3Q==/fffb4bdd-e107-4ea4-a155-224ceccd785b.jpg', width: null, height: null},
  7: { id: 7, url: 'https://s3.cn-north-1.amazonaws.com.cn/glowstatic/app/solar/baby_photo/YLteG6SVL0TaQ3rp5POD3Q==/0600cd46-664a-4d52-8aa4-f189e8543a65.jpg', width: null, height: null},
 11: { id: 11, url: 'https://s3.cn-north-1.amazonaws.com.cn/glowstatic/app/solar/baby_photo/YLteG6SVL0TaQ3rp5POD3Q==/b398c351-8e27-4f88-b1dd-1e834f173cff.jpg', width: null, height: null },
 12: { id: 12, url: 'https://s3.cn-north-1.amazonaws.com.cn/glowstatic/app/solar/baby_photo/YLteG6SVL0TaQ3rp5POD3Q==/871dba48-5739-4d51-ba1a-1dee3e181bd8.jpg', width: null, height: null },
 13: { id: 13, url: 'https://s3.cn-north-1.amazonaws.com.cn/glowstatic/app/solar/baby_photo/YLteG6SVL0TaQ3rp5POD3Q==/b9554f6a-2a0e-41b2-af49-c092a7124721.jpg', width: null, height: null },
 14: { id: 14, url: 'https://s3.cn-north-1.amazonaws.com.cn/glowstatic/app/solar/baby_photo/YLteG6SVL0TaQ3rp5POD3Q==/df7aca70-c9ac-4053-8896-5c1cedb4b08d.jpg', width: null, height: null },
 15: { id: 15, url: 'https://s3.cn-north-1.amazonaws.com.cn/glowstatic/app/solar/baby_photo/YLteG6SVL0TaQ3rp5POD3Q==/1be5f4fd-6b44-4290-8a79-0b6998b4d537.jpg', width: null, height: null },
 16: { id: 16, url: 'https://s3.cn-north-1.amazonaws.com.cn/glowstatic/app/solar/baby_photo/YLteG6SVL0TaQ3rp5POD3Q==/44f8cddb-db38-408e-95cf-8724dee5ba7e.jpg', width: null, height: null },
 17: { id: 17, url: 'https://s3.cn-north-1.amazonaws.com.cn/glowstatic/app/solar/baby_photo/YLteG6SVL0TaQ3rp5POD3Q==/d1c386ae-a28d-4fbc-b595-ae61ee5705ea.jpg', width: null, height: null},
 20: { id: 20, url: 'https://s3.cn-north-1.amazonaws.com.cn/glowstatic/app/solar/baby_photo/YLteG6SVL0TaQ3rp5POD3Q==/0b3d57b6-23ba-4c54-aae8-394f8edfbbf9.jpg', width: null, height: null },
 21: { id: 21, url: 'https://s3.cn-north-1.amazonaws.com.cn/glowstatic/app/solar/baby_photo/YLteG6SVL0TaQ3rp5POD3Q==/a827a139-62aa-4335-b423-04f64ceff820.jpg', width: null, height: null },
 22: { id: 22, url: 'https://s3.cn-north-1.amazonaws.com.cn/glowstatic/app/solar/baby_photo/YLteG6SVL0TaQ3rp5POD3Q==/848840fe-778c-44dc-a919-54413a37d876.jpg', width: null, height: null },
 23: { id: 23, url: 'https://s3.cn-north-1.amazonaws.com.cn/glowstatic/app/solar/baby_photo/YLteG6SVL0TaQ3rp5POD3Q==/61583332-0668-4e4c-a8f8-70693d8c8ff0.jpg', width: null, height: null },
 24: { id: 24, url: 'https://s3.cn-north-1.amazonaws.com.cn/glowstatic/app/solar/baby_photo/YLteG6SVL0TaQ3rp5POD3Q==/4c841d39-cf1f-4d10-842b-9819b970a9b1.jpg', width: null, height: null },
 25: { id: 25, url: 'https://s3.cn-north-1.amazonaws.com.cn/glowstatic/app/solar/baby_photo/YLteG6SVL0TaQ3rp5POD3Q==/1200f51d-705f-4843-a58e-f0fa3cecb6da.jpg', width: null, height: null },
 26: { id: 26, url: 'https://s3.cn-north-1.amazonaws.com.cn/glowstatic/app/solar/baby_photo/YLteG6SVL0TaQ3rp5POD3Q==/1a62b3da-db48-4789-a04d-7dc5188ecd30.jpg', width: null, height: null },
 30: { id: 30, url: 'https://s3.cn-north-1.amazonaws.com.cn/glowstatic/app/solar/baby_photo/YLteG6SVL0TaQ3rp5POD3Q==/ef1dcb35-51a7-4dc7-8e10-0033ca51544b.jpg', width: null, height: null },
 31: { id: 31, url: 'https://s3.cn-north-1.amazonaws.com.cn/glowstatic/app/solar/baby_photo/YLteG6SVL0TaQ3rp5POD3Q==/3098b457-72a1-4d42-a5b8-9de2aaa3e024.jpg', width: null, height: null },
 32: { id: 32, url: 'https://s3.cn-north-1.amazonaws.com.cn/glowstatic/app/solar/baby_photo/YLteG6SVL0TaQ3rp5POD3Q==/4e429889-206e-4af4-a50a-fa3a9d517879.jpg', width: null, height: null },
 33: { id: 33, url: 'https://s3.cn-north-1.amazonaws.com.cn/glowstatic/app/solar/baby_photo/YLteG6SVL0TaQ3rp5POD3Q==/070ceae6-91dc-49e6-9d80-85c52aaf5d83.jpg', width: null, height: null },
 34: { id: 34, url: 'https://s3.cn-north-1.amazonaws.com.cn/glowstatic/app/solar/baby_photo/YLteG6SVL0TaQ3rp5POD3Q==/3c0b0ff3-7ad5-4e56-aca6-601f20887a49.jpg', width: null, height: null },
 35: { id: 35, url: 'https://s3.cn-north-1.amazonaws.com.cn/glowstatic/app/solar/baby_photo/YLteG6SVL0TaQ3rp5POD3Q==/f96a6eea-4052-4f25-9386-cc63bf719868.jpg', width: null, height: null },
 36: { id: 36, url: 'https://s3.cn-north-1.amazonaws.com.cn/glowstatic/app/solar/baby_photo/YLteG6SVL0TaQ3rp5POD3Q==/46d28403-f665-47e1-ac82-10bfd8799945.jpg', width: null, height: null },
 37: { id: 37, url: 'https://s3.cn-north-1.amazonaws.com.cn/glowstatic/app/solar/baby_photo/YLteG6SVL0TaQ3rp5POD3Q==/0ceaf536-d72d-4fc8-9c66-b670e5906cb0.jpg', width: null, height: null },
 38: { id: 38, url: 'https://s3.cn-north-1.amazonaws.com.cn/glowstatic/app/solar/baby_photo/YLteG6SVL0TaQ3rp5POD3Q==/c636620a-518e-435f-a1c2-fa12b97d6183.jpg', width: null, height: null },
 40: { id: 40, url: 'https://s3.cn-north-1.amazonaws.com.cn/glowstatic/app/solar/baby_photo/YLteG6SVL0TaQ3rp5POD3Q==/acb39bbd-9aa5-4d4a-8d91-fc75489133f4.jpg', width: null, height: null },
 41: { id: 41, url: 'https://s3.cn-north-1.amazonaws.com.cn/glowstatic/app/solar/baby_photo/YLteG6SVL0TaQ3rp5POD3Q==/624ab2ec-0747-46b4-a1bb-037b23207d59.jpg', width: null, height: null },
}