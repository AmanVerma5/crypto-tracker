import React from 'react';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import {createTheme} from '@mui/material';
import { ThemeProvider } from '@emotion/react';
import Grid from './GridView/Grid';
import './style.css';
import List from './ListView/List';

export default function TabComponent({coins}) {
  const [value, setValue] = React.useState('grid');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const style={
    color:'var(--white)',
    fontSize:'0.8rem',
    fontWeight:600,
    fontFamily:"Inter"
  }
  const theme=createTheme({
    palette:{
        primary:{
            main:'#3a80e9'
        }
    }
  })
  return (
    <ThemeProvider theme={theme}>
      <TabContext value={value}>
          <TabList onChange={handleChange} variant='fullWidth'>
            <Tab label="Grid" value="grid" sx={style} />
            <Tab label="List" value="list" sx={style}/>
          </TabList>
        <TabPanel value="grid">
          <div className='grid-view'>
            {
              coins.map((coin,index)=>{
                return <Grid coin={coin} key={index}/>
              })
            }
          </div>
        </TabPanel>
        <TabPanel value="list">
          <table>
            {
              coins.map((coin,index)=>{
                return <List coin={coin} key={index}/>
              })
            }
          </table>
        </TabPanel>
      </TabContext>
    </ThemeProvider>
  );
}


