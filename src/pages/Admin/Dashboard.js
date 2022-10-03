// import { Route, Routes, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import DataTable from "./AdminTable"
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import AddNew from './AddNew';


export default function Dashboard({ fields, rows, modalPorps, EditRowPorps }) {

  const [value, setValue] = useState('Table');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  // const navigate = useNavigate();
  // const handleNavigate = () => {
  //   navigate(`/new`)
  // }

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Table" value="Table" />
            <Tab label="Create" value="Create" />
            <Tab label="Edit" value="Edit" />
          </TabList>
        </Box>
        <Box sx={{ mt: 3 }}>
          <TabPanel sx={{ p: 0 }} value="Table">
            <DataTable fields={fields} rows={rows} modalPorps={modalPorps} />
          </TabPanel>
          <TabPanel sx={{ p: 0 }} value="Create">
            <AddNew />
          </TabPanel>
          <TabPanel sx={{ p: 0 }} value="Edit">
            <AddNew EditRowPorps={EditRowPorps} />
          </TabPanel>
        </Box>
      </TabContext>
    </Box>
    // <div>
    //   <Routes>
    //     <Route path="" element={ <DataTable fields={fields} rows={rows} modalPorps={modalPorps} handleNavigate={handleNavigate} />} />
    //     <Route path="/new" element={<AddNew />} />
    //   </Routes>
    // </div>
  );
}
