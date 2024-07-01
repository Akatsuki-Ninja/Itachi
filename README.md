# Itachi

The MVP application is forced to create a video chat application 
that will join users around the world.
We are using hyped technologies to test how fast
we could develop application and use third-party services to import additional abilities
in a way to exclude backend development.

## Main Stack
- As the replacement of the backend provider and data storage we use [Surreal.DB](https://surrealdb.com/features).
- [React](https://react.dev/learn/describing-the-ui) as Web Framework.
- Data querying and caching [React Query](https://tanstack.com/query/latest/docs/framework/react/overview).
- UI Frameworks is [Chakra UI](https://v2.chakra-ui.com/docs/components).
- [Get Stream](https://getstream.io/) as streaming provider for the messaging and video conversations.

## Development

Start database.
```shell
docker run --rm --pull always -p 8000:8000 -d -v /tmp:/db surrealdb/surrealdb:latest start --log trace file:/db/itachi.db
```

Copy env file.
```shell
cp env.example env.local
```

Install dependencies.
```shell
npm i
```

Migrate database.
```shell
npm run migrate
```

Run application.
```shell
npm run dev
```