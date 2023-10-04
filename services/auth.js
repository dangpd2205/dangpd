export default ({ $axios }) => ({
  async login (params) {
    return await $axios.$post('auth/login', params);
  },
  async loginAdmin (params) {
    return await $axios.$post('auth/login-admin', params);
  },
  async getProfile () {
    const { data } = await $axios.$get('user');
    return data;
  },
  async logout () {
    return await $axios.$post('auth/logout');
  },
  // Request register
  async requestRegister (params) {
    return await $axios.$post('auth/request-register', params);
  },
  // Register
  async register (params) {
    return await $axios.$post('auth/register', params);
  }
});
