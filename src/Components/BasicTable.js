import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import Title from 'antd/lib/skeleton/Title';
import '../App.css'

const BasicTable = (props) => {
  const [searchName, setSearchName] = useState('')
  const handleChange = (e) => {
    setSearchName(e.target.value)
    console.log(searchName)

  }

  console.log('table row', props.data)
  return (
    <div>
      <input value={searchName} onChange={handleChange} placeholder="Search Library"/>
        
      <h2>Books Data Library</h2>
      <div className="App">
        <table>
          <thead>
            <tr>

              <th>No</th>
              <th>Unit</th>
              <th>Title</th>

            </tr>
          </thead>
          <tbody>
            {props.data.filter((value) => {
              if (searchName === '') {
                return value
              }
              else if (value.title.toLowerCase().includes(searchName.toLowerCase())) {
                return value
              }

            }).map((val, key) => {
              return (
                <tr key={key}>
                  <td><p>{val.userId}</p></td>
                  <td>{val.id}</td>
                  <td><p>{val.title}</p></td>

                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default BasicTable