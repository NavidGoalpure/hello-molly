import { IEmployee, IOrganizationStructure } from '../../interfaces/employee';

const mockData = {
  ceo: {
    id: '1',
    parentId: null,
    name: 'John Smith',
    role: 'CEO',
    avatar: 'https://mui.com/static/images/avatar/1.jpg',
  },
  midLevels: [
    {
      id: '2',
      parentId: '1', // Alice is the child of John
      name: 'Alice Johnson',
      role: 'Manager',
      department: 'DEVELOPMENT',
      avatar: 'https://mui.com/static/images/avatar/2.jpg',
    },
    {
      id: '3',
      parentId: '1', // Bob is the child of John
      name: 'Bob Anderson',
      role: 'Manager',
      department: 'RESEARCH',
      avatar: 'https://mui.com/static/images/avatar/3.jpg',
    },
    {
      id: '4',
      parentId: '1', // Eve is the child of John
      name: 'Eve Williams',
      role: 'Manager',
      department: 'MARKETING',
      avatar: 'https://mui.com/static/images/avatar/4.jpg',
    },
  ],
  lowLevel: [
    {
      id: '5',
      parentId: '2', // Charlie is the child of Alice
      name: 'Charlie Brown',
      role: 'Employee',
      department: 'DEVELOPMENT',
      avatar: 'https://mui.com/static/images/avatar/5.jpg',
    },
    {
      id: '6',
      parentId: '2', // David is the child of Alice
      name: 'David Davis',
      role: 'Employee',
      department: 'DEVELOPMENT',
      avatar: 'https://mui.com/static/images/avatar/6.jpg',
    },
    {
      id: '7',
      parentId: '3', // Frank is the child of Bob
      name: 'Frank White',
      role: 'Employee',
      department: 'RESEARCH',
      avatar: 'https://mui.com/static/images/avatar/7.jpg',
    },
    {
      id: '8',
      parentId: '3', // Grace is the child of Bob
      name: 'Grace Smith',
      role: 'Employee',
      department: 'RESEARCH',
      avatar: 'https://mui.com/static/images/avatar/2.jpg',
    },
    {
      id: '9',
      parentId: '4', // Hank is the child of Eve
      name: 'Hank Robinson',
      role: 'Employee',
      department: 'MARKETING',
      avatar: 'https://mui.com/static/images/avatar/3.jpg',
    },
  ],
} as IOrganizationStructure;

export default mockData;
