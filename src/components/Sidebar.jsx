import { Stack } from '@mui/material'
import React from 'react'
import { categories } from '../utils/constants';

const Sidebar = ({ selectedCat, setSelectedCat }) => {
    return (
        <Stack sx={{
            overflowY: "auto",
            height: { sx: 'auto', md: '95%' },
            flexDirection: { md: 'column' }
        }}>
            {
                categories.map((category) => (
                    <button className='category-btn' style={{
                        background: category.name === selectedCat && '#fc1503 ', color: ' #fff'
                    }}
                        key={category.name}
                        onClick={() => setSelectedCat(category.name)}>
                        <span
                            style={{ color: category.name === selectedCat ? 'white' : 'red', marginRight: '15px' }} >{category.icon}</span>
                        <span style={{ opacity: category.name === selectedCat ? '1' : '0.8' }}>{category.name}</span>
                    </button>
                ))
            }
        </Stack>
    )
}
export default Sidebar;
