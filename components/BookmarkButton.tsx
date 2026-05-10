import React, { useState } from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';

interface BookmarkButtonProps {
  initialSaved: boolean;
}

export default function BookmarkButton({ initialSaved }: BookmarkButtonProps) {
  const [saved, setSaved] = useState(initialSaved);

  const handlePress = () => {
    setSaved(!saved);
  };

  return (
    <TouchableOpacity 
      style={[styles.bookmarkBtn, saved && styles.bookmarkBtnActive]} 
      activeOpacity={0.7}
      onPress={handlePress}
    >
      <Feather 
        name="bookmark" 
        size={16} 
        color={saved ? "#fff" : "#64748b"} 
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  bookmarkBtn: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#f1f5f9', // Warna abu-abu bawaan
    alignItems: 'center',
    justifyContent: 'center',
  },
  bookmarkBtnActive: {
    backgroundColor: '#2563eb', // Berubah biru kalau disimpan
  },
});