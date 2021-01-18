export default ({ $axios }, inject) => {
  const api = {
    submit(url, method, data) {
      return new Promise((resolve, reject) => {
        try {
          const response = $axios.request({
            url,
            method,
            data,
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          })
          resolve(response)
        } catch (error) {
          reject(error)
        }
      })
    },
  }

  inject('api', api)
}
