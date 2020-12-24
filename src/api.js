import axios from 'axios'

export const getUser = ()=>axios.get('/api/userItems')