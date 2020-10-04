import axios from 'axios'

const provider = {
    allPosts: () => {
        return axios.get('https://jsonplaceholder.typicode.com/posts/')
        .then((response) => {
            return Promise.resolve(response.data)
        })
        .catch((error) => {
            console.log({ error });
            return Promise.reject(error);
        });
    },
    getPost: (id) => {
        return axios.get('https://jsonplaceholder.typicode.com/posts/' + id)
        .then((response) => {
            return Promise.resolve(response.data)
        })
        .catch((error) => {
            console.log({ error });
            return Promise.reject(error);
        });
    },
    appendPost: (data) => {
        return axios.post('https://jsonplaceholder.typicode.com/posts/', data)
        .then((response) => {
            console.log(response.data)
        })
        .catch(() => {})
    },
    editPost: (data) => {
        return axios.put('https://jsonplaceholder.typicode.com/posts/' + data.id, data)
        .then((response) => {
            console.log(response.data)
        })
    }
}


export default provider;