import Header from '@/components/Header';
import Item from '@/components/Item';
import { Tabs } from 'expo-router';
import React from 'react';
import { Text } from 'react-native';

export default function TabLayout() {

  return (
    <>
      <Header image={require("../../assets/images/pantone-logo.png")}/>
      <Tabs>
        <Tabs.Screen name='list' options={{
          headerShown: false, 
          tabBarIcon: () => 
            (
              <Item image={require("../../assets/images/icons/palette_24dp_000000_FILL0_wght400_GRAD0_opsz24.png")}/>
            )
        }}></Tabs.Screen>
        <Tabs.Screen name='index' options={{
          headerShown: false,
          tabBarIcon: () => 
            (
              <Item image={require("../../assets/images/icons/add_circle_24dp_000000_FILL0_wght400_GRAD0_opsz24.png")}/>
            )
        }}></Tabs.Screen>
      </Tabs>
    </>
  );
}
