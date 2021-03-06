import axios from "axios"
import { Item, Repos } from "./interface";

const token = process.env.REACT_APP_TOKEN

export const getUserSearch = async (search: string) => {
    try {
        if(search.length > 0) {
            const options = {
                headers : {
                    'Authorization': `token ${token}`
                }
            }
            const res = await axios.get(`https://api.github.com/search/users?q=${search}`,options)
            const data: Item[] = res.data.items
            return data;
        }
    } catch (error) {
        console.log("error getUserSearch", error)
    }
}

export const getReposSearchWithPage = async (search: string, contentNumber: number, page: number) => {
    try {
        if(search.length > 0) {
            const options = {
                headers : {
                    'Authorization': `token ${token}`
                }
            }
            const res = await axios.get(`https://api.github.com/users/${search}/repos?per_page=${contentNumber}&page=${page}`,options)
            const data: Repos[] = res.data
            return data;
        }
    } catch (error) {
        console.log("error getReposSearch", error)
    }
}

export const getReposSearch = async (search: string) => {
    try {
        if(search.length > 0) {
            const options = {
                headers : {
                    'Authorization': `token ${token}`
                }
            }
            const res = await axios.get(`https://api.github.com/users/${search}/repos`,options)
            const data: Repos[] = res.data
            return data;
        }
    } catch (error) {
        console.log("error getReposSearch", error)
    }
}