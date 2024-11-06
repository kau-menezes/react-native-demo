import { Stack, Tabs } from 'expo-router';
import React from 'react';
import { Text } from 'react-native';

export default function TabLayout() {

  return (
    <Stack>
      <Stack.Screen name='index' options={{headerShown: false }}></Stack.Screen>
    </Stack>
  );
}
