import {LeaderDataType} from "../../types/leaderboardTypes";
import Axios from "../../provider/axios/axios";
import {ResponseData} from "../../util/helper/response";

const axios = Axios.getInstance();

export function getOne(leaderId: number) {
    return new Promise((resolve, reject) => {
        axios.get(`/leader/${leaderId}`)
            .then((res) => {
                resolve(ResponseData(res));
            })
            .catch((err:any) => {
                reject(err.data);
            });
    });
}

export function getAll(sortBy: string = 'id', orderBy: string = 'asc') {
    return new Promise((resolve, reject) => {
        axios.get(`/leaders/${sortBy}/${orderBy}`)
            .then((res) => {
                resolve(ResponseData(res));
            })
            .catch((err:any) => {
                reject(err.data);
            });
    });
}

export function store(leaderData: LeaderDataType) {
    return new Promise((resolve, reject) => {
        axios.post('/leader/store', leaderData)
            .then((res) => {
                resolve(ResponseData(res));
            })
            .catch((err:any) => {
                reject(err.data);
            });
    });
}

export function update(leaderData: LeaderDataType, id: number) {
    return new Promise((resolve, reject) => {
        axios.post(`/leader/${id}`, leaderData)
            .then((res) => {
                resolve(ResponseData(res));
            })
            .catch((err:any) => {
                reject(err.data);
            });
    });
}

export function updateScore(id: number, context:string) {
    return new Promise((resolve, reject) => {
        axios.get(`/leader/update_score/${id}/${context}`)
            .then((res) => {
                resolve(ResponseData(res));
            })
            .catch((err:any) => {
                reject(err.data);
            });
    });
}

export function remove(leaderId: number) {
    return new Promise((resolve, reject) => {
        axios.delete(`/leader/${leaderId}`)
            .then((res) => {
                resolve(ResponseData(res));
            })
            .catch((err:any) => {
                reject(err.data);
            });
    });
}
