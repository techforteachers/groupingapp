export const getMyClass = /* GraphQL */ `
  query GetClass($id: ID!) {
    getClass(id: $id) {
      id
      className
      students {
        items {
            student {
                id
                last_name
                first_name
            }
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;