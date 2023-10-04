import { USER_TYPE } from '~/constants/common';

export const state = () => ({
  userInfo: {},
  accessToken: null,
  email: ''
});

export const getters = {
  isAdmin (state) {
    return state.userInfo && state.userInfo.type === USER_TYPE.ADMIN;
  },
  isUser (state) {
    return state.userInfo && state.userInfo.type === USER_TYPE.USER;
  },
  isLoggedIn (state) {
    return state.userInfo && state.userInfo.id;
  }
};

export const mutations = {
  setAccessToken (state, token) {
    state.accessToken = token;
  },
  setUserInfo (state, user) {
    state.userInfo = user;
  },
  setEmail (state, email) {
    state.email = email;
  }
};

export const actions = {
  async nuxtServerInit ({ commit }) {
    try {
      const accessToken = this.$cookiz.get('access_token');
      if (accessToken) {
        commit('setAccessToken', accessToken);
        const userInfo = await this.$api.auth.getProfile();
        if (userInfo) {
          commit('setUserInfo', userInfo);
        }
      }
    } catch (e) {}
  },
  async logout ({ commit }) {
    const { data } = await this.$api.auth.logout();
    if (data.status === 200) {
      await fetch('/server-middleware/auth', {
        method: 'DELETE'
      });
      commit('setUserInfo', {});
      await this.$router.push({ name: 'auth.login' });
    }
  }
};
