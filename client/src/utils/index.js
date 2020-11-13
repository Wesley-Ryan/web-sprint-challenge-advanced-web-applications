import axios from 'axios'

export const BASE_URL='http://localhost:5000'

export const axiosWithAuth = () => {
    const token = localStorage.getItem('token')
    
    return axios.create({ 
        headers: { 
            authorization: token
        }
    })
}

export const fetchColors = () => {
    return axiosWithAuth()
       .get(`${BASE_URL}/api/colors`)
       .then(res => {
          return (res)
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

export const updateColor = (color) => { 
    axiosWithAuth()
    .put(`${BASE_URL}/api/colors/${color.id}`, color)
    .then((response) => { 
        console.log(response.data)
    })
    .catch((error) => { 
        console.log("There was an error updating the color", error)
    })
}

export const removeColor = (color) => { 
    axiosWithAuth()
    .delete(`${BASE_URL}/api/colors/${color.id}`, color)
    .then((response) => { 
        console.log(response.data)
    })
    .catch((error) => { 
        console.log("There was an error removing the color", error)
    })

}

