/* eslint-disable react-native/no-inline-styles */
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import useStatusBar from '../../services/useStatusBar';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {InforDetail, MartyrProfileItem} from '../../services/typeProps';
import {
  cancelIcon,
  checkIcon,
  listIcon,
  textInputIcon,
} from '../../assets/svgXML';
import {vh, vw} from '../../services/styleSheet';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {loadData, saveData} from '../../services/storage';
import {MartyrProfile} from '../../services/renderData';

const InforChecking = () => {
  useStatusBar('white');
  const route = useRoute<RouteProp<InforDetail, 'Martyr'>>();
  const data = route.params.data;

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <View style={{flex: 1}}>
          <Header />
          <MainView data={{...data}} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const MainView: React.FC<{data: MartyrProfileItem}> = ({data}) => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const [storage, setStorage] = useState<MartyrProfileItem[]>([]);

  const fetchData = async () => {
    await loadData<MartyrProfileItem[]>('martyrProfileStorage')
      .then(res => {
        setStorage(res);
      })
      .catch(() => {
        setStorage(MartyrProfile);
        saveData('martyrProfileStorage', MartyrProfile);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleUpload = async () => {
    const date = new Date();
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-based
    const year = date.getFullYear();
    data.uploadDate = `${day}/${month}/${year}`;
    data.status = 1;
    storage.push(data);
    await saveData('martyrProfileStorage', storage);
    navigation.navigate('UploadSuccessfully');
  };

  return (
    <View style={styles.main}>
      <View>
        <TitleRender label="Thông tin cá nhân của LS" />
        <View>
          <DataRender label="Họ và tên liệt sĩ:" value={data.name} />
          <DataRender label="Sinh năm:" value={data.birthYear} />
          <DataRender label="Giới tính:" value={data.sex} />
          <DataRender label="Quê quán:" value={data.hometown} />
        </View>
      </View>
      <View>
        <TitleRender label="Thông tin công tác, hy sinh" />
        <View>
          <DataRender label="Nhập ngũ:" value={data.armyJoinDate} />
          <DataRender label="Hy sinh ngày:" value={data.deathDate} />
          <DataRender label="Đơn vị hy sinh:" value={data.deathUnit} />
          <DataRender label="Lý do hinh sinh:" value={data.deathReason} />
          <DataRender label="Nơi an táng ban đầu:" value={data.firstTomb} />
        </View>
      </View>
      <View>
        <TitleRender label="Thông tin nhân thân" />
        <View>
          <DataRender label="Họ tên bố: " value={data.fatherName} />
          <DataRender label="Họ tên mẹ:" value={data.motherName} />
          <DataRender
            label="Quan hệ người tìm kiếm:"
            value={data.yourRelationshipWithMartyr}
          />
        </View>
      </View>
      <View>
        <TitleRender label="Các tài liệu đính kèm" />
        <View>
          <ImageCheckRender
            label="Giấy báo tử"
            existed={data.giayBaoTu === null ? false : true}
          />
          <ImageCheckRender
            label="Bản trích lục"
            existed={data.banTrichLuc === null ? false : true}
          />
          <ImageCheckRender
            label="Giấy xác nhận thông tin nơi hy sinh "
            existed={data.giayNoiHisinh === null ? false : true}
          />
          <ImageCheckRender
            label="Giấy tờ khác"
            existed={data.letterImg || data.giayKhac === null ? false : true}
          />
          <View>
            <ImageCheckRender
              label="Ảnh liệt sĩ"
              existed={data.img === null ? false : true}
            />
            {data.img && (
              <View style={styles.imgContainer}>
                <Image source={{uri: data.img}} style={styles.image} />
              </View>
            )}
          </View>

          <ImageCheckRender label="Xác nhận lấy mẫu ADN" existed={false} />
        </View>
      </View>
      <View>
        <TitleRender label="Yêu cầu tìm kiếm" />
        <View style={{paddingHorizontal: vw(5)}}>
          <View style={styles.des}>
            <Text style={{fontSize: 16, color: '#000000'}}>
              {data.description}
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.bottomBtn}>
        <TouchableOpacity style={styles.saveBtn}>
          <Text style={styles.saveBtnTxt}>Lưu vào bản nháp</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.upBtn} onPress={handleUpload}>
          <Text style={styles.upBtnTxt}>Tải lên</Text>
        </TouchableOpacity>
      </View>
      <View style={{height: vh(5)}} />
    </View>
  );
};

const ImageCheckRender: React.FC<{label: string; existed: boolean}> = ({
  existed,
  label,
}) => {
  return (
    <View>
      <View style={styles.imgCheck}>
        {existed ? (
          <View style={styles.notNull}>{checkIcon(vw(5), vw(5), 'white')}</View>
        ) : (
          <View style={styles.null} />
        )}
        <Text
          style={[
            styles.imgCheckTxt,
            existed === false && {
              textDecorationLine: 'line-through',
              color: '#868686',
            },
          ]}>
          {label}
        </Text>
      </View>
      {label === 'Giấy tờ khác' && (
        <View>
          <View style={styles.bonusText}>
            {listIcon(vw(5), vw(5))}
            <Text style={styles.imgCheckTxt}>Bằng khen Tổ Quốc ghi công</Text>
          </View>
          <View style={styles.bonusText}>
            {listIcon(vw(5), vw(5))}
            <Text style={styles.imgCheckTxt}>Thư tay của liệt sĩ</Text>
          </View>
        </View>
      )}
    </View>
  );
};

const DataRender: React.FC<{label: string; value: string; isPic?: any}> = ({
  label,
  value,
}) => {
  return (
    <View style={styles.datarender}>
      <Text style={styles.datarenderLabel}>{label}</Text>
      <Text style={styles.dataRenderValue}>{value}</Text>
    </View>
  );
};

const TitleRender: React.FC<{label: string}> = ({label}) => {
  return (
    <View style={styles.titlerender}>
      <Text style={styles.titlerenderTxt}>{label}</Text>
      {textInputIcon(vw(7), vw(7))}
    </View>
  );
};

const Header: React.FC = () => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  return (
    <View style={styles.header}>
      <View style={styles.headerTop}>
        <Text style={styles.headerTitle}>Xác nhận thông tin</Text>
        <TouchableOpacity
          style={styles.headerBtn}
          onPress={() => navigation.goBack()}>
          {cancelIcon(vw(7), vw(7), '#91A895')}
        </TouchableOpacity>
      </View>
      <Text style={styles.headerDes}>
        Hãy xác nhận thông tin hồ sơ lần cuối cùng.
      </Text>
    </View>
  );
};

export default InforChecking;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    backgroundColor: 'white',
    padding: vw(5),
    rowGap: vh(1.5),
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#000000',
  },
  headerDes: {
    fontSize: 12,
    color: '#000000',
  },
  headerBtn: {
    alignSelf: 'flex-end',
  },
  headerTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  main: {
    flex: 1,
    backgroundColor: '#EEF2EE',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    overflow: 'hidden',
  },
  titlerender: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: vw(5),
  },
  titlerenderTxt: {
    fontSize: 18,
    fontWeight: '700',
    color: '#547958',
    textDecorationLine: 'underline',
  },
  datarender: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: vw(3),
    paddingHorizontal: vw(5),
    paddingVertical: vh(1),
  },
  datarenderLabel: {
    fontSize: 16,
    color: '#91A895',
  },
  dataRenderValue: {
    fontSize: 16,
    color: 'black',
  },
  des: {
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 10,
    padding: vw(5),
  },
  imgCheck: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: vw(5),
    columnGap: vw(3),
  },
  imgCheckTxt: {
    fontSize: 16,
    color: '#000000',
  },
  notNull: {
    borderColor: '#547958',
    backgroundColor: '#547958',
    padding: vw(1),
    borderRadius: vw(50),
  },
  null: {
    borderColor: '#868686',
    borderWidth: 2,
    padding: vw(3),
    borderRadius: vw(50),
  },
  bonusText: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: vw(3),
    paddingHorizontal: vw(5),
    rowGap: vh(1),
  },
  image: {
    width: vw(30), // Set the desired width
    height: vw(30), // Set the desired height
    resizeMode: 'contain', // Adjust the resize mode as needed
    borderRadius: 10,
    overflow: 'hidden',
  },
  imgContainer: {
    paddingHorizontal: vw(5),
  },
  bottomBtn: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: vw(5),
    paddingVertical: vh(2),
  },
  saveBtn: {
    borderColor: '#547958',
    borderWidth: 1,
    width: '45%',
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: vh(2),
  },
  saveBtnTxt: {
    color: '#547958',
    fontSize: 16,
  },
  upBtn: {
    backgroundColor: '#547958',
    width: '45%',
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: vh(2),
  },
  upBtnTxt: {
    color: 'white',
    fontSize: 16,
  },
});
