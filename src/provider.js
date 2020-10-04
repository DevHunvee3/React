import axios from 'axios'

const provider = {
    allPosts: () => {
        return axios.get('https://jsonplaceholder.typicode.com/posts/')
        .then((response) => {
            console.log('asd')
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
            console.log('asd')
            return Promise.resolve(response.data)
        })
        .catch((error) => {
            console.log({ error });
            return Promise.reject(error);
        });
    },
    appendPost: (data) => {
        return axios.post('https://jsonplaceholder.typicode.com/posts/')
        .then(() => {
            
        })
        .catch(() => {})
    }
}


export default provider;