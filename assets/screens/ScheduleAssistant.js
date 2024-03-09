import React, {useState} from 'react';
import { ImageBackground, StyleSheet, Image, View, Text, TextInput, Button, KeyboardAvoidingView, Platform, TouchableOpacity, ScrollView } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import { AntDesign } from '@expo/vector-icons'; 

const data1 = [
  { label: 'Monday', value: '1' },
  { label: 'Tuesday', value: '2' },
  { label: 'Wednesday', value: '3' },
  { label: 'Thursday', value: '4'},
  { label: 'Friday', value: '5'},
];

const data2 = [
  { label: '7:00 AM', value: 'A' },
  { label: '8:00 AM', value: 'B' },
  { label: '9:00 AM', value: 'C' },
  { label: '10:00 AM', value: 'D' },
  { label: '11:00 AM', value: 'E' },
  { label: '12:00 PM', value: 'F' },
  { label: '1:00 PM', value: 'G' },
  { label: '2:00 PM', value: 'H' },
  { label: '3:00 PM', value: 'I' },
  { label: '4:00 PM', value: 'J' },
  { label: '5:00 PM', value: 'K' },
  { label: '6:00 PM', value: 'L' },
];

const ScheduleAssistant = () => {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleSelectOption = (option) => {
    setSelectedOptions([...selectedOptions, option]);
  };

  const clearSelectedOptions = () => {
    setSelectedOptions([]);
  };

  const renderSelectedOptions = () => {
    return selectedOptions.map((option, index) => (
      <TouchableOpacity key={index} style={styles.selectedOption}>
        <Text>{option.label}</Text>
      </TouchableOpacity>
    ));
  };

  const renderLabel = () => {
    return (
      <Text style={styles.label}>
        Selected Options
      </Text>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.dropdownWrapper}>
        <View style={styles.dropdownContainer}>
          <Dropdown
            style={[styles.dropdown, { width: 160 }]}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            iconStyle={styles.iconStyle}
            data={data1}
            search
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder={'Select Days'}
            searchPlaceholder="Search..."
            onChange={handleSelectOption}
            renderLeftIcon={() => (
              <AntDesign
                style={styles.icon}
                name="smileo"
                size={16}
              />
            )}
          />
        </View>
        <View style={styles.dropdownContainer}>
          <Dropdown
            style={[styles.dropdown, { width: 160 }]}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            iconStyle={styles.iconStyle}
            data={data2}
            search
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder={'Select Times'}
            searchPlaceholder="Search..."
            onChange={handleSelectOption}
            renderLeftIcon={() => (
              <AntDesign
                style={styles.icon}
                name="clockcircleo"
                size={16}
              />
            )}
          />
        </View>
      </View>
      <Text style={styles.label}>Schedule</Text>
      <ScrollView style={styles.scheduleContainer}>
        {renderSelectedOptions()}
      </ScrollView>
      <Button title="Clear Selected Options" onPress={clearSelectedOptions} />
    </View>
  );     
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 16,
    flex: 1,
    alignItems: 'center',
  },
  dropdownWrapper: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  dropdownContainer: {
    flex: 1,
  },
  dropdown: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
    marginRight: 10, 
    borderRadius: 22,
  },
  label: {
    backgroundColor: 'white',
    paddingVertical: 8,
    paddingHorizontal: 16,
    fontSize: 14,
    alignSelf: 'flex-start',
  },
  placeholderStyle: {
    fontSize: 16,
    paddingLeft: 10,
  },
  selectedTextStyle: {
    fontSize: 16,
    paddingLeft: 10,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
  scheduleContainer: {
    marginTop: 10,
    flex: 1,
    width: 160,
  },
  selectedOption: {
    padding: 10,
    backgroundColor: '#f0f0f8',
    borderRadius: 8,
    marginBottom: 5,
    borderRadius: 22,
  },
});

export default ScheduleAssistant;
