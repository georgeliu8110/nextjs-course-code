import Link from 'next/link';
import {useRouter} from 'next/router'

function ClientsPage () {
  let clients = [
    {id: 'max', name: 'maxmaxmax'},
    {id: 'george', name: 'georgeeeeeeee'}
  ];

  const router = useRouter();

  console.log(router.query)

  return (
    <div>
      <h1>The Client Page</h1>
      <ul>
        {clients.map(client=><li key={client.id}>
         <Link href={`/clients/${client.id}`}>{client.name}</Link>
        </li>)}
      </ul>
    </div>
  )
};

export default ClientsPage;