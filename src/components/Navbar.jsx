import React from 'react'
import { Stack, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import { logo } from '../utlis/constants'
import SearchBar from './SearchBar';


const Navbar = () => (
    <Stack direction='row' alignItems='center' p={2} sx={{ position:'sticky',top:'0',background:'#000',justifyContent:'space-between' }}>
      <Link to='/' style={{ display:'flex',alignItems:'center' }}>
        <img src={logo} alt="logo" height={45} style={{ borderRadius:"50%" }} />
        <Typography variant='h6' fontWeight={500} color="#fff" ml={1}>
          ElayyanTube
        </Typography>
      </Link>
      <SearchBar />
    </Stack>
  )


export default Navbar