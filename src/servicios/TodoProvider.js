import axios from "axios";

const provider = {
  all: () => {
    return axios
      .get("http://todo-api.bluebox-soft.com/api/todos")
      .then((response) => {
        return Promise.resolve(
          response.data
        );
      })
      .catch((err) => {
        console.log({ err });
        return Promise.reject(err);
      });
  },
  create: (data) => {
    return axios
      .post("http://todo-api.bluebox-soft.com/api/todos", data)
      .then(function (response) {
        return Promise.resolve(response.data);
      })
      .catch(function (err) {
        console.log(err);
        return Promise.reject(err);
      });
  },
  get: (id) => {
    return axios
      .get(`http://todo-api.bluebox-soft.com/api/todos/${id}`)
      .then((response) => {
        return Promise.resolve(response.data);
      })
      .catch((err) => {
        console.log({ err });
        return Promise.reject(err);
      });
  },
  update: (id, data) => {
    return axios
      .put("http://todo-api.bluebox-soft.com/api/todos/" + id, data)
      .then(function (response) {
        return Promise.resolve(response.data);
      })
      .catch(function (err) {
        console.log({err});
        return Promise.reject(err);
      });
  },
  delete: (id) => {
    return axios
      .delete(`http://todo-api.bluebox-soft.com/api/todos/${id}`)
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
