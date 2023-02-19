/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createStudent = /* GraphQL */ `
  mutation CreateStudent(
    $input: CreateStudentInput!
    $condition: ModelStudentConditionInput
  ) {
    createStudent(input: $input, condition: $condition) {
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
export const updateStudent = /* GraphQL */ `
  mutation UpdateStudent(
    $input: UpdateStudentInput!
    $condition: ModelStudentConditionInput
  ) {
    updateStudent(input: $input, condition: $condition) {
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
export const deleteStudent = /* GraphQL */ `
  mutation DeleteStudent(
    $input: DeleteStudentInput!
    $condition: ModelStudentConditionInput
  ) {
    deleteStudent(input: $input, condition: $condition) {
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
export const createClass = /* GraphQL */ `
  mutation CreateClass(
    $input: CreateClassInput!
    $condition: ModelClassConditionInput
  ) {
    createClass(input: $input, condition: $condition) {
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
      user
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateClass = /* GraphQL */ `
  mutation UpdateClass(
    $input: UpdateClassInput!
    $condition: ModelClassConditionInput
  ) {
    updateClass(input: $input, condition: $condition) {
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
      user
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteClass = /* GraphQL */ `
  mutation DeleteClass(
    $input: DeleteClassInput!
    $condition: ModelClassConditionInput
  ) {
    deleteClass(input: $input, condition: $condition) {
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
      user
      createdAt
      updatedAt
      owner
    }
  }
`;
export const createClassStudent = /* GraphQL */ `
  mutation CreateClassStudent(
    $input: CreateClassStudentInput!
    $condition: ModelClassStudentConditionInput
  ) {
    createClassStudent(input: $input, condition: $condition) {
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
        owner
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
        owner
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateClassStudent = /* GraphQL */ `
  mutation UpdateClassStudent(
    $input: UpdateClassStudentInput!
    $condition: ModelClassStudentConditionInput
  ) {
    updateClassStudent(input: $input, condition: $condition) {
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
        owner
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
        owner
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteClassStudent = /* GraphQL */ `
  mutation DeleteClassStudent(
    $input: DeleteClassStudentInput!
    $condition: ModelClassStudentConditionInput
  ) {
    deleteClassStudent(input: $input, condition: $condition) {
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
        owner
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
        owner
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
