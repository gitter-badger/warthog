# Warthog - Auto-generated GraphQL APIs

[![npm version](https://img.shields.io/npm/v/warthog.svg)](https://www.npmjs.org/package/warthog)
[![CircleCI](https://circleci.com/gh/goldcaddy77/warthog/tree/master.svg?style=shield)](https://circleci.com/gh/goldcaddy77/warthog/tree/master)
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](#badge)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

Opinionated framework for building GraphQL APIs with strong conventions.  With 
Warthog, set up your data models and the following are automatically generated:

- Database schema - generated by [TypeORM](https://github.com/typeorm/typeorm)
- Your entire GraphQL Schema including:
  - types to match your entities - generated by [TypeGraphQL](https://github.com/19majkel94/type-graphql)
  - GraphQL inputs for consistent creates, updates, filtering, and pagination
    inspired by [Prisma](https://github.com/prisma/prisma)'s conventions
- A [graphql-binding](https://github.com/graphql-binding/graphql-binding) for
  type-safe programmatic access to your APIs.
- TypeScript classes for the generated GraphQL schema for type-safety while developing.

## Warning

The API for this library is very much a moving target.  It will likely shift
until version 2, at which time it will become stable.

## Install

```bash
yarn add warthog
```

## Usage

Check out the [examples folder](https://github.com/goldcaddy77/warthog/tree/v1/examples)
to see how to use Warthog in a project or check out the 
[warthog example](https://github.com/goldcaddy77/warthog-example) repo.

Create an entity:

```typescript
import { BaseModel, Model, StringField } from 'warthog';

@Model()
export class User extends BaseModel {
  @StringField()
  name?: string;
}
```

Now, when you start your server, the following will be generated:

```graphql
type User implements BaseGraphQLObject {
  id: String!
  createdAt: DateTime!
  createdById: String!
  updatedAt: DateTime
  updatedById: String
  deletedAt: DateTime
  deletedById: String
  version: Int!
  name: String!
}

input UserCreateInput {
  name: String!
}

enum UserOrderByInput {
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  deletedAt_ASC
  deletedAt_DESC
  name_ASC
  name_DESC
}

input UserUpdateInput {
  name: String
}

input UserWhereInput {
  id_eq: String
  id_in: [String!]
  createdAt_eq: String
  createdAt_lt: String
  createdAt_lte: String
  createdAt_gt: String
  createdAt_gte: String
  createdById_eq: String
  updatedAt_eq: String
  updatedAt_lt: String
  updatedAt_lte: String
  updatedAt_gt: String
  updatedAt_gte: String
  updatedById_eq: String
  deletedAt_all: Boolean
  deletedAt_eq: String
  deletedAt_lt: String
  deletedAt_lte: String
  deletedAt_gt: String
  deletedAt_gte: String
  deletedById_eq: String
  name_eq: String
  name_contains: String
  name_startsWith: String
  name_endsWith: String
  name_in: [String!]
}

input UserWhereUniqueInput {
  id: String!
}
```

## Limitations

Since Warthog relies heavily on conventions, it only supports postgres currently
for DBs.

## Thanks

Special thanks to the authors of:

- [TypeORM](https://github.com/typeorm/typeorm)
- [TypeGraphQL](https://github.com/19majkel94/type-graphql)
- [Prisma](https://github.com/prisma/prisma)

Ultimately, Warthog is a really opinionated, yet flexible composition of these libraries

## Contribute

PRs accepted, fire away!  Or add issues if you have use cases Warthog doesn't cover.

## License

MIT © Dan Caddigan


