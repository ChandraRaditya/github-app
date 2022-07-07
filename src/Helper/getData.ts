import axios from "axios"
import { Item, Repos } from "./interface";

export const getUserSearch = async (search: string) => {
    try {
        if(search.length > 0) {
            const options = {
                headers : {
                    'Authorization': `token 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`
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

export const getReposSearch = async (search: string) => {
    try {
        if(search.length > 0) {
            const options = {
                headers : {
                    'Authorization': `token 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`
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