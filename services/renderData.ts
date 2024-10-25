import {Feature, Geometry, GeoJsonProperties} from 'geojson';

export const OnboardingData = [
  {
    title: 'Kết nối yêu thương',
    description:
      'Cùng bạn tìm kiếm và xác định mộ của người thân thất lạc, mang lại cơ hội tìm lại ký ức và tình yêu đã mất',
    img: require('../assets/Onboarding/o1.png'),
  },
  {
    title: 'Tìm Kiếm Thông Tin Mộ',
    description:
      'Nhập thông tin về người thân hoặc mộ cần tìm,  hệ thống sẽ giúp bạn tra cứu nhanh chóng các kết quả liên quan bằng việc số hóa bia mộ liệt sĩ.',
    img: require('../assets/Onboarding/o2.png'),
  },
  {
    title: 'Giúp Đỡ Cộng Đồng',
    description:
      'Nếu bạn tìm thấy một ngôi mộ không rõ danh tính, hãy báo cáo để giúp gia đình người khác tìm lại người thân của họ',
    img: require('../assets/Onboarding/o3.png'),
  },
  {
    title: 'Công Nghệ Xác Định ADN Hiện Đại',
    description:
      'Hợp tác với các cơ quan để giúp xác định ADN, hỗ trợ việc tìm kiếm và xác minh danh tính một cách chính xác',
    img: require('../assets/Onboarding/o4.png'),
  },
  {
    title: 'Không gian nhân văn',
    description:
      'Tạo không gian để các gia đình có thể hỗ trợ và chia sẻ kinh nghiệm trong việc tìm kiếm và tưởng niệm người thân',
    img: require('../assets/Onboarding/o5.png'),
  },
];

export const CheckStartPage = {
  title: 'Hành trình tìm lại yêu thương bắt đầu',
  description:
    'Hãy bắt đầu hành trình của bạn để tìm lại người thân và hỗ trợ cộng đồng cùng “Dấu chân Ký Ức"',
  img: require('../assets/Onboarding/o6.png'),
};

export const MartyrProfile = [
  {
    giayBaoTu: null,
    banTrichLuc: null,
    giayNoiHisinh: null,
    giayKhac: null,
    img: null,
    letterImg: null,
    titleImg: null,
    name: 'Lâm Hữu Sinh',
    birthYear: '1930',
    sex: 'Nam',
    hometown: 'Xã Tượng Văn, huyện Công Nống, tỉnh Thanh Hóa',
    armyJoinDate: '7/1949',
    level: 'Trung sĩ',
    unit: 'Đội 2, Tiểu đoàn 1, Sư đoàn 308',
    deathDate: '24/10/1952',
    deathUnit: 'D3, QK5',
    deathReason: 'Máu đổ',
    firstTomb: 'Điện Thái, Điện Bàn, Quảng Đà',
    fatherName: 'Lâm Hữu Sinh',
    motherName: 'Lê Thị Thanh',
    yourRelationshipWithMartyr: 'Cháu trai',
    description: '',
    status: 2,
    uploadDate: '19/10/2024',
  },
  {
    giayBaoTu: null,
    banTrichLuc: null,
    giayNoiHisinh: null,
    giayKhac: null,
    img: require('../assets/Home/foundMartyr.png'),
    letterImg: null,
    titleImg: null,
    name: 'Nguyễn Văn Đức',
    birthYear: '1947',
    sex: 'Nam',
    hometown: 'Liên Sơn, Bái Thạch, Vĩnh Phúc',
    armyJoinDate: '11/1966',
    level: 'Trung sĩ',
    unit: 'Đội 2, Tiểu đoàn 1, Sư đoàn 308',
    deathDate: '24/10/1952',
    deathUnit: 'D3, QK5',
    deathReason: 'Máu đổ',
    firstTomb: 'Điện Thái, Điện Bàn, Quảng Đà',
    fatherName: 'Lâm Hữu Sinh',
    motherName: 'Lê Thị Thanh',
    yourRelationshipWithMartyr: 'Cháu trai',
    description: '',
    status: 4,
    uploadDate: '19/10/2024',
  },
];

export const HomeNewsData = [
  {
    img: require('../assets/Home/1.png'),
    status: 'Tìm mộ thành công',
    date: '19/10/2024',
    title: 'Liệt sĩ Mai Xuân Tiếp',
    description: 'Đồng Tâm, Bá Thước, Thanh Hóa',
  },
  {
    img: require('../assets/Home/2.png'),
    status: 'Phát hiện mộ lạ',
    date: '19/10/2024',
    title: 'Phát hiện hố chôn tập thể nghi mộ liệt sĩ cạnh quốc lộ 19',
    description: 'H. Đak Pơ, tỉnh Gia Lai',
  },
];

export const MapListData = [
  {
    title: 'H.Hường Hóa',
    city: 'Quảng Trị',
    img: require('../assets/Home/tp1.png'),
  },
  {
    title: 'H. Vĩnh Linh',
    city: 'Quảng Trị',
    img: require('../assets/Home/tp2.png'),
  },
];

export const MartyrProfileListData = [
  require('../assets/Home/q1.png'),
  require('../assets/Home/q2.png'),
  require('../assets/Home/q3.png'),
  require('../assets/Home/q4.png'),
  require('../assets/Home/q5.png'),
  require('../assets/Home/q7.png'),
  require('../assets/Home/q9.png'),
];

export const ProvinceList = [
  {label: 'Hà Nội', value: 'hanoi'},
  {label: 'Hồ Chí Minh', value: 'hochiminh'},
  {label: 'Đà Nẵng', value: 'danang'},
  {label: 'Hải Phòng', value: 'haiphong'},
  {label: 'Cần Thơ', value: 'cantho'},
  {label: 'Quảng Ninh', value: 'quangninh'},
  {label: 'Khánh Hòa', value: 'khanhhoa'},
];

export const Page1TopData = [
  'Giấy báo tử',
  'Bản trích lục',
  'Giấy xác nhận thông tin nơi hi sinh',
  'Giấy tờ khác',
];

export const Page1BottomData = ['Ảnh', 'Thư tay (chữ viết)'];

export const StatusData = [
  'Yêu cầu tìm mộ liệt sĩ',
  'Xác nhận hồ sơ',
  'Yêu cầu bổ sung',
  'Đang tìm kiếm',
  'Đã tìm thấy',
  'Nhân thân nhận mộ',
  'Hoàn tất',
];

export const CommunityTab1Data = [
  {
    user: 'Bùi Văn Tám',
    avatar: require('../assets/Community/newest/a2.png'),
    feed: 'Gia đình đã tìm được hài cốt liệt sĩ Bùi Văn Vịnh sau bao năm thất lạc. Cảm ơn “Dấu chân Anh Linh", chính quyền nhà nước, cộng đồng đã chung tay giúp sức cho gia đình được đoàn tụ.',
    postImg: [require('../assets/Community/newest/1.png')],
    like: 50,
    comment: 20,
    yourLike: false,
    time: '2 giờ trước',
    postStatus: 'biết ơn',
  },
  {
    user: 'Phương Anh',
    avatar: require('../assets/Community/newest/a2.png'),
    feed: 'Tìm phần mộ Liệt sỹ: Kính gửi các Bác, các Cô/Chú, Bác cháu là Liệt sỹ Trịnh Đình Dương, hiện nay gia đình cháu còn những giấy tờ thông tin như ảnh. Rất mong mọi người chia sẻ giúp gia đình cháu để sớm tìm được phần mộ của bác cháu ạ.',
    postImg: [
      require('../assets/Community/newest/2.png'),
      require('../assets/Community/newest/3.png'),
      require('../assets/Community/newest/4.png'),
      require('../assets/Community/newest/5.png'),
    ],
    like: 22,
    comment: 14,
    yourLike: false,
    time: '4 giờ trước',
    postStatus: 'cần trợ giúp',
  },
  {
    user: 'Hồ Sĩ Nguyên',
    avatar: require('../assets/Community/newest/a1.png'),
    feed: 'Gia đình đã tìm được hài cốt liệt sĩ Bùi Văn Vịnh sau bao năm thất lạc. Cảm ơn “Dấu chân Anh Linh", chính quyền nhà nước, cộng đồng đã chung tay giúp sức cho gia đình được đoàn tụ.',
    postImg: [
      require('../assets/Community/newest/6.png'),
      require('../assets/Community/newest/7.png'),
      require('../assets/Community/newest/8.png'),
    ],
    like: 40,
    comment: 5,
    yourLike: false,
    time: '6 giờ trước',
    postStatus: '',
  },
];

export const CommunityTab2Data = [
  {
    user: 'Trần Thanh Tâm',
    avatar: require('../assets/Community/newest/a3.png'),
    feed: 'Hành trình  tìm kiếm mộ liệt sĩ mà bạn theo dõi vừa thay đổi trạng thái:',
    postImg: [require('../assets/Community/newest/9.png')],
    like: 22,
    comment: 10,
    yourLike: false,
    time: '34 phút trước',
    postStatus: 'biết ơn',
  },
  {
    user: 'Phương Anh',
    avatar: require('../assets/Community/newest/a1.png'),
    feed: 'KẾ HOẠCH DI CHUYỂN HÀI CỐT LIỆT SĨ VỀ QUÊ NGÀY 24/09/2024:',
    postImg: [
      require('../assets/Community/newest/2.png'),
      require('../assets/Community/newest/3.png'),
    ],
    like: 22,
    comment: 14,
    yourLike: false,
    time: '4 giờ trước',
    postStatus: 'cần trợ giúp',
  },
];

export const CommunityTab3Data = [
  {
    user: 'Lê Công Duy (bạn)',
    avatar: require('../assets/Home/avatar.png'),
    feed: 'Bạn vừa tải lên một yêu cầu tìm kiếm',
    postImg: [require('../assets/Community/newest/11.png')],
    like: 22,
    comment: 10,
    yourLike: true,
    time: '34 phút trước',
    postStatus: '',
  },
  {
    user: 'Lê Công Duy (bạn)',
    avatar: require('../assets/Home/avatar.png'),
    feed: 'Hành trình ý nghĩa',
    postImg: [require('../assets/Community/newest/10.png')],
    like: 11,
    comment: 14,
    yourLike: true,
    time: '18/09/2024',
    postStatus: '',
  },
];

export const avatarList = [
  require('../assets/Community/newest/a1.png'),
  require('../assets/Community/newest/a2.png'),
  require('../assets/Community/newest/a3.png'),
];

export const userAvatar = require('../assets/Home/avatar.png');

export const colors = [
  '#FFFFFF', // White
  '#FFEEEE', // Very light pink
  '#FFCCCC', // Light pink
  '#FFAAAA', // Pale red
  '#FF8888', // Soft red
  '#FF6666', // Medium red
  '#FF4444', // Bright red
  '#FF2222', // Intense red
  '#8B0000', // Blood red
];

const getRandomColor = () => {
  return colors[Math.floor(Math.random() * colors.length)];
};

export const MapLocation: Feature<Geometry, GeoJsonProperties>[] = [
  // Northern Vietnam
  {
    type: 'Feature',
    properties: {name: 'Hà Nội', color: getRandomColor()},
    geometry: {type: 'Point', coordinates: [105.8342, 21.0278]},
  },
  {
    type: 'Feature',
    properties: {name: 'Hải Phòng', color: getRandomColor()},
    geometry: {type: 'Point', coordinates: [106.686, 20.8449]},
  },
  {
    type: 'Feature',
    properties: {name: 'Quảng Ninh', color: getRandomColor()},
    geometry: {type: 'Point', coordinates: [107.2654, 21.1325]},
  },
  {
    type: 'Feature',
    properties: {name: 'Bắc Ninh', color: getRandomColor()},
    geometry: {type: 'Point', coordinates: [106.0584, 21.1825]},
  },
  {
    type: 'Feature',
    properties: {name: 'Thái Nguyên', color: getRandomColor()},
    geometry: {type: 'Point', coordinates: [105.836, 21.5942]},
  },
  {
    type: 'Feature',
    properties: {name: 'Lào Cai', color: getRandomColor()},
    geometry: {type: 'Point', coordinates: [103.9564, 22.3392]},
  },
  {
    type: 'Feature',
    properties: {name: 'Điện Biên', color: getRandomColor()},
    geometry: {type: 'Point', coordinates: [103.015, 21.386]},
  },
  {
    type: 'Feature',
    properties: {name: 'Thanh Hóa', color: getRandomColor()},
    geometry: {type: 'Point', coordinates: [105.7728, 19.808]},
  },
  {
    type: 'Feature',
    properties: {name: 'Nghệ An', color: getRandomColor()},
    geometry: {type: 'Point', coordinates: [105.698, 19.2343]},
  },
  {
    type: 'Feature',
    properties: {name: 'Hà Giang', color: getRandomColor()},
    geometry: {type: 'Point', coordinates: [104.9997, 22.7745]},
  },

  // Southern Vietnam
  {
    type: 'Feature',
    properties: {name: 'Hồ Chí Minh', color: getRandomColor()},
    geometry: {type: 'Point', coordinates: [106.6297, 10.8231]},
  },
  {
    type: 'Feature',
    properties: {name: 'Đồng Nai', color: getRandomColor()},
    geometry: {type: 'Point', coordinates: [107.08, 11.144]},
  },
  {
    type: 'Feature',
    properties: {name: 'Bình Dương', color: getRandomColor()},
    geometry: {type: 'Point', coordinates: [106.6753, 11.1735]},
  },
  {
    type: 'Feature',
    properties: {name: 'Cần Thơ', color: getRandomColor()},
    geometry: {type: 'Point', coordinates: [105.7654, 10.0452]},
  },
  {
    type: 'Feature',
    properties: {name: 'Vĩnh Long', color: getRandomColor()},
    geometry: {type: 'Point', coordinates: [105.9432, 10.2514]},
  },
  {
    type: 'Feature',
    properties: {name: 'Tiền Giang', color: getRandomColor()},
    geometry: {type: 'Point', coordinates: [106.363, 10.4494]},
  },
  {
    type: 'Feature',
    properties: {name: 'Bến Tre', color: getRandomColor()},
    geometry: {type: 'Point', coordinates: [106.3777, 10.2333]},
  },
  {
    type: 'Feature',
    properties: {name: 'An Giang', color: getRandomColor()},
    geometry: {type: 'Point', coordinates: [105.4237, 10.5206]},
  },
  {
    type: 'Feature',
    properties: {name: 'Kiên Giang', color: getRandomColor()},
    geometry: {type: 'Point', coordinates: [104.983, 10.0121]},
  },
  {
    type: 'Feature',
    properties: {name: 'Bà Rịa - Vũng Tàu', color: getRandomColor()},
    geometry: {type: 'Point', coordinates: [107.0843, 10.4112]},
  },
];
