import {
  TextInput,
  Text,
  View,
  Button,
  FlatList,
  Pressable,
  Touchable,
  TouchableOpacity,
} from 'react-native';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { API_URL } from '@env';

export default function BudgetForm({ navigation }: any) {
  const [amount, setAmount] = useState('');
  const [totalBudget, setTotalBudget] = useState('');

  useEffect(() => {
    fetchBudgets();
  }, []);

  const fetchBudgets = async () => {
    try {
      const respone = await axios.get(`${API_URL}/budget/read.php`);

      console.log('Total budget:', respone.data.total);

      setTotalBudget(respone.data.total);
    } catch (error) {
      console.log('Error:', error);
    }
  };

  const handleBudget = async () => {
    try {
      console.log('Sending amount:', amount);

      const response = await axios.post(`${API_URL}/budget/create.php`, {
        amount,
      });

      console.log('Success:', response.data.message);

      setAmount('');

      fetchBudgets();
    } catch (error) {
      console.log('Error:', error);
    }
  };

  return (
    <View style={{ padding: 20, flex: 1 }}>
      <Text style={{ fontSize: 18, fontWeight: '700', marginBottom: 20 }}>
        {totalBudget ?? 0} &#8369;
      </Text>

      <TextInput
        placeholder="Enter amount"
        keyboardType="numeric"
        value={amount}
        onChangeText={setAmount}
        style={{
          borderWidth: 1,
          borderColor: '#ccc',
          padding: 8,
          marginBottom: 12,
          borderRadius: 4,
        }}
      />

      <Button title="Add Budget" onPress={handleBudget} />

      <View style={{ paddingVertical: 50, gap: 20, flexDirection: 'row' }}>
        <Button
          title="My Budget"
          onPress={() => navigation.navigate('Expenses')}
        />

        <Button
          title="Expenses"
          onPress={() => navigation.navigate('Expenses')}
        />
      </View>
    </View>
  );
}
