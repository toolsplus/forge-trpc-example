import { initTRPC, inferAsyncReturnType } from '@trpc/server';
import {
  forgeRequestHandler,
  ResolverFunction,
  CreateForgeContextOptions,
} from '@toolsplus/forge-trpc-adapter';
import { z } from 'zod';

// Initialize a context for the server
const createContext = ({ request }: CreateForgeContextOptions) => {
  // For production applications you may want to validate
  // that `request.context` is in the expected format. This
  // should also help with better Typescript type inference.
  return request.context;
};

// Get the context type
type Context = inferAsyncReturnType<typeof createContext>;

const tRPC = initTRPC.context<Context>().create();

// Create hello router
const helloRouter = tRPC.router({
  // Hello procedure
  greeting: tRPC.procedure
    // Input validation with Zod
    // Schema validation with static type inference
    .input(
      z.object({
        name: z.string(),
      })
    )
    .query(({ input }) => `Hello, ${input.name}!`),
});

// Export the hello router type to be imported on the client side
export type HelloRouter = typeof helloRouter;

// Create a Forge function request handler that resolves
// tRPC requests
export const helloResolver: ResolverFunction = forgeRequestHandler({
  router: helloRouter,
  createContext,
});
