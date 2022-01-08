/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateAddress = /* GraphQL */ `
  subscription OnCreateAddress($owner: String) {
    onCreateAddress(owner: $owner) {
      firstname
      lastname
      street
      city
      region
      postcode
      telephone
      id
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdateAddress = /* GraphQL */ `
  subscription OnUpdateAddress($owner: String) {
    onUpdateAddress(owner: $owner) {
      firstname
      lastname
      street
      city
      region
      postcode
      telephone
      id
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteAddress = /* GraphQL */ `
  subscription OnDeleteAddress($owner: String) {
    onDeleteAddress(owner: $owner) {
      firstname
      lastname
      street
      city
      region
      postcode
      telephone
      id
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onCreateInformation = /* GraphQL */ `
  subscription OnCreateInformation($owner: String) {
    onCreateInformation(owner: $owner) {
      phone
      shippingAddress {
        firstname
        lastname
        street
        city
        region
        postcode
        telephone
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
        region
        postcode
        telephone
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
export const onUpdateInformation = /* GraphQL */ `
  subscription OnUpdateInformation($owner: String) {
    onUpdateInformation(owner: $owner) {
      phone
      shippingAddress {
        firstname
        lastname
        street
        city
        region
        postcode
        telephone
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
        region
        postcode
        telephone
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
export const onDeleteInformation = /* GraphQL */ `
  subscription OnDeleteInformation($owner: String) {
    onDeleteInformation(owner: $owner) {
      phone
      shippingAddress {
        firstname
        lastname
        street
        city
        region
        postcode
        telephone
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
        region
        postcode
        telephone
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
