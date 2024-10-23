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
