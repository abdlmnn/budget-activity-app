import { Text, View, Pressable, TextInput } from 'react-native';
import React, { useState } from 'react';
import axios from 'axios';
import { API_URL } from '@env';

export default function ExpensesForm({
  fetchExpenses,
  fetchTotalBudgets,
}: any) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');

  const handleExpenses = async () => {
    try {
      console.log(`
        Name: ${name}
        Description: ${description}
        Amount: ${amount}
        `);

      const response = await axios.post(`${API_URL}/budget/add_expenses.php`, {
        name,
        description,
        amount,
      });

      console.log('Success:', response.data.message);

      setName('');
      setDescription('');
      setAmount('');

      fetchTotalBudgets();

      fetchExpenses();
    } catch (error) {
      console.log('Error:', error);
    }
  };

  return (
    <View style={{ marginBottom: 20 }}>
      <TextInput
        placeholder="Enter name"
        value={name}
        onChangeText={setName}
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

      <TextInput
        placeholder="Enter description"
        value={description}
        onChangeText={setDescription}
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
        onPress={handleExpenses}
        style={{
          backgroundColor: '#2196F3',
          paddingVertical: 12,
          borderRadius: 8,
          alignItems: 'center',
          marginBottom: 10,
        }}
      >
        <Text style={{ color: '#fff', fontSize: 16, fontWeight: '600' }}>
          Add Expenses
        </Text>
      </Pressable>
    </View>
  );
}
