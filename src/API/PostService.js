import axios from "axios";

export default class PostService {
    static async getCategory(category) {
        const response = await axios.get('http://176.57.208.199:8095/get_stores/category?category='+category)
        return response
    }

    static async getSearch(name){
        const response= await axios.get('http://176.57.208.199:8095/search/?name='+name)
        return response
    }


    static async getImage(id){
        const response= await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
        return response
    }
}