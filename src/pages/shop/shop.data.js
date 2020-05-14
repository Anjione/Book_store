const SHOP_DATA = [
  {
    id: 1,
    title: 'pháp luật',
    routeName: 'phapluat',
    items: [
      {
        id: 1,
        name: 'Luật đất đai',
        imageUrl: 'https://i.imgur.com/19GcVD0.jpg',
        price: 25
      },
      {
        id: 2,
        name: 'Bộ luật Lao động 2019',
        imageUrl: 'https://i.imgur.com/eTiVjZ4.jpg',
        price: 18
      },
      {
        id: 3,
        name: 'Sổ tay pháp luật bất động sản',
        imageUrl: 'https://i.imgur.com/NZQVUSp.jpg',
        price: 35
      },
      {
        id: 4,
        name: 'Bộ Luật lao động',
        imageUrl: 'https://i.imgur.com/euGl64O.jpg',
        price: 25
      },
      {
        id: 5,
        name: 'Giáo trình luật hành chính Việt Nam',
        imageUrl: 'https://i.imgur.com/pMcgIpj.jpg',
        price: 18
      },
      {
        id: 6,
        name: 'Luật 101 - Mọi điều cần biết về pháp luật Hoa Kì',
        imageUrl: 'https://i.imgur.com/safvA2D.jpg',
        price: 14
      },
      {
        id: 7,
        name: 'Luật an ninh mạng 2018',
        imageUrl: 'https://i.imgur.com/i8jbKsC.jpg',
        price: 18
      },
      {
        id: 8,
        name: 'Luật đất đai',
        imageUrl: 'https://i.imgur.com/YEeghLh.jpg',
        price: 14
      },
      {
        id: 9,
        name: 'Luật thương mại',
        imageUrl: 'https://i.imgur.com/VV9NjAW.jpg',
        price: 16
      }
    ]
  },
  {
    id: 2,
    title: 'khoa học-công nghệ',
    routeName: 'khoahoccongnghe',
    items: [
      {
        id: 10,
        name: '6 phát minh làm nên thời đại',
        imageUrl: 'https://i.imgur.com/rHhCyTo.jpg',
        price: 220
      },
      {
        id: 11,
        name: 'AI trong cuộc cách mạng công nghệ 4.0',
        imageUrl: 'https://i.imgur.com/pI9nIca.jpg',
        price: 280
      },
      {
        id: 12,
        name: 'Cuộc cách mạng AI',
        imageUrl: 'https://i.imgur.com/fMAr8mn.jpg',
        price: 110
      },
      {
        id: 13,
        name: 'Chạy đua với Robot',
        imageUrl: 'https://i.imgur.com/SsMVYK3.jpg',
        price: 160
      },
      {
        id: 14,
        name: 'BLOCKCHAIN',
        imageUrl: 'https://i.imgur.com/4jHlYha.jpg',
        price: 160
      },
      {
        id: 15,
        name: 'Algorithms',
        imageUrl: 'https://i.imgur.com/IZE1Dvp.jpg',
        price: 160
      },
      {
        id: 16,
        name: 'Gián điệp mạng',
        imageUrl: 'https://i.imgur.com/W9kPBli.jpg',
        price: 190
      },
      {
        id: 17,
        name: 'Các thế giới song song',
        imageUrl: 'https://i.imgur.com/LffZ9YM.jpg',
        price: 200
      }
    ]
  },
  {
    id: 3,
    title: 'kĩ năng',
    routeName: 'kinang',
    items: [
      {
        id: 18,
        name: 'Cuộc chơi đầu tư mạo hiểm',
        imageUrl: 'https://i.imgur.com/6yoMyGh.jpg',
        price: 125
      },
      {
        id: 19,
        name: 'Đọc vị khách hàng',
        imageUrl: 'https://i.imgur.com/uRFimIG.jpg',
        price: 90
      },
      {
        id: 20,
        name: 'Giải pháp cho đổi mới và sáng tạo',
        imageUrl: 'https://i.imgur.com/OlhG4qX.jpg',
        price: 90
      },
      {
        id: 21,
        name: 'Hùng mạnh hơn sau khủng hoảng ',
        imageUrl: 'https://i.imgur.com/7necKCi.jpg',
        price: 165
      },
      {
        id: 22,
        name: 'Kĩ năng đi trước đam mê',
        imageUrl: 'https://i.imgur.com/DtxjVay.jpg',
        price: 185
      }
    ]
  },
  {
    id: 4,
    title: 'văn học',
    routeName: 'vanhoc',
    items: [
      {
        id: 23,
        name: 'Cuộc đời ngoài cửa',
        imageUrl: 'https://i.imgur.com/iPzrLrC.jpg',
        price: 25
      },
      {
        id: 24,
        name: 'Điều bí mật',
        imageUrl: 'https://i.imgur.com/NBRYDYt.jpg',
        price: 20
      },
      {
        id: 25,
        name: 'Đường chân trời đẫ mất',
        imageUrl: 'https://i.imgur.com/PnfAsAg.jpg',
        price: 80
      },
      {
        id: 26,
        name: 'Làm dĩ',
        imageUrl: 'https://i.imgur.com/xJdqqTw.jpg',
        price: 80
      },
      {
        id: 27,
        name: 'Những chàng trai xấu tính',
        imageUrl: 'https://i.imgur.com/DG1RxPj.jpg',
        price: 45
      },
      {
        id: 28,
        name: 'Sách của bạn tôi',
        imageUrl: 'https://i.imgur.com/d4BYdGr.jpg',
        price: 135
      },
      {
        id: 29,
        name: 'Số đỏ',
        imageUrl: 'https://i.imgur.com/PgUu9Cv.jpg',
        price: 20
      }
    ]
  },
  {
    id: 5,
    title: 'Thiếu nhi',
    routeName: 'thieunhi',
    items: [
      {
        id: 30,
        name: 'Thân gửi sở thú',
        imageUrl: 'https://i.imgur.com/X0rrsQp.jpg',
        price: 325
      },
      {
        id: 31,
        name: 'Cây táo yêu thương',
        imageUrl: 'https://i.imgur.com/ODu6XDj.jpg',
        price: 20
      },
      {
        id: 32,
        name: 'Mẹ có phải là mẹ của con ?',
        imageUrl: 'https://i.imgur.com/73oddUr.jpg',
        price: 25
      },
      {
        id: 33,
        name: 'Alice ở xứ sở diệu kỳ',
        imageUrl: 'https://i.imgur.com/2Reep1W.jpg',
        price: 25
      },
      {
        id: 34,
        name: 'Roald Dahl Charli và nhà máy sôcôla ',
        imageUrl: 'https://i.imgur.com/f6Zg13K.jpg',
        price: 40
      },
      {
        id: 35,
        name: 'Cuộc phiêu lưu của pinocchio',
        imageUrl: 'https://i.imgur.com/m0O44HH.jpg',
        price: 25
      }
    ]
  }
];

export default SHOP_DATA;