import api from "@/modules/api";

const types = {
    SET_USERS: "SET_USERS",
    CHOISE_USER: "CHOISE_USER"
};

const state = () => ({
    users: [],
    user: {},
    page: 1,
    totalPages: 1,
});

const getters = {
    users(state) {
        return state.users;
    },
    user(state) {
        return state.user;
    },
    totalPages(state) {
        return state.totalPages;
    }
};

const actions = {
    async fetchUsers({ commit }, filters) {
        const users = await api.getUsers(filters);
        commit(types.SET_USERS, users);
    },
    async usersById({ commit }, userId) {
        const user = await api.getUser(userId);
        commit(types.CHOISE_USER, user);
    }
};

const mutations = {
    [types.SET_USERS](state, users) {
        state.users = [...users.data];
        state.totalPages = users.total_pages;
        state.page = users.page;
    },
    [types.CHOISE_USER](state, user) {
        state.user = user;
    }
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
};
