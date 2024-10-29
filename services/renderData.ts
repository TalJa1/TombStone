import {Feature, Geometry, GeoJsonProperties} from 'geojson';
import {MartyrSearchViewDataProps, TombListProps} from './typeProps';

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
  {
    giayBaoTu: null,
    banTrichLuc: null,
    giayNoiHisinh: null,
    giayKhac: null,
    img: null,
    letterImg: null,
    titleImg: null,
    name: 'Nguyễn Văn Đạt',
    birthYear: '1947',
    sex: 'Nam',
    hometown: 'Liên Sơn, Bái Thạch, Vĩnh Phúc',
    armyJoinDate: '11/1966',
    level: 'Trung sĩ',
    unit: 'Đội 2, Tiểu đoàn 1, Sư đoàn 308',
    deathDate: '28/11/1966',
    deathUnit: 'D3, QK5',
    deathReason: 'Máu đổ',
    firstTomb: 'Điện Thái, Điện Bàn, Quảng Đà',
    fatherName: 'Lâm Hữu Sinh',
    motherName: 'Lê Thị Thanh',
    yourRelationshipWithMartyr: 'Bác trai út (họ mẹ)',
    description: '',
    status: 6,
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
  {
    img: require('../assets/Home/4.png'),
    status: 'Tìm mộ thành công',
    date: '20/10/2024',
    title: 'Liệt sĩ Bùi Văn Vinh',
    description: 'Phường 1, Quận 5, TP. Hồ Chí Minh',
  },
  {
    img: require('../assets/Home/2.png'),
    status: 'Phát hiện mộ lạ',
    date: '21/10/2024',
    title: 'Phát hiện mộ liệt sĩ tại khu vực rừng núi',
    description: 'H. Lạc Dương, tỉnh Lâm Đồng',
  },
  {
    img: require('../assets/Home/3.png'),
    status: 'Tìm mộ thành công',
    date: '22/10/2024',
    title: 'Liệt sĩ Hồ Đức Quỳnh',
    description: 'Xã Bình Minh, H. Bình Chánh, TP. Hồ Chí Minh',
  },
  {
    img: require('../assets/Home/2.png'),
    status: 'Phát hiện mộ lạ',
    date: '23/10/2024',
    title: 'Phát hiện mộ liệt sĩ tại khu vực biên giới',
    description: 'H. Mộc Châu, tỉnh Sơn La',
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

  // Central Vietnam
  {
    type: 'Feature',
    properties: {name: 'Đà Nẵng', color: getRandomColor()},
    geometry: {type: 'Point', coordinates: [108.2208, 16.0471]},
  },
  {
    type: 'Feature',
    properties: {name: 'Huế', color: getRandomColor()},
    geometry: {type: 'Point', coordinates: [107.5797, 16.4674]},
  },
  {
    type: 'Feature',
    properties: {name: 'Quảng Nam', color: getRandomColor()},
    geometry: {type: 'Point', coordinates: [108.338, 15.5394]},
  },
  {
    type: 'Feature',
    properties: {name: 'Quảng Ngãi', color: getRandomColor()},
    geometry: {type: 'Point', coordinates: [108.7923, 15.1205]},
  },
  {
    type: 'Feature',
    properties: {name: 'Bình Định', color: getRandomColor()},
    geometry: {type: 'Point', coordinates: [109.218, 13.782]},
  },
];

const generateTombListData = (): TombListProps[] => {
  // Duplicate the map data by creating two entries for each location
  const doubledData = MapLocation.flatMap(location => [
    {
      name: `NTLS huyện ${location.properties?.name ?? 'Unknown'}`,
      exactLocation: `X.${location.properties?.name}, H.${location.properties?.name}, T.Việt Nam`,
      numbersOfTomb: Math.floor(Math.random() * 5000) + 1000, // Between 1000 and 5000 tombs
      isVisited: Math.random() > 0.5,
      location: location.properties?.name ?? 'Unknown',
    },
    {
      name: `NTLS xã ${location.properties?.name ?? 'Unknown'}`,
      exactLocation: `X.${location.properties?.name}, H.${location.properties?.name}, T.Việt Nam`,
      numbersOfTomb: Math.floor(Math.random() * 5000) + 1000,
      isVisited: Math.random() > 0.5,
      location: location.properties?.name ?? 'Unknown',
    },
  ]);

  return doubledData;
};

// Generate the data list
export const tombListData = generateTombListData();

export const dataTemplate = {
  name: 'NTLS Trường Sơn',
  exactLocation: 'X.Vĩnh Trường, H.Gio Linh, T.Quảng Tri',
  numbersOfTomb: 5000,
  isVisited: true,
};

export const GuildLocationData = [
  {
    name: 'Trung tâm ADN Quốc gia (National DNA Center)',
    location: '7/12 Nguyễn Văn Huyên, Cầu Giấy, Hà Nội',
    distance: '1.2 km',
  },
  {
    name: 'Bệnh viện Trung ương Quân đội 108 (Khoa Giám định Pháp y)',
    location: '1 Trần Hưng Đạo, Hai Bà Trưng, Hà Nội',
    distance: '3.0 km',
  },
  {
    name: 'Viện Pháp y Quân đội (bộ Quốc phòng)',
    location: '4 Trần Hưng Đạo, Hoàn Kiếm, Hà Nội',
    distance: '3.2 km',
  },
  {
    name: 'Viện Khoa học Hình sự (Bộ Công an)',
    location: '99 Nguyễn Tuân, Thanh Xuân, Hà Nội',
    distance: '3.2 km',
  },
];

export const MapListData = [
  {
    title: 'H.Hường Hóa',
    city: 'Quảng Trị',
    img: require('../assets/Home/tp1.png'),
    isVisited: true,
  },
  {
    title: 'H. Vĩnh Linh',
    city: 'Quảng Trị',
    img: require('../assets/Home/tp2.png'),
    isVisited: true,
  },
  {
    title: 'Nghĩa trang Liệt sĩ Trường Sơn',
    city: 'Quảng Trị',
    img: require('../assets/Home/tp3.png'),
    isVisited: false,
  },
  {
    title: 'Nghĩa trang Liệt sĩ Đường 9',
    city: 'Quảng Trị',
    img: require('../assets/Home/tp1.png'),
    isVisited: true,
  },
  {
    title: 'Nghĩa trang Liệt sĩ Hàng Dương',
    city: 'Côn Đảo',
    img: require('../assets/Home/tp2.png'),
    isVisited: false,
  },
  {
    title: 'Nghĩa trang Liệt sĩ Vị Xuyên',
    city: 'Hà Giang',
    img: require('../assets/Home/tp3.png'),
    isVisited: true,
  },
  {
    title: 'Nghĩa trang Liệt sĩ Tân Biên',
    city: 'Tây Ninh',
    img: require('../assets/Home/tp1.png'),
    isVisited: false,
  },
];

export const vietnameseNames = [
  'Nguyễn Văn An',
  'Trần Thị Hạnh',
  'Lê Hoàng Nam',
  'Phạm Ngọc Ánh',
  'Võ Minh Đức',
  'Đỗ Thanh Tú',
  'Phan Anh Duy',
  'Bùi Tấn Phát',
  'Ngô Phúc Thịnh',
  'Dương Thảo Vy',
  'Lý Quốc Bảo',
  'Hoàng Nhật Minh',
  'Vũ Hương Lan',
  'Đinh Tuấn Kiệt',
  'Tô Hiếu Nghĩa',
  'Mai Linh Chi',
  'Huỳnh Phát Tài',
  'Lâm Hải Đăng',
  'Hồ Thùy Trang',
  'Đặng Khang Nam',
  'Châu Giang Ngọc',
  'Thái Bảo Anh',
  'Vương Khôi Nguyên',
  'Cao Minh Khang',
  'Lưu Thị Thanh',
  'Hà Văn Đức',
  'Khuất Bình Minh',
  'Tạ Nam Phương',
  'Văn Sơn Tùng',
  'Bảo Anh Thư',
  'Quách Thị Nhung',
  'Triệu Vinh Quang',
  'Tôn Thất Thọ',
  'Diệp Phúc Hòa',
  'Trịnh Vân Khánh',
  'Hứa Thảo Nhi',
  'Đoàn Nhật Linh',
  'Văn Tú Anh',
  'Tăng Khánh Duy',
  'Hoàng Thùy Dương',
  'Bùi Gia Khánh',
  'Nguyễn Xuân Thanh',
  'Trần Bích Hạnh',
  'Lê Phương Thảo',
  'Phạm Thiên Long',
  'Ngô Quốc Huy',
  'Đỗ Tài Lộc',
  'Huỳnh Bảo Trân',
  'Mai Thùy Linh',
  'Vương Minh Tuấn',
];

export const vietnamLocations = [
  'Xã Minh An, Huyện Quảng Điền, Tỉnh Thừa Thiên Huế',
  'Xã Nghĩa Đô, Huyện Bảo Yên, Tỉnh Lào Cai',
  'Xã Bình Thành, Huyện Tây Sơn, Tỉnh Bình Định',
  'Xã Tân Phong, Huyện Cai Lậy, Tỉnh Tiền Giang',
  'Xã Phú Mỹ, Huyện Phù Ninh, Tỉnh Phú Thọ',
  'Xã Xuân Thọ, Huyện Xuân Lộc, Tỉnh Đồng Nai',
  'Xã Hòa Bình, Huyện Hòa Vang, Tỉnh Đà Nẵng',
  'Xã Sơn Tây, Huyện Hương Sơn, Tỉnh Hà Tĩnh',
  'Xã An Bình, Huyện Long Hồ, Tỉnh Vĩnh Long',
  'Xã Vĩnh Tường, Huyện Vĩnh Tường, Tỉnh Vĩnh Phúc',
  'Xã Hòa Phú, Huyện Châu Thành, Tỉnh Hậu Giang',
  'Xã Nam Anh, Huyện Nam Đàn, Tỉnh Nghệ An',
  'Xã Phước Long, Huyện Phước Long, Tỉnh Bạc Liêu',
  'Xã Hưng Đạo, Huyện Bảo Lạc, Tỉnh Cao Bằng',
  'Xã Đông Hoàng, Huyện Đông Hưng, Tỉnh Thái Bình',
  'Xã Cát Tiên, Huyện Cát Tiên, Tỉnh Lâm Đồng',
  'Xã Trường Long, Huyện Phong Điền, Tỉnh Cần Thơ',
  'Xã Cẩm Thanh, Huyện Hội An, Tỉnh Quảng Nam',
  'Xã Hòa Thuận, Huyện Hòa Bình, Tỉnh Bạc Liêu',
  'Xã Tân Hưng, Huyện Tân Hồng, Tỉnh Đồng Tháp',
  'Xã Đạo Đức, Huyện Bình Xuyên, Tỉnh Vĩnh Phúc',
  'Xã Ba Vì, Huyện Ba Vì, Thành phố Hà Nội',
  'Xã Tân Thủy, Huyện Lệ Thủy, Tỉnh Quảng Bình',
  'Xã Đình Lập, Huyện Đình Lập, Tỉnh Lạng Sơn',
  'Xã Kim Sơn, Huyện Kim Thành, Tỉnh Hải Dương',
  'Xã Bù Nho, Huyện Phú Riềng, Tỉnh Bình Phước',
  'Xã Nhơn Trạch, Huyện Nhơn Trạch, Tỉnh Đồng Nai',
  'Xã Lạc Sơn, Huyện Đô Lương, Tỉnh Nghệ An',
  'Xã Mộc Châu, Huyện Mộc Châu, Tỉnh Sơn La',
  'Xã Ngọc Lặc, Huyện Ngọc Lặc, Tỉnh Thanh Hóa',
  'Xã Phước Hòa, Huyện Phú Giáo, Tỉnh Bình Dương',
  'Xã Trà Bồng, Huyện Trà Bồng, Tỉnh Quảng Ngãi',
  'Xã Gia Lộc, Huyện Gia Lộc, Tỉnh Hải Dương',
  'Xã Hồng Dân, Huyện Hồng Dân, Tỉnh Bạc Liêu',
  'Xã Thuận Hưng, Huyện Thốt Nốt, Tỉnh Cần Thơ',
  'Xã Long Điền, Huyện Long Điền, Tỉnh Bà Rịa - Vũng Tàu',
  'Xã Hưng Lợi, Huyện Hưng Nguyên, Tỉnh Nghệ An',
  'Xã Bình Sơn, Huyện Bình Sơn, Tỉnh Quảng Ngãi',
  'Xã Tri Tôn, Huyện Tri Tôn, Tỉnh An Giang',
  'Xã Lộc Ninh, Huyện Lộc Ninh, Tỉnh Bình Phước',
  'Xã Hoài Nhơn, Huyện Hoài Nhơn, Tỉnh Bình Định',
  'Xã Châu Thành, Huyện Châu Thành, Tỉnh Bến Tre',
  'Xã Bảo Lộc, Huyện Bảo Lộc, Tỉnh Lâm Đồng',
  'Xã Đầm Dơi, Huyện Đầm Dơi, Tỉnh Cà Mau',
  'Xã Phú Quốc, Huyện Phú Quốc, Tỉnh Kiên Giang',
  'Xã Duy Tiên, Huyện Duy Tiên, Tỉnh Hà Nam',
  'Xã Tân Châu, Huyện Tân Châu, Tỉnh An Giang',
  'Xã Lạc Thủy, Huyện Lạc Thủy, Tỉnh Hòa Bình',
  'Xã Cái Bè, Huyện Cái Bè, Tỉnh Tiền Giang',
  'Xã Mỹ Tho, Huyện Chợ Gạo, Tỉnh Tiền Giang',
];

const statuses = ['Đã xác định', 'Chưa xác định', 'Vô danh'];
const levels = [
  'Trung úy',
  'Thiếu tá',
  'Binh nhì',
  'Đại úy',
  'Thượng úy',
  'Trung tá',
  'Đại tá',
  'Thiếu úy',
  'Thượng tá',
  'Binh nhất',
  'Hạ sĩ',
  'Trung sĩ',
];

export const extractProvince = (location: string): string => {
  const parts = location.split(', ');
  return parts[parts.length - 1];
};

const generateMartyrData = (): MartyrSearchViewDataProps[] => {
  const data: MartyrSearchViewDataProps[] = [];

  for (let i = 0; i < 50; i++) {
    const name = vietnameseNames[i % vietnameseNames.length];
    const hometown = vietnamLocations[i % vietnamLocations.length];
    const province = extractProvince(hometown);

    data.push({
      name,
      birthYear: `19${Math.floor(Math.random() * 50) + 30}`,
      province,
      hometown,
      deathDate: `${Math.floor(Math.random() * 30) + 1}/${
        Math.floor(Math.random() * 12) + 1
      }/19${Math.floor(Math.random() * 50) + 50}`,
      status: statuses[Math.floor(Math.random() * statuses.length)],
      unit: `Đơn vị ${i + 1}`,
      level: levels[Math.floor(Math.random() * levels.length)],
    });
  }

  return data;
};

export const martyrSearchData = generateMartyrData();
