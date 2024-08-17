
import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from './UsePublicAxios';

const useClient = () => {
    const axiosPublic = useAxiosPublic();
    const {refetch, data: users =[], isPending: loading } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosPublic.get('/users');
            return res.data;
          },
    })

  return [users, loading, refetch]
}

export default useClient;