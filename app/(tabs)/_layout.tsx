import { Tabs } from 'expo-router';
import React from 'react';
import{Image, StyleSheet} from 'react-native'
import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "#7DC8F7",
          height: 100,
        }
      }}
      // initialRouteName='home'
      >
      <Tabs.Screen
        name="profile"
        options={{
          title: '',
          tabBarIcon: ({ color, focused }) => (
            <Image 
            style={styles.stretch}
            source={require('../../assets/images/profile.png')}></Image>
          ),
        }}
      />
  
        
      
       <Tabs.Screen
       name="home"
        options={{
          title: '',
          tabBarIcon: () => (
            <Image 
            style={styles.stretch}
            source={require('../../assets/images/house.png')}></Image>
          ),
        }}
      />
      
  
       <Tabs.Screen
       name="settings"
        options={{
          title: '',
          tabBarIcon: () => (
            <Image 
            style={styles.stretch}
            source={require('../../assets/images/setting.png')}></Image>
          ),
        }}
      />
      

    </Tabs>
  );
  
}

const styles = StyleSheet.create({
  stretch: {
    top: 18,
    width: 60,
    height: 60,
  }
})
