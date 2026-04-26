import { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { axiosApi } from '../axiosApi'
import { Typography, Container } from '@mui/material'

export const JokePage = () => {
  const { category } = useParams()
  const [joke, setJoke] = useState('')

  useEffect(() => {
    const fetchJoke = async () => {
      const { data } = await axiosApi.get(`/random?category=${category}`)
      setJoke(data.value
    }
    if (category) fetchJoke()
  }, [category])

  return (
    <Container sx={{ mt: 5, ml: 30 }}>
      <Typography variant="h5">
        Категория: {category}
      </Typography>
      <Typography 
      variant="body1" 
      sx={{ mt: 2 }}>
        {joke}
      </Typography>
    </Container>
  )
}