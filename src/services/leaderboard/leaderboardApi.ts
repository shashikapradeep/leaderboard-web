import {LeadersDataType} from "../../components/organism/forms/Leader/AddLeaderForm";
import Axios from "../../provider/axios/axios";
import {ResponseData} from "../../util/helper/response";

const axios = Axios.getInstance();
export default class Leaderboard {
    getOne(leaderId: number) {
        return new Promise((resolve, reject) => {
            axios.get(`/leader/${leaderId}`)
                .then((res) => {
                    resolve(ResponseData(res));
                })
                .catch((err) => {
                    reject({
                        loading: false,
                        fetch: false,
                        fetchError: 'Data Fetch failed',
                    });
                });
        });
    }

    getAll(sortBy: string = 'id', orderBy: string = 'asc') {
        return new Promise((resolve, reject) => {
            axios.get(`/leaders`)
                .then((res) => {
                    resolve(ResponseData(res));
                })
                .catch((err) => {
                    reject({
                        loading: false,
                        fetch: false,
                        fetchError: 'Data Fetch failed',
                    });
                });
        });
    }

    store(leaderData: LeadersDataType) {
        return new Promise((resolve, reject) => {
            axios.post('/leader/store', leaderData)
                .then((res) => {
                    resolve(ResponseData(res));
                })
                .catch((err) => {
                    reject({
                        loading: false,
                        fetch: false,
                        fetchError: 'Data Fetch failed',
                    });
                });
        });
    }

    update(leaderData: LeadersDataType, id: number) {
        return new Promise((resolve, reject) => {
            axios.post(`/leader/${id}`, leaderData)
                .then((res) => {
                    resolve(ResponseData(res));
                })
                .catch((err) => {
                    reject({
                        loading: false,
                        fetch: false,
                        fetchError: 'Data Fetch failed',
                    });
                });
        });
    }

    delete(leaderId: number) {
        return new Promise((resolve, reject) => {
            axios.delete(`/leader/${leaderId}`)
                .then((res) => {
                    resolve(ResponseData(res));
                })
                .catch((err) => {
                    reject({
                        loading: false,
                        fetch: false,
                        fetchError: 'Data Fetch failed',
                    });
                });
        });
    }
}
