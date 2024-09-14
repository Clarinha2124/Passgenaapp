import React from 'react';
import { Button, View, Text, Pressable } from 'react-native';

import { styles } from './CpsButtonStyles';

export function CpsButton() {
  return (
    <View >
    
<Pressable
onPress={()=>{console.log('gerar')}}
style={styles.button}
>
<Text  style={styles.text}>🌷 Gerar</Text>
</Pressable>

<Pressable
onPress={()=>{console.log('copiar')}}
style={styles.button}>
<Text style={styles.text}>🌼 Copiar</Text>
</Pressable>

    
    </View>
  );
}