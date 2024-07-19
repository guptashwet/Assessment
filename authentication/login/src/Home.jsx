import React from 'react'
import {Box} from '@mui/material'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <Box component={'nav'}>
        <ul>
          <li>
            <Link to={"/register"}>Register</Link>
          </li>
        </ul>  
    </Box>
  )
}

export default Home
