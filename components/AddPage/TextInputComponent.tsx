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
      {type === 'text' && (
        <TextInput style={styles.input} value={value} onChangeText={setValue} />
      )}
      {type === 'number' && (
        <TextInput
          keyboardType="number-pad"
          style={styles.input}
          value={value}
          onChangeText={setValue}
        />
      )}
      {type === 'date' && (
        <>
          <TouchableOpacity onPress={() => setShowDatePicker(true)}>
            <Text style={styles.input}>{value || 'Select Date'}</Text>
          </TouchableOpacity>
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
        <RNPickerSelect
          onValueChange={setValue}
          items={options || []}
          value={value}
          style={pickerSelectStyles}
        />
      )}
      {type === 'fullDate' && (
        <>
          <TouchableOpacity onPress={() => setShowDatePicker(true)}>
            <Text style={styles.input}>{value || 'Select Date'}</Text>
          </TouchableOpacity>
          {showDatePicker && (
            <DateTimePicker
              value={value ? new Date(value) : new Date()}
              mode="date"
              display="default"
              onChange={handleDateChange}
            />
          )}
          <TouchableOpacity onPress={() => setShowTimePicker(true)}>
            <Text style={styles.input}>{value || 'Select Time'}</Text>
          </TouchableOpacity>
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
  input: {
    borderWidth: 1,
    borderColor: '#000000',
    padding: 10,
    borderRadius: 5,
    color: '#000000',
    fontSize: 16,
    fontWeight: '700',
    backgroundColor: 'white',
  },
});

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    color: 'black',
    paddingRight: 30, // to ensure the text is never behind the icon
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 0.5,
    borderColor: '#ccc',
    borderRadius: 5,
    color: 'black',
    paddingRight: 30, // to ensure the text is never behind the icon
  },
});
