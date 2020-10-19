import React, { useEffect, useState } from 'react';
import TodoForm from './form.js';
import TodoList from './list.js';
import axios from "axios";

import './todo.scss';

const todoAPI = 'http://localhost:4000/api/v1/items';


const ToDo = () => {

  const [list, setList] = useState([]);

  const _addItem = (item) => {
    item.due = new Date();
    axios({
      url: todoAPI,
      method: 'post',
      mode: 'cors',
      cache: 'no-cache',
      headers: { 'Content-Type': 'application/json' },
      data: item
    })
      .then(({ data: savedItem }) => {
        setList([...list, savedItem])
      })
      .catch(console.error);
  };

  const _toggleComplete = id => {

    let item = list.filter(i => i._id === id)[0] || {};

    if (item._id) {

      item.completed = !item.completed;

      let url = `${todoAPI}/${id}`;

      axios({
        url,
        method: 'put',
        mode: 'cors',
        cache: 'no-cache',
        headers: { 'Content-Type': 'application/json' },
        data: item
      })
        .then(() => {
          setList(list.map(listItem => listItem._id === item._id ? item : listItem));
        })
        .catch(console.error);
    }
  };

  const _getTodoItems = () => {
    axios({
      url: todoAPI,
      method: 'get',
      mode: 'cors',
    })
      .then(({ data }) => setList(data.results))
      .catch(console.error);
  };

  useEffect(_getTodoItems, []);


  const _deleteItem = id => {

    let item = list.filter(i => i._id === id)[0] || {};

    if (item._id) {
      let url = `${todoAPI}/${id}`;

      axios({
        url,
        method: 'delete',
        mode: 'cors',
        cache: 'no-cache',
      })
        .then(() => {
          setList(list.filter(listItem => listItem._id !== item._id));
        })
        .catch(console.error);
    }
  };

  return (
    <>
      <header>
        <h2>
          There are {list.filter(item => !item.complete).length} Items To Complete
        </h2>
      </header>

      <section className="todo">

        <div>
          <TodoForm handleSubmit={_addItem} />
        </div>

        <div>
          <TodoList
            list={list}
            deleteItem={_deleteItem}
            handleComplete={_toggleComplete}
          />
        </div>
      </section>
    </>
  );
};

export default ToDo;
