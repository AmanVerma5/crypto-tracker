import React, { useState } from 'react';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import { Link } from "react-router-dom";

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
                    <Link to="/">
                        <p>Home</p>
                    </Link>
                    <Link to="/">
                        <p>Compare</p>
                    </Link>
                    <Link to="/dashboard">
                        <p>Dashboard</p>
                    </Link>
                    
                </div>
          </Drawer>
    </div>
  );
}