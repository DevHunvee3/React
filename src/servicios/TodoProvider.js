import axios from "axios";

const provider = {
  all: () => {
    return axios
      .get("https://jsonplaceholder.typicode.com/todos")
      .then((response) => {
        return Promise.resolve(
          response.data.filter((todo) => todo.completed === true)
        );
      })
      .catch((err) => {
        console.log({ err });
        return Promise.reject(err);
      });
  },
  create: (data) => {
    return axios.post('https://jsonplaceholder.typicode.com/todos', data)
      .then(function (response) {
        return Promise.resolve(response.data)
      })
      .catch(function (err) {
        console.log(err);
        return Promise.reject(err)
      });
  },
  get: (id) => {
    return axios
      .get(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then((response) => {
        return Promise.resolve(response.data);
      })
      .catch((err) => {
        console.log({ err });
        return Promise.reject(err);
      });
  },
  update: (id, data) => {
    //modificar todo con id y data
  },
  delete: (id) => {
    return axios
      .delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then((response) => {
        return Promise.resolve(response.data);
      })
      .catch((err) => {
        console.log({ err });
        return Promise.reject(err);
      });
  },
};

export default provider;
