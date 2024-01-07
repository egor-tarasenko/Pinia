import {defineStore} from "pinia"

export const useAccountStore = defineStore('account', {
    state: () => ({
        account: {
            firstName: '',
            lastName: '',
            nickname: null,
            about: null,
        },
    }),
    getters: {
        upperCaseNickname: (state) => {
            const nickname = state.account.nickname
            return nickname ? nickname.toUpperCase() : ''
        }
    }
})