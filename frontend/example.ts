function gql(source: string) {
  return source;
}

const GET_CONFIGURATION =  gql(/* GraphQL */ `
  query exampleQuery {
    Tweets {
      id
    }
  }
`);