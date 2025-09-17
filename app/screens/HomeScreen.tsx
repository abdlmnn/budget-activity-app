import { Text, View } from 'react-native';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { API_URL } from '@env';
import Buttons from '../components/Buttons';
import BudgetForm from '../components/BudgetForm';
import DisplayBudget from './DisplayBudget';
import ExpensesForm from '../components/ExpensesForm';
import DisplayExpenses from './DisplayExpenses';

type Budget = {
  amount: string;
};

type Expenses = {
  name: string;
  description: string;
  amount: string;
};

export default function HomeScreen() {
  const [totalBudget, setTotalBudget] = useState('');

  const [showBudgetForm, setShowBudgetForm] = useState(false);
  const [showBudgetHistory, setShowBudgetHistory] = useState(false);

  const [showExpensesForm, setShowExpensesForm] = useState(false);
  const [showExpensesHistory, setShowExpensesHistory] = useState(false);

  const [budget, setBudget] = useState<Budget[]>([]);
  const [expenses, setExpenses] = useState<Expenses[]>([]);

  useEffect(() => {
    fetchTotalBudgets();
    fetchBudgets();
    fetchExpenses();
  }, []);

  const fetchTotalBudgets = async () => {
    try {
      const respone = await axios.get(`${API_URL}/budget/get_totalBudget.php`);

      console.log('Total budget:', respone.data.total);

      setTotalBudget(respone.data.total);
    } catch (error) {
      console.log('Error:', error);
    }
  };

  const fetchBudgets = async () => {
    try {
      const respone = await axios.get(`${API_URL}/budget/get_budgets.php`);

      console.log('Budgets:', respone.data.budgets);

      setBudget(respone.data.budgets);
    } catch (error) {
      console.log('Error:', error);
    }
  };

  const fetchExpenses = async () => {
    try {
      const response = await axios.get(`${API_URL}/budget/get_expenses.php`);

      console.log('Expenses:', response.data.expenses);

      setExpenses(response.data.expenses);
    } catch (error) {
      console.log('Error:', error);
    }
  };

  return (
    <View style={{ flex: 1, padding: 20, backgroundColor: '#fff' }}>
      <Text
        style={{
          fontSize: 22,
          fontWeight: 'bold',
          marginBottom: 20,
          color: '#2196F3',
        }}
      >
        {totalBudget ?? 0} ₱
      </Text>

      <Buttons
        setShowBudgetForm={setShowBudgetForm}
        setShowBudgetHistory={setShowBudgetHistory}
        setShowExpensesForm={setShowExpensesForm}
        setShowExpensesHistory={setShowExpensesHistory}
      />

      {showBudgetForm && (
        <BudgetForm
          fetchTotalBudgets={fetchTotalBudgets}
          fetchBudgets={fetchBudgets}
        />
      )}

      {showExpensesForm && (
        <ExpensesForm
          fetchTotalBudgets={fetchTotalBudgets}
          fetchExpenses={fetchExpenses}
        />
      )}

      {showBudgetHistory && <DisplayBudget budget={budget} />}

      {showExpensesHistory && <DisplayExpenses expenses={expenses} />}
    </View>
  );
}
