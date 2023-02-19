/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateStudent = /* GraphQL */ `
  subscription OnCreateStudent($filter: ModelSubscriptionStudentFilterInput) {
    onCreateStudent(filter: $filter) {
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
export const onUpdateStudent = /* GraphQL */ `
  subscription OnUpdateStudent($filter: ModelSubscriptionStudentFilterInput) {
    onUpdateStudent(filter: $filter) {
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
export const onDeleteStudent = /* GraphQL */ `
  subscription OnDeleteStudent($filter: ModelSubscriptionStudentFilterInput) {
    onDeleteStudent(filter: $filter) {
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
export const onCreateClass = /* GraphQL */ `
  subscription OnCreateClass($filter: ModelSubscriptionClassFilterInput) {
    onCreateClass(filter: $filter) {
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
export const onUpdateClass = /* GraphQL */ `
  subscription OnUpdateClass($filter: ModelSubscriptionClassFilterInput) {
    onUpdateClass(filter: $filter) {
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
export const onDeleteClass = /* GraphQL */ `
  subscription OnDeleteClass($filter: ModelSubscriptionClassFilterInput) {
    onDeleteClass(filter: $filter) {
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
export const onCreateClassStudent = /* GraphQL */ `
  subscription OnCreateClassStudent(
    $filter: ModelSubscriptionClassStudentFilterInput
  ) {
    onCreateClassStudent(filter: $filter) {
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
export const onUpdateClassStudent = /* GraphQL */ `
  subscription OnUpdateClassStudent(
    $filter: ModelSubscriptionClassStudentFilterInput
  ) {
    onUpdateClassStudent(filter: $filter) {
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
export const onDeleteClassStudent = /* GraphQL */ `
  subscription OnDeleteClassStudent(
    $filter: ModelSubscriptionClassStudentFilterInput
  ) {
    onDeleteClassStudent(filter: $filter) {
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
