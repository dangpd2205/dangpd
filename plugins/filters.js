import Vue from 'vue';

export default ({
  $moment
}) => {
  Vue.filter('formatDate', (value, format = 'Y.M.d') => {
    return $moment(value).format(format);
  });
};
