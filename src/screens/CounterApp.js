import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import CounterButton from '../components/counter/CounterButton';

let timer;

export default function CounterApp() {
  const [counter, setCounter] = useState(0);

  const startCounter = () => {
    timer=setInterval(() => {
        setCounter(seconds => seconds + 1)
    }, 1000)
    // setCounter(counter+1)
  };

  const backCounter = () => {
    if (counter > 0) {
        setInterval(() => {
            setCounter(seconds => seconds>0 ? seconds - 1: 0
                )
        }, 1000)
    }
  };

  const stopCounter = () => {
    clearInterval(timer)
  };
  return (
    <View style={styles.container}>
      <Text style={{alignSelf:'center',marginBottom:15,fontSize:40}}>{counter}</Text>
      <View style={{flexDirection:'row',justifyContent:'space-around'}}>
        <CounterButton btnText={'Start'} onPress={startCounter} />
        <CounterButton btnText={'Back'} onPress={backCounter} />
        <CounterButton btnText={'Stop'} onPress={stopCounter} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});
