// codegen.ts
import type { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  overwrite: true,
  schema: process.env.GRAPHCMS_PUBLIC_URL,
  generates: {
    'app/graphql/graphcmsTypes.ts': {
      plugins: ['typescript', 'typescript-operations', 'typescript-resolvers'],
    },
    'app/graphql/graphql.schema.json': {
      plugins: ['introspection'],
    },
  },
}

export default config
