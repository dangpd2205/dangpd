<template>
  <div>
    <div class="page-header mb-n text-center" style="padding: 200px 0;">
      <div class="container" style="text-align: center;">
        <p style="font-size: 80px; font-weight: 700; margin: 30px 0;">
          500
        </p>
        <h1>Server Error</h1>
        <p>Seems like something went wrong.</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Error404',
  props: {
    error: {
      type: Object,
      default: () => {}
    }
  },
  head: {
    title: 'Server Error'
  }
};
</script>
