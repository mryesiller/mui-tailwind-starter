import * as React from 'react'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Slider from '@mui/material/Slider'

export default function App() {
  return (
    <Container maxWidth='sm'>
      <div className='my-4'>
        <Typography variant='h4' component='h1' gutterBottom>
          Create React App + Tailwind CSS example
        </Typography>
        <Button className='ml-4' variant='text'>
          Text
        </Button>
        <Button variant='contained'>Contained</Button>
        <Button variant='outlined'>Outlined</Button>
        <Slider
          className='my-24'
          defaultValue={30}
          classes={{ active: 'shadow-none' }}
          componentsProps={{ thumb: { className: 'hover:shadow-none' } }}
        />
      </div>
    </Container>
  )
}
