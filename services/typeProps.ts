export interface OnboardingItem {
  title: string;
  description: string;
  img: any; // You can replace 'any' with the specific type if you know it
}

export interface MartyrProfileItem {
  giayBaoTu: any; // Replace 'any' with the specific type if known
  banTrichLuc: any; // Replace 'any' with the specific type if known
  giayNoiHisinh: any; // Replace 'any' with the specific type if known
  giayKhac: any; // Replace 'any' with the specific type if known
  img: any; // Replace 'any' with the specific type if known
  letterImg: any; // Replace 'any' with the specific type if known
  titleImg: any; // Replace 'any' with the specific type if known
  name: string;
  birthYear: string;
  sex: string;
  hometown: string;
  armyJoinDate: string;
  level: string;
  unit: string;
  deathDate: string;
  deathUnit: string;
  deathReason: string;
  firstTomb: string;
  fatherName: string;
  motherName: string;
  yourRelationshipWithMartyr: string;
  description: string;
  status: number;
  uploadDate: string;
}

export interface FoundMartyrProfileItem {
  name: string;
  status: number;
  img: any; // You can replace 'any' with the specific type if you know it
  birthYear: string;
  armyJoinDate: string;
  hometown: string;
}

export interface HeaderComponentProps {
  title: string;
}

export interface Page1Props {
  isCameraVisible: boolean;
  imageUri: string | null;
  selectedIndex: number | null;
  images: (string | null)[];
  setIsCameraVisible: React.Dispatch<React.SetStateAction<boolean>>;
  setImageUri: React.Dispatch<React.SetStateAction<string | null>>;
  setSelectedIndex: React.Dispatch<React.SetStateAction<number | null>>;
  setImages: React.Dispatch<React.SetStateAction<(string | null)[]>>;
}

export interface AddPageState {
  martyrProfile: MartyrProfileItem;
}

export interface TextInputComponentProps {
  label: string;
  setValue: (value: string) => void;
  type: 'text' | 'date' | 'select' | 'fullDate' | 'number'; // Add 'number' type
  value: string;
  width?: string | number;
  options?: {label: string; value: string}[]; // Add options prop for select type
}
export interface PageProps {
  data: MartyrProfileItem;
  setData: React.Dispatch<React.SetStateAction<MartyrProfileItem>>;
}

export type InforDetail = {
  Martyr: {
    data: MartyrProfileItem;
  };
  Status: {
    dataIndex: number;
  };
  Comment: {
    itemData: CommunityPost;
  };
  TombLocation: {
    title: string;
  };
  SearchData: {
    data: {
      name: string;
      hometown: string;
      province: string;
      birthYear: string;
      deathDate: string;
      unit: string;
      rank: string;
      status: string;
    };
  };
  SearchDataDetail: {
    data: {
      name: string;
      birthYear: string | null;
      province: string;
      hometown: string;
      deathDate: string;
      status: string;
      unit: string;
      level: string;
    };
  };
};

export interface SearchingStatusComponentProps {
  currentState: number;
  label: string;
}

export interface HeaderCommunityProps {
  activeTab: string;
  setActiveTab: React.Dispatch<React.SetStateAction<string>>;
}

export interface CommunityPost {
  user: string;
  avatar: any; // You can replace 'any' with the appropriate type if you know it
  feed: string;
  postImg: any[]; // Array of images, replace 'any' with the appropriate type if you know it
  like: number;
  comment: number;
  yourLike: boolean;
  time: string;
  postStatus: string;
}

export interface ProfileDataProps {
  user: string;
  avatar: any;
  post: number;
  follower: number;
  following: number;
}

export interface CommentProps {
  avatar: any;
  name: string;
  comment: string;
  like: number;
  time: string;
  answer: number;
}

export interface HeaderTombListProps {
  searchText: string;
  setSearchText: (text: string) => void;
  selectedProvince: string;
  setSelectedProvince: (province: string) => void;
  activeTab: string;
  setActiveTab: (tab: string) => void;
  provinces: {label: string; value: string}[];
  handleSearch: () => void;
}

export interface TombListProps {
  name: string;
  exactLocation: string;
  numbersOfTomb: number;
  isVisited: boolean;
  location: string;
}

export interface GuildLocation {
  name: string;
  location: string;
  distance: string;
}

export interface MartyrSearchViewDataProps {
  name: string;
  birthYear: string | null;
  province: string;
  hometown: string;
  deathDate: string;
  status: string;
  unit: string;
  level: string;
}

export interface FilterModalProps {
  isVisible: boolean;
  onClose: () => void;
  filterData: {
    name: string;
    birthYear: string;
    province: string;
    hometown: string;
    deathDate: string;
    status: string;
    unit: string;
    level: string;
  };
  handleFilterChange: (field: string, value: string) => void;
}
