import { StyleSheet, Text, View, FlatList } from 'react-native';
import React from 'react';

export default function DisplayBudget({ budget }: any) {
  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 15 }}>
        Budget History
      </Text>

      <FlatList
        data={budget}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              padding: 15,
              marginBottom: 10,
              backgroundColor: '#f2f2f2',
              borderRadius: 6,
              shadowColor: '#000',
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.1,
              shadowRadius: 3,
              elevation: 2,
            }}
          >
            <Text style={{ fontWeight: '600', color: '#333' }}>
              {index + 1}.
            </Text>
            <Text
              style={{ fontSize: 16, fontWeight: 'bold', color: '#2196F3' }}
            >
              ₱{item.amount}
            </Text>
          </View>
        )}
      />
    </View>
  );
}
