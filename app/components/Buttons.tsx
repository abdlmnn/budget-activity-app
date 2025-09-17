import { StyleSheet, Text, View, Pressable } from 'react-native';
import React from 'react';

export default function Buttons({
  setShowBudgetForm,
  setShowBudgetHistory,
  setShowExpensesForm,
  setShowExpensesHistory,
}: any) {
  return (
    <View
      style={{
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        marginBottom: 20,
      }}
    >
      <Pressable
        onPress={() =>
          setShowBudgetForm((prev: boolean) => {
            if (!prev) {
              setShowBudgetHistory(false);
              setShowExpensesForm(false);
              setShowExpensesHistory(false);
            }
            return !prev;
          })
        }
        style={{
          flexBasis: '48%',
          backgroundColor: '#2196F3',
          paddingVertical: 12,
          borderRadius: 8,
          alignItems: 'center',
          marginBottom: 12,
        }}
      >
        <Text style={{ color: '#fff', fontSize: 16, fontWeight: '600' }}>
          Budget
        </Text>
      </Pressable>

      <Pressable
        onPress={() =>
          setShowBudgetHistory((prev: boolean) => {
            if (!prev) {
              setShowBudgetForm(false);
              setShowExpensesForm(false);
              setShowExpensesHistory(false);
            }
            return !prev;
          })
        }
        style={{
          flexBasis: '48%',
          backgroundColor: '#4CAF50',
          paddingVertical: 12,
          borderRadius: 8,
          alignItems: 'center',
          marginBottom: 12,
        }}
      >
        <Text style={{ color: '#fff', fontSize: 16, fontWeight: '600' }}>
          Budget History
        </Text>
      </Pressable>

      <Pressable
        onPress={() =>
          setShowExpensesForm((prev: boolean) => {
            if (!prev) {
              setShowBudgetForm(false);
              setShowBudgetHistory(false);
              setShowExpensesHistory(false);
            }
            return !prev;
          })
        }
        style={{
          flexBasis: '48%',
          backgroundColor: '#FF5722',
          paddingVertical: 12,
          borderRadius: 8,
          alignItems: 'center',
          marginBottom: 12,
        }}
      >
        <Text style={{ color: '#fff', fontSize: 16, fontWeight: '600' }}>
          Expenses
        </Text>
      </Pressable>

      <Pressable
        onPress={() =>
          setShowExpensesHistory((prev: boolean) => {
            if (!prev) {
              setShowBudgetForm(false);
              setShowBudgetHistory(false);
              setShowExpensesForm(false);
            }
            return !prev;
          })
        }
        style={{
          flexBasis: '48%',
          backgroundColor: '#9C27B0',
          paddingVertical: 12,
          borderRadius: 8,
          alignItems: 'center',
          marginBottom: 12,
        }}
      >
        <Text style={{ color: '#fff', fontSize: 16, fontWeight: '600' }}>
          Expenses History
        </Text>
      </Pressable>
    </View>
  );
}
