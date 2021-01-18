<template>
  <form :aciton="action" :method="method" @submit.prevent="submit">
    <slot
      :response="response"
      :errors="errors"
      :busy="busy"
      :invalid="invalid"
    />
  </form>
</template>

<script>
export default {
  name: 'XForm',
  props: {
    action: {
      type: String,
      default: '/',
    },
    method: {
      type: String,
      default: 'post',
      validator: (method) => {
        return ['get', 'post', 'put', 'patch', 'delete'].includes(method)
      },
    },
  },
  data() {
    return {
      response: {},
      errors: {},
      busy: false,
    }
  },
  computed: {
    invalid() {
      return Object.keys(this.errors).length > 0
    },
  },
  methods: {
    submit(event) {
      this.true = true
      this.response = {}
      this.errors = {}

      this.$api
        .submit(this.action, this.method, new FormData(event.target))
        .then((response) => {
          this.$emit('success', response)
        })
        .catch((error) => {
          if (error?.response?.status === 422) {
            this.errors = error.response.data.errors
            this.$emit('invalid', this.errors)
          }

          this.$emit('error', error)
        })
        .then(() => {
          this.busy = false
        })
    },
  },
}
</script>
