import './App.css';
import axios from "axios";
import { useEffect, useState } from "react";
import { Table, TableContainer } from '@mui/material';
import {TableBody} from '@mui/material';
import {TableCell} from '@mui/material';
import {TableHead} from '@mui/material';
import {TableRow} from '@mui/material';

function App() {
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    axios.get('http://www.7timer.info/bin/api.pl?lon=113.17&lat=23.09&product=astro&output=json').then((respone) => {
      setTableData(respone.data.dataseries);
    }).catch((error) => {

    })
  },[])

  console.log(tableData)
  return (
    <div className="App">
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>cloudcover</TableCell>
              <TableCell>lifted_index</TableCell>
              <TableCell>prec_type</TableCell>
              <TableCell>rh2m</TableCell>
              <TableCell>seeing</TableCell>
              <TableCell>temp2m</TableCell>
              <TableCell>timepoint</TableCell>
              <TableCell>transparency</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
              {tableData.filter((data) => {return (data.cloudcover === 1)}).map((data, index) => {
              //   return 
              // })
              // // {tableData.map((data,index) => {
                return(
                  <TableRow key={index}>
                    <TableCell>{data.cloudcover}</TableCell>
                    <TableCell>{data.lifted_index}</TableCell>
                    <TableCell>{data.prec_type}</TableCell>
                    <TableCell>{data.rh2m}</TableCell>
                    <TableCell>{data.seeing}</TableCell>
                    <TableCell>{data.temp2m}</TableCell>
                    <TableCell>{data.timepoint}</TableCell>
                    <TableCell>{data.transparency}</TableCell>
                  </TableRow>
                )
              })}
        </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default App;
