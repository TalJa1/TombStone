import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import RNPickerSelect from 'react-native-picker-select';
import {TextInputComponentProps} from '../../services/typeProps';
import {vw} from '../../services/styleSheet';
import {textInputIcon} from '../../assets/svgXML';

const TextInputComponent: React.FC<TextInputComponentProps> = ({
  label,
  setValue,
  type,
  value,
  width,
  options, // Add options prop for select type
}) => {
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showTimePicker, setShowTimePicker] = useState(false);

  const handleDateChange = (event: any, selectedDate: Date | undefined) => {
    setShowDatePicker(false);
    if (selectedDate) {
      setValue(selectedDate.toISOString().split('T')[0]); // Format date as YYYY-MM-DD
    }
  };

  const handleTimeChange = (event: any, selectedTime: Date | undefined) => {
    setShowTimePicker(false);
    if (selectedTime) {
      setValue(selectedTime.toISOString().split('T')[1].split('.')[0]); // Format time as HH:MM:SS
    }
  };

  return (
    <View style={[styles.container, {width: `${Number(width)}%`}]}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.inputContainer}>
        {type === 'text' && (
          <>
            <TextInput
              style={styles.input}
              value={value}
              onChangeText={setValue}
              multiline
            />
            <View style={styles.iconContainer}>
              {textInputIcon(vw(8), vw(8))}
            </View>
          </>
        )}
        {type === 'number' && (
          <>
            <TextInput
              keyboardType="number-pad"
              style={styles.input}
              value={value}
              onChangeText={setValue}
            />
            <View style={styles.iconContainer}>
              {textInputIcon(vw(8), vw(8))}
            </View>
          </>
        )}
        {type === 'date' && (
          <>
            <TouchableOpacity
              onPress={() => setShowDatePicker(true)}
              style={styles.input}>
              <Text>{value || 'Select Date'}</Text>
            </TouchableOpacity>
            <View style={styles.iconContainer}>
              {textInputIcon(vw(8), vw(8))}
            </View>
            {showDatePicker && (
              <DateTimePicker
                value={value ? new Date(value) : new Date()}
                mode="date"
                display="default"
                onChange={handleDateChange}
              />
            )}
          </>
        )}
        {type === 'select' && (
          <View style={styles.selectContainer}>
            <RNPickerSelect
              onValueChange={setValue}
              items={options || []}
              value={value}
              style={pickerSelectStyles}
            />
          </View>
        )}
        {type === 'fullDate' && (
          <>
            <TouchableOpacity
              onPress={() => setShowDatePicker(true)}
              style={styles.input}>
              <Text>{value || 'Select Date'}</Text>
            </TouchableOpacity>
            <View style={styles.iconContainer}>
              {textInputIcon(vw(8), vw(8))}
            </View>
            {showDatePicker && (
              <DateTimePicker
                value={value ? new Date(value) : new Date()}
                mode="date"
                display="default"
                onChange={handleDateChange}
              />
            )}
            <TouchableOpacity
              onPress={() => setShowTimePicker(true)}
              style={styles.input}>
              <Text>{value || 'Select Time'}</Text>
            </TouchableOpacity>
            <View style={styles.iconContainer}>
              {textInputIcon(vw(8), vw(8))}
            </View>
            {showTimePicker && (
              <DateTimePicker
                value={value ? new Date(value) : new Date()}
                mode="time"
                display="default"
                onChange={handleTimeChange}
              />
            )}
          </>
        )}
      </View>
    </View>
  );
};

export default TextInputComponent;

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  label: {
    color: '#484848',
    fontSize: 16,
    marginBottom: 5,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#000000',
    borderRadius: 20,
    backgroundColor: 'white',
  },
  input: {
    flex: 1,
    padding: 10,
    color: '#000000',
    fontSize: 16,
    fontWeight: '700',
  },
  iconContainer: {
    padding: 10,
  },
  selectContainer: {
    flex: 1,
    overflow: 'hidden',
    borderRadius: 20,
  },
});

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    color: 'black',
    backgroundColor: 'white',
  },
  inputAndroid: {
    fontSize: 16,
    color: 'black',
    backgroundColor: 'white',
  },
});
