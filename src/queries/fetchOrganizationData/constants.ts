const mockData = {
  ceo: {
    id: '1',
    parentId: null,
    name: 'John Smith',
    role: 'CEO',
  },
  midLevels: [
    {
      id: '2',
      parentId: '1', // Alice is the child of John
      name: 'Alice Johnson',
      role: 'Manager',
      department: 'DEVELOPMENT',
    },
    {
      id: '3',
      parentId: '1', // Bob is the child of John
      name: 'Bob Anderson',
      role: 'Manager',
      department: 'RESEARCH',
    },
    {
      id: '4',
      parentId: '1', // Eve is the child of John
      name: 'Eve Williams',
      role: 'Manager',
      department: 'MARKETING',
    },
  ],
  lowLevel: [
    {
      id: '5',
      parentId: '2', // Charlie is the child of Alice
      name: 'Charlie Brown',
      role: 'Employee',
      department: 'DEVELOPMENT',
    },
    {
      id: '6',
      parentId: '2', // David is the child of Alice
      name: 'David Davis',
      role: 'Employee',
      department: 'DEVELOPMENT',
    },
    {
      id: '7',
      parentId: '3', // Frank is the child of Bob
      name: 'Frank White',
      role: 'Employee',
      department: 'RESEARCH',
    },
    {
      id: '8',
      parentId: '3', // Grace is the child of Bob
      name: 'Grace Smith',
      role: 'Employee',
      department: 'RESEARCH',
    },
    {
      id: '9',
      parentId: '4', // Hank is the child of Eve
      name: 'Hank Robinson',
      role: 'Employee',
      department: 'MARKETING',
    },
  ],
};

export default mockData;
