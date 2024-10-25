import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import Ionicons from '@expo/vector-icons/Ionicons';
import Colors from '@/constants/Colors';

export default function TabLayout() {
  return (
    <Tabs screenOptions={{
      headerShown: false,
      tabBarActiveTintColor: Colors.PRIMARY
    }}>
      <Tabs.Screen options={{
        title: 'Home',
        tabBarIcon: ({ color }) => <Ionicons name="home" size={24} color={color} />
      }} name='home' />
      <Tabs.Screen options={{
        title: 'Collection',
        tabBarIcon: ({ color }) => <Ionicons name="folder-open" size={24} color={color} />
      }} name='collection' />
      <Tabs.Screen options={{
        title: 'Profile',
        tabBarIcon: ({ color }) => <Ionicons name="people-circle" size={24} color={color} />
      }} name='profile' />
    </Tabs>
  )
}

const styles = StyleSheet.create({})