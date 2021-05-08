import {gql, useQuery} from 'urql'

const VIEWER_QUERY = gql`
  query Viewer {
    viewer {
      id
    }
  }
`

function AccountInfo() {
  const [{data}, refetch] = useQuery({query: VIEWER_QUERY})
  return (
    <div style={{padding: 16, margin: 16, border: '1px solid black'}}>
      <h2>Account Info</h2>
      <dl>
        <dt>Viewer Id</dt>
        <dd>{data?.viewer?.id ?? '(none)'}</dd>
      </dl>
      <button onClick={() => refetch({requestPolicy: 'network-only'})}>
        Refresh
      </button>
    </div>
  )
}

export default AccountInfo
