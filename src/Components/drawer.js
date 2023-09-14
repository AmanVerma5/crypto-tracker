import React, { useState } from 'react';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';

export default function TemporaryDrawer() {
  let [open,setOpen]=useState(false)
  return (
    <div>
          <Button onClick={()=>setOpen(true)}><MenuRoundedIcon/></Button>
          <Drawer
            anchor={'right'}
            open={open}
            onClose={()=>setOpen(false)}
          >
           <div className="side-bar">
                    <a href="/">
                        <p>Home</p>
                    </a>
                    <a href="/">
                        <p>Compare</p>
                    </a>
                    <a href="/">
                        <p>Dashboard</p>
                    </a>
                    
                </div>
          </Drawer>
    </div>
  );
}