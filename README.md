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
docker run --rm --pull always -p 8000:8000 surrealdb/surrealdb:latest start
```

Migrate database.
```shell
node src/core/database/scripts/migrate.js
```

Run application.
```shell
npm i
npm run dev
```

---

![Logo](https://cdn.dribbble.com/userupload/8642639/file/original-f61257048a5829b70a23b6ff48adc87f.png?resize=2048x2896)
