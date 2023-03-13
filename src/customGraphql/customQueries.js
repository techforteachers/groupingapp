export const getMyClass = /* GraphQL */ `
  query GetClass($id: ID!) {
    getClass(id: $id) {
      id
      className
      students {
        items {
            id
            classId
            createdAt
            updatedAt
            owner
            student {
                id
                last_name
                first_name
                grade
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