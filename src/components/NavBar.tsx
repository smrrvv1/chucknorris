import { useEffect, useState } from 'react'
import { Drawer, List, ListItem, ListItemButton } from '@mui/material'
import { useNavigate } from 'react-router'
import { axiosApi } from '../axiosApi'

export const NavBar = () => {
  const [categories, setCategories] = useState<string[]>([])
  const navigate = useNavigate()

  useEffect(() => {
    const fetchCategories = async () => {
      const { data } = await axiosApi.get('/categories')
      setCategories(data)
    }
    fetchCategories()
  }, [])

  return (
    <Drawer variant="permanent" anchor="left">
      <List sx={{ width: 220 }}>
        {categories.map((cat) => (
          <ListItem key={cat}>
            <ListItemButton onClick={() => navigate(`/${cat}`)}>
              {cat}
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  )
}