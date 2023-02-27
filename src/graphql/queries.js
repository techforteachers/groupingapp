/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getStudent = /* GraphQL */ `
  query GetStudent($id: ID!) {
    getStudent(id: $id) {
      id
      first_name
      last_name
      grade
      classes {
        items {
          id
          studentId
          classId
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
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
        classes {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getClass = /* GraphQL */ `
  query GetClass($id: ID!) {
    getClass(id: $id) {
      id
      className
      students {
        items {
          id
          studentId
          classId
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listClasses = /* GraphQL */ `
  query ListClasses(
    $filter: ModelClassFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listClasses(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        className
        students {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getClassStudent = /* GraphQL */ `
  query GetClassStudent($id: ID!) {
    getClassStudent(id: $id) {
      id
      studentId
      classId
      student {
        id
        first_name
        last_name
        grade
        classes {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      class {
        id
        className
        students {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listClassStudents = /* GraphQL */ `
  query ListClassStudents(
    $filter: ModelClassStudentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listClassStudents(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        studentId
        classId
        student {
          id
          first_name
          last_name
          grade
          createdAt
          updatedAt
          owner
        }
        class {
          id
          className
          createdAt
          updatedAt
          owner
        }
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const classStudentsByStudentId = /* GraphQL */ `
  query ClassStudentsByStudentId(
    $studentId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelClassStudentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    classStudentsByStudentId(
      studentId: $studentId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        studentId
        classId
        student {
          id
          first_name
          last_name
          grade
          createdAt
          updatedAt
          owner
        }
        class {
          id
          className
          createdAt
          updatedAt
          owner
        }
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const classStudentsByClassId = /* GraphQL */ `
  query ClassStudentsByClassId(
    $classId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelClassStudentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    classStudentsByClassId(
      classId: $classId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        studentId
        classId
        student {
          id
          first_name
          last_name
          grade
          createdAt
          updatedAt
          owner
        }
        class {
          id
          className
          createdAt
          updatedAt
          owner
        }
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
