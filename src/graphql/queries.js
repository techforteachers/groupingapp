/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getStudent = /* GraphQL */ `
  query GetStudent($id: ID!) {
    getStudent(id: $id) {
      id
      first_name
      last_name
      grade
      user
      createdAt
      updatedAt
    }
  }
`;
export const listStudents = /* GraphQL */ `
  query ListStudents(
    $filter: ModelStudentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listStudents(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        first_name
        last_name
        grade
        user
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const studentsByUser = /* GraphQL */ `
  query StudentsByUser(
    $user: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelStudentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    studentsByUser(
      user: $user
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        first_name
        last_name
        grade
        user
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
