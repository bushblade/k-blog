import dotenv from 'dotenv'
import { GraphQLClient } from 'graphql-request'

dotenv.config()

export const graphcms = new GraphQLClient(
  `https://api-eu-west-2.graphcms.com/v2/${process.env.GRAPHCMS_PROJECT_ID}/master`
)
