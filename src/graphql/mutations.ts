/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createAddress = /* GraphQL */ `
  mutation CreateAddress(
    $input: CreateAddressInput!
    $condition: ModelAddressConditionInput
  ) {
    createAddress(input: $input, condition: $condition) {
      firstname
      lastname
      street
      city
      postcode
      phone
      id
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateAddress = /* GraphQL */ `
  mutation UpdateAddress(
    $input: UpdateAddressInput!
    $condition: ModelAddressConditionInput
  ) {
    updateAddress(input: $input, condition: $condition) {
      firstname
      lastname
      street
      city
      postcode
      phone
      id
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteAddress = /* GraphQL */ `
  mutation DeleteAddress(
    $input: DeleteAddressInput!
    $condition: ModelAddressConditionInput
  ) {
    deleteAddress(input: $input, condition: $condition) {
      firstname
      lastname
      street
      city
      postcode
      phone
      id
      createdAt
      updatedAt
      owner
    }
  }
`;
export const createInformation = /* GraphQL */ `
  mutation CreateInformation(
    $input: CreateInformationInput!
    $condition: ModelInformationConditionInput
  ) {
    createInformation(input: $input, condition: $condition) {
      shippingAddress {
        firstname
        lastname
        street
        city
        postcode
        phone
        id
        createdAt
        updatedAt
        owner
      }
      billingAddress {
        firstname
        lastname
        street
        city
        postcode
        phone
        id
        createdAt
        updatedAt
        owner
      }
      favItems
      myOrder
      id
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateInformation = /* GraphQL */ `
  mutation UpdateInformation(
    $input: UpdateInformationInput!
    $condition: ModelInformationConditionInput
  ) {
    updateInformation(input: $input, condition: $condition) {
      shippingAddress {
        firstname
        lastname
        street
        city
        postcode
        phone
        id
        createdAt
        updatedAt
        owner
      }
      billingAddress {
        firstname
        lastname
        street
        city
        postcode
        phone
        id
        createdAt
        updatedAt
        owner
      }
      favItems
      myOrder
      id
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteInformation = /* GraphQL */ `
  mutation DeleteInformation(
    $input: DeleteInformationInput!
    $condition: ModelInformationConditionInput
  ) {
    deleteInformation(input: $input, condition: $condition) {
      shippingAddress {
        firstname
        lastname
        street
        city
        postcode
        phone
        id
        createdAt
        updatedAt
        owner
      }
      billingAddress {
        firstname
        lastname
        street
        city
        postcode
        phone
        id
        createdAt
        updatedAt
        owner
      }
      favItems
      myOrder
      id
      createdAt
      updatedAt
      owner
    }
  }
`;
