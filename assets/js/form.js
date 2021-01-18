const virtualMethods = ['put', 'patch', 'delete']

function methodIsVirtual(method) {
  return virtualMethods.includes(method)
}

class Form {
  constructor(axios) {
    this.axios = axios
    this.errors = {}
    this.onSuccess = []
    this.onReset = []
    this.busy = false
  }

  submit(url, method, data) {
    this.busy = true
    this.errors = {}

    for (const [key, value] of data.entries()) {
      // console.log(key, value)

      if (value === 'on') {
        data.set(key, 1)
      }

      if (value === 'off') {
        data.set(key, 0)
      }
    }

    if (methodIsVirtual(method)) {
      data.append('_method', method)
      method = 'post'
    }

    return new Promise((resolve, reject) => {
      this.axios
        .request({
          url,
          method,
          data,
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        })
        .then((response) => {
          resolve(response)
          this.onSuccess.forEach((callback) => callback(response))
        })
        .catch((error) => {
          if (error.response) {
            if (error.response.status === 422) {
              this.errors = error.response.data.errors
            } else {
              reject(error)
            }
          }
        })
        .then(() => {
          this.busy = false
        })
    })
  }

  reset() {
    this.data = {}
    this.onReset.forEach((callback) => callback())
  }
}

export default Form
