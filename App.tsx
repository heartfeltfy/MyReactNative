import React, {useState} from 'react';
import {StatusBar, Text, View, StyleSheet, ScrollView} from 'react-native';
import DeviceInfo from 'react-native-device-info';

function App(): React.JSX.Element {
  const [uniqueId, setUniqueId] = useState<string>();

  DeviceInfo.getUniqueId().then(value => {
    setUniqueId(value);
  });
  return (
    <ScrollView style={styles.container} keyboardDismissMode="on-drag">
      <StatusBar hidden />
      <View>
        <Text style={styles.text}>设备唯一标识符：</Text>
        <Text style={styles.text}>{uniqueId}</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#cecece',
  },
  text: {
    color: 'red',
    fontSize: 40,
    fontWeight: '300',
  },
});

export default App;
