import axios from 'axios'


const axiosPublic =  axios.create({
    baseURL: 'https://hazem-air-server.vercel.app',
  })

const useAxiosPublic = () => {
  return axiosPublic
}

export default useAxiosPublic;