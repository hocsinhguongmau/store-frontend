/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getAddress = /* GraphQL */ `
  query GetAddress($id: ID!) {
    getAddress(id: $id) {
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
export const listAddresses = /* GraphQL */ `
  query ListAddresses(
    $filter: ModelAddressFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAddresses(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getInformation = /* GraphQL */ `
  query GetInformation($id: ID!) {
    getInformation(id: $id) {
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
export const listInformation = /* GraphQL */ `
  query ListInformation(
    $filter: ModelInformationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listInformation(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
