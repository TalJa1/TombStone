export interface OnboardingItem {
  title: string;
  description: string;
  img: any; // You can replace 'any' with the specific type if you know it
}

export interface MartyrProfileItem {
  giayBaoTu: any;
  banTrichLuc: any;
  giayNoiHisinh: any;
  giayKhac: any;
  giayToCoChuVietLietSi: string[];
  name: string;
  birthYear: string;
  sex: string;
  hometown: string;
  armyJoinDate: string;
  level: string;
  position: string;
  unit: string;
  deathDate: string;
  deathPlace: string;
  deathReason: string;
  otherName: string;
  relationship: string;
  otherInfor: string;
  status: string;
}

export interface FoundMartyrProfileItem {
  name: string;
  status: string;
  img: any; // You can replace 'any' with the specific type if you know it
  birthYear: string;
  armyJoinDate: string;
  hometown: string;
}
