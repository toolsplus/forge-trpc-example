import { tRPCFactory } from '../trpc/trpc-factory';

function Greeting() {
  const greetingQuery = tRPCFactory.greeting.useQuery({ name: 'John' });
  return <div>{greetingQuery.data}</div>;
}

export default Greeting;