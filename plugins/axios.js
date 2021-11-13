let defaultHeaders = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
}

export default function ({ app, $axios, $swal }) {
  $axios.onRequest((req) => {
    const { headers } = req
    const token = app.$cookies.get('token')
    if (token) {
      defaultHeaders = {
        ...defaultHeaders,
        Authorization: `Bearer ${token}`,
      }
      headers.common = { ...headers.common, ...defaultHeaders }
    }
  })

  $axios.onError((error) => {
    if (error.response) {
      app.$toasted.error(error.message, {
        position: 'top-right',
      })
    } else {
      $swal.fire({
        titleText: 'Network Error!',
        text: `Hi, you seem to be offline,check network and refresh`,
        icon: 'info',
        confirmButtonText: 'Close',
      })
    }
  })
}
