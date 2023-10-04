<template>
  <div>
    <div class="page-header mb-n text-center" style="padding: 200px 0;">
      <div class="container" style="text-align: center;">
        <p style="font-size: 80px; font-weight: 700; margin: 30px 0;">
          403
        </p>
        <h1>Forbidden</h1>
        <p>Access to this resource on the server is denied.</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Error403',
  props: {
    error: {
      type: Object,
      default: () => {}
    }
  },
  head: {
    title: 'Forbidden'
  }
};
</script>
