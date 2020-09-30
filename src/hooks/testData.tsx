import useSWR from 'swr';
import fetcher from '../libs/fetch';

const Test = () => useSWR('/api/hello', fetcher)

export default Test;
