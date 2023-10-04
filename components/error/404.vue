<template>
  <div>
    <div class="page-header mb-n text-center" style="padding: 200px 0;">
      <div class="container" style="text-align: center;">
        <p style="font-size: 80px; font-weight: 700; margin: 30px 0;">
          404
        </p>
        <h1>This page doesn’t exist</h1>
        <p>The link you clicked on may be broken or no longer exist.</p>
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
    title: '404 - This page doesn’t exist'
  }
};
</script>
