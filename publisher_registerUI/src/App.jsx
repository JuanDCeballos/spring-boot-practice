import 'bootstrap/dist/css/bootstrap.css';
import { useEffect, useState } from 'react';
import api from './api/axiosConfig';
import PublisherCrud from './components/PublisherCrud';

const App = () => {
  const [publishers, setPublishers] = useState([]);

  useEffect(() => {
    (async () => await load())();
  }, []);

  const load = async () => {
    const result = await api.get('/all');
    setPublishers(result.data);
  };

  return (
    <>
      <h1 className='text-center'>List Of Publisher</h1>
      <PublisherCrud load={load} publishers={publishers} />
    </>
  );
};

export default App;
