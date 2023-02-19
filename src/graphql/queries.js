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
      classes {
        items {
          id
          studentId
          classId
          createdAt
          updatedAt
        }
        nextToken
      }
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
        classes {
          nextToken
        }
        createdAt
        updatedAt
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
        }
        nextToken
      }
      user
      createdAt
      updatedAt
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
        user
        createdAt
        updatedAt
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
        user
        classes {
          nextToken
        }
        createdAt
        updatedAt
      }
      class {
        id
        className
        students {
          nextToken
        }
        user
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
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
          user
          createdAt
          updatedAt
        }
        class {
          id
          className
          user
          createdAt
          updatedAt
        }
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
        classes {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const classesByUser = /* GraphQL */ `
  query ClassesByUser(
    $user: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelClassFilterInput
    $limit: Int
    $nextToken: String
  ) {
    classesByUser(
      user: $user
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        className
        students {
          nextToken
        }
        user
        createdAt
        updatedAt
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
          user
          createdAt
          updatedAt
        }
        class {
          id
          className
          user
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
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
          user
          createdAt
          updatedAt
        }
        class {
          id
          className
          user
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
