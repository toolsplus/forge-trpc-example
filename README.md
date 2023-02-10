# Hello tRPC example

Example Forge app that illustrates the usage of the Forge tRPC integration.

The project is configured with [Nx](https://nx.dev/) and the [Nx Forge plugin](https://github.com/toolsplus/nx-forge).

## Setup

Install project dependencies by running `npm install`. After that, build the app using `npx nx build forge-app` before you proceed with the initial registration of the Forge app.

### Register the Forge app

Follow the [steps on initial build and registration](https://github.com/toolsplus/nx-forge/blob/main/packages/forge/README.md#initial-build-and-registration) as described in the Nx Forge plugin docs.

> Do not forget to copy the generated app id from `dist/apps/forge-app/manifest.yml` to `apps/forge-app/manifest.yml` once you have completed the registration step.

## Build

To build the app run the following command:

```shell
nx build forge-app
```

This will also build dependent Custom UI projects if they contain changes. The build result will be generated in the `dist/` folder.

## Deploy

To deploy the app after a build run:

    nx deploy forge-app

This will run the Forge CLI deploy command on the build output of the `forge-app` project.

