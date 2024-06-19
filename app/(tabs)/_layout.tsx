import { Tabs } from 'expo-router';
import React from 'react';
import { CalendarIcon } from "react-native-heroicons/outline";
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { TabTitle } from '@/components/ui/TabTitle';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors.light.tint,
        headerShown: true,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Calendar',
          header: () => <TabTitle title="Calendar" />,
          tabBarIcon: ({ color, focused }) => (
            <CalendarIcon color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
