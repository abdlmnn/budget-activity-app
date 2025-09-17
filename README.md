## Budget App Setup Guide

Step 1: Start XAMPP

1. Open XAMPP.
2. Start Apache and MySQL modules.

Step 2: Open phpMyAdmin

- Go to phpMyAdmin in XAMPP to manage your databases.

Step 3: Download PHP & Database Files

- Download the project files from Google Drive:

[Download Link](https://drive.google.com/drive/folders/1EI8h9kb9-VleFNJjF-Ui8PpwCRvzpAOx)

Step 4: Move Files to XAMPP

- Copy the downloaded folder into:

```bash
xampp/htdocs/Budget
```

Step 5: Import the Database

1. Open phpMyAdmin.
2. Import the database file budget.sql.

Step 6: Test PHP Connection

1. Open your browser and go to:

[Run](http://localhost/Budget/connect.php)

- If you see an error your URL might be incorrect.
  If the screen is white connection is working correctly.

Step 7: Use Your Local IP Address

- Replace localhost with your computer’s IP to access from other devices.

Step 8: Find Your IP and Test

1. Open Command Prompt and run:

```nginx
ipconfig
```

2. Look for your IPv4 Address (e.g., 192.168.1.10).
3. Test in the browser:

[Run](http://192.168.xxxx/Budget/connect.php)

- If the screen is white connection is working.

Step 9: Install Axios

```bash
npm install axios
```

Step 10: Fetch Budgets

```tsx
import React, { useState } from 'react';
import axios from 'axios';

const [budget, setBudget] = useState([]);

const fetchBudgets = async () => {
  try {
    const response = await axios.get(
      'http://192.168.XXXX/Budget/get_budgets.php',
    );
    setBudget(response.data.budgets);
  } catch (error) {
    console.log('Error:', error);
  }
};
```

Step 11: Add Budget

```tsx
const [amount, setAmount] = useState('');

const handleBudget = async () => {
  try {
    const response = await axios.post(
      'http://192.168.XXXX/Budget/add_budget.php',
      {
        amount,
      },
    );

    setAmount('');

    fetchBudgets();
  } catch (error) {
    console.log('Error:', error);
  }
};
```

Step 11: Add Expenses

```tsx
const [name, setName] = useState('');
const [Description, setDescription] = useState('');
const [amount, setAmount] = useState('');

const handleBudget = async () => {
  try {
    const response = await axios.post(
      'http://192.168.XXXX/Budget/add_expenses.php',
      {
        name,
        description,
        amount,
      },
    );

    setName('');
    setDescription('');
    setAmount('');
  } catch (error) {
    console.log('Error:', error);
  }
};
```
