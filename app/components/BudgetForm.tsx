import { Text, View, Pressable, TextInput } from 'react-native';
import React, { useState } from 'react';
import axios from 'axios';
import { API_URL } from '@env';

export default function BudgetForm({ fetchTotalBudgets, fetchBudgets }: any) {
  const [amount, setAmount] = useState('');

  const handleBudget = async () => {
    try {
      console.log('Sending amount:', amount);

      const response = await axios.post(`${API_URL}/budget/add_budget.php`, {
        amount,
      });

      console.log('Success:', response.data.message);

      setAmount('');

      fetchTotalBudgets();

      fetchBudgets();
    } catch (error) {
      console.log('Error:', error);
    }
  };

  return (
    <View style={{ marginBottom: 20 }}>
      <TextInput
        placeholder="Enter amount"
        keyboardType="numeric"
        value={amount}
        onChangeText={setAmount}
        style={{
          borderWidth: 1,
          borderColor: '#ccc',
          padding: 12,
          marginBottom: 15,
          borderRadius: 8,
          fontSize: 16,
          backgroundColor: '#fafafa',
        }}
      />

      <Pressable
        onPress={handleBudget}
        style={{
          backgroundColor: '#2196F3',
          paddingVertical: 12,
          borderRadius: 8,
          alignItems: 'center',
          marginBottom: 10,
        }}
      >
        <Text style={{ color: '#fff', fontSize: 16, fontWeight: '600' }}>
          Add Budget
        </Text>
      </Pressable>
    </View>
  );
}
