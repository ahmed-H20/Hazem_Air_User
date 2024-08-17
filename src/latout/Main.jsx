import { AuthContext } from '../context/AuthProvider'
import Loading from '../component/Loading'
import { useContext } from 'react'
import DashboardLayout from './DashboardLayout'

const Main = () => {
    const {loading} = useContext(AuthContext)
    return (
      <div>
        {
          loading ? 
          <Loading/>
          :
          <div>
            <DashboardLayout/>
          </div>
        }
      </div>
    )
}

export default Main
