import { getCookie } from 'h3'
import { defineProxyParty } from '#nuxt-proxy-party'

export default defineProxyParty([
  {
    name: 'bin',
    baseUrl: '/api/bin',
    target: 'http://httpbin.org',
    handler: (event) => {
      const token = getCookie(event, 'oauth/token')

      if (token) {
        event.node.req.headers.authorization = `Bearer ${token}`
      }
    },
  },
])
