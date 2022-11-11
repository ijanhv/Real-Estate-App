import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com'

// headers: {
//     'X-RapidAPI-Key': 'b23825cf84msha2bb21704e5eb3cp153e07jsn999b7312cc3d',
//     'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
//   }

export const fetchApi = async (url) => {
    const { data } = await axios.get((url), {            
        headers: {
            'X-RapidAPI-Key': 'b23825cf84msha2bb21704e5eb3cp153e07jsn999b7312cc3d',
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
        }
    })

    return data;
}