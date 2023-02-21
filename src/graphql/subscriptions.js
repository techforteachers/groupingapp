/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateStudent = /* GraphQL */ `
  subscription OnCreateStudent(
    $filter: ModelSubscriptionStudentFilterInput
    $owner: String
  ) {
    onCreateStudent(filter: $filter, owner: $owner) {
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
export const onUpdateStudent = /* GraphQL */ `
  subscription OnUpdateStudent(
    $filter: ModelSubscriptionStudentFilterInput
    $owner: String
  ) {
    onUpdateStudent(filter: $filter, owner: $owner) {
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
export const onDeleteStudent = /* GraphQL */ `
  subscription OnDeleteStudent(
    $filter: ModelSubscriptionStudentFilterInput
    $owner: String
  ) {
    onDeleteStudent(filter: $filter, owner: $owner) {
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
export const onCreateClass = /* GraphQL */ `
  subscription OnCreateClass(
    $filter: ModelSubscriptionClassFilterInput
    $owner: String
  ) {
    onCreateClass(filter: $filter, owner: $owner) {
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
export const onUpdateClass = /* GraphQL */ `
  subscription OnUpdateClass(
    $filter: ModelSubscriptionClassFilterInput
    $owner: String
  ) {
    onUpdateClass(filter: $filter, owner: $owner) {
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
export const onDeleteClass = /* GraphQL */ `
  subscription OnDeleteClass(
    $filter: ModelSubscriptionClassFilterInput
    $owner: String
  ) {
    onDeleteClass(filter: $filter, owner: $owner) {
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
export const onCreateClassStudent = /* GraphQL */ `
  subscription OnCreateClassStudent(
    $filter: ModelSubscriptionClassStudentFilterInput
    $owner: String
  ) {
    onCreateClassStudent(filter: $filter, owner: $owner) {
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
export const onUpdateClassStudent = /* GraphQL */ `
  subscription OnUpdateClassStudent(
    $filter: ModelSubscriptionClassStudentFilterInput
    $owner: String
  ) {
    onUpdateClassStudent(filter: $filter, owner: $owner) {
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
export const onDeleteClassStudent = /* GraphQL */ `
  subscription OnDeleteClassStudent(
    $filter: ModelSubscriptionClassStudentFilterInput
    $owner: String
  ) {
    onDeleteClassStudent(filter: $filter, owner: $owner) {
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
