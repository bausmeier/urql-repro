import {Provider, createClient} from 'urql'
import {useMemo} from 'react'

function UrqlProvider({children}) {
  const client = useMemo(
    () =>
      createClient({
        url: '/graphql',
        fetchOptions() {
          const accessToken = sessionStorage.getItem('accessToken')
          if (accessToken == null) {
            return {}
          }
          return {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        },
      }),
    []
  )
  return <Provider value={client}>{children}</Provider>
}

export default UrqlProvider
