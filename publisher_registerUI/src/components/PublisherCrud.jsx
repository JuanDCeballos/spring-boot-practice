import { useState } from 'react';
import api from '../api/axiosConfig';
import PublisherList from './PublisherList';

const PublisherCrud = ({ load, publishers }) => {
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [published, setPublished] = useState('');

  //   revisar sintaxis luego
  const save = async (e) => {
    e.preventDefault();
    await api.post('/create', {
      name,
      email,
      published,
    });

    alert('Publisher record saved!');

    setId('');
    setName('');
    setEmail('');
    setPublished('');
    load();
  };

  const editEmployee = async () => {
    setName(publishers.name);
    setEmail(publishers.email);
    setPublished(publishers.published);
    setId(publishers.id);
  };

  const deleteEmployee = async (id) => {
    await api.delete('/delete/' + id);
    alert('Publisher Details Deleted Successfully');
    load();
  };

  const update = async (e) => {
    e.preventDefault();

    if (!id) {
      return alert('Publisher details not found!');
    }

    await api.put('/update', {
      id,
      name,
      email,
      published,
    });

    alert('Publisher Details Updated');

    setId('');
    setName('');
    setEmail('');
    setPublished('');
    load();
  };

  return (
    <>
      <div className='container mt-4'>
        <form>
          <div className='form-group my-2'>
            <input
              type='text'
              className='form-control'
              hidden
              value={id}
              onChange={(e) => setId(e.target.value)}
            />
            <label>Name</label>
            <input
              type='text'
              className='form-control'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className='form-group mb-2'>
            <label>Email</label>
            <input
              type='text'
              className='form-control'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className='row'>
            <div className='col-4'>
              <label>Published</label>
              <input
                type='text'
                className='form-control'
                value={published}
                placeholder='Published Post(s)'
                onChange={(e) => setPublished(e.target.value)}
              />
            </div>
          </div>

          <div>
            <button className='btn btn-primary m-4' onClick={save}>
              Register
            </button>
            <button className='btn btn-warning m-4' onClick={update}>
              Update
            </button>
          </div>
        </form>
        <PublisherList
          publishers={publishers}
          editEmployee={editEmployee}
          deleteEmployee={deleteEmployee}
        />
      </div>
    </>
  );
};

export default PublisherCrud;
