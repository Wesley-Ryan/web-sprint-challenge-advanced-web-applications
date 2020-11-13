import axios from 'axios'

export const BASE_URL='http://localhost:5000'

const axiosWithAuth = () => {
    const token = localStorage.getItem('token')
    
    return axios.create({ 
        headers: { 
            authorization: token
        }
    })
}

export const login = (user) => { 
    axios.post(`${BASE_URL}/api/login`, user)
    .then((response) => { 
        window.localStorage.setItem('token', response.data.payload)
    })
    .catch((error) => { 
        console.log("There was an error logging into the server", error)
    })


}

export const getBubbles = () => { 
    axiosWithAuth().get(`${BASE_URL}/api/colors`)
    .then((response) => { 
        console.log(response.data)
    })
    .catch((error) => { 
        console.log("There was an error retreving your bubbles", error)
    })
}

