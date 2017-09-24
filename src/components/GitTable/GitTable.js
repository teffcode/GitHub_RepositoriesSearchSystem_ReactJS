import React from 'react';
import { Table } from 'antd';

import 'antd/dist/antd.css';

// Columns: Language, Default branch, Git url, Description and Name 
const columns = [
  { title: 'Language', width: 180, dataIndex: 'language', key: '1', fixed: 'left' },
  { title: 'Default Branch', dataIndex: 'default_branch', key: '2'},
  { title: 'Git Url', dataIndex: 'url', key: '3' },
  { title: 'Description', dataIndex: 'name', key: '4' },
  { title: 'Name', width: 230, dataIndex: 'description', key: 'operation', fixed: 'right' },
];

// Repositorie's Table
const GitTable = ({data}) => (
    <Table 
        columns={columns} 
        dataSource={data} 
        scroll={{ x: 1300 }} 
        pagination={{ pageSize: 5 }}
    />
);

export default GitTable;