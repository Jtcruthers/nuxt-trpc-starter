# Nuxt 3 +  tRPC + Prisma starter

[Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction)  
[tRPC documentation](https://trpc.io/docs)  
[Prisma documentation](https://www.prisma.io/docs/guides)  
[trpc-nuxt documentation](https://github.com/wobsoriano/trpc-nuxt)  

## Setup

Make sure to install the dependencies:

```bash
pnpm install
```

Make sure to update your database URL. To update postgres to the expected schema, run

```bash
npx prisma migrate dev
npx prisma generate
```

## Development Server

Start the development server on `http://localhost:3000`

```bash
pnpm dev
```

## Production

Build the application for production:

```bash
pnpm build
```

Locally preview production build:

```bash
pnpm preview
```
