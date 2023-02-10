import { createTRPCReact } from '@trpc/react-query';
import type { HelloRouter } from '@hello-trpc/hello-server';

export const tRPCFactory = createTRPCReact<HelloRouter>();
