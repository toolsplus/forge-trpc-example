import Resolver from '@forge/resolver';
import { helloResolver } from '@hello-trpc/hello-server';

const resolver = new Resolver().define('rpc', helloResolver);

export const handler = resolver.getDefinitions();
