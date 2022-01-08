/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateAddressInput = {
  firstname?: string | null,
  lastname?: string | null,
  street?: string | null,
  city?: string | null,
  region?: string | null,
  postcode?: string | null,
  telephone?: string | null,
  id?: string | null,
};

export type ModelAddressConditionInput = {
  firstname?: ModelStringInput | null,
  lastname?: ModelStringInput | null,
  street?: ModelStringInput | null,
  city?: ModelStringInput | null,
  region?: ModelStringInput | null,
  postcode?: ModelStringInput | null,
  telephone?: ModelStringInput | null,
  and?: Array< ModelAddressConditionInput | null > | null,
  or?: Array< ModelAddressConditionInput | null > | null,
  not?: ModelAddressConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type Address = {
  __typename: "Address",
  firstname?: string | null,
  lastname?: string | null,
  street?: string | null,
  city?: string | null,
  region?: string | null,
  postcode?: string | null,
  telephone?: string | null,
  id: string,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type UpdateAddressInput = {
  firstname?: string | null,
  lastname?: string | null,
  street?: string | null,
  city?: string | null,
  region?: string | null,
  postcode?: string | null,
  telephone?: string | null,
};

export type DeleteAddressInput = {
  id: string,
};

export type CreateInformationInput = {
  phone?: string | null,
  favItems?: Array< string | null > | null,
  myOrder?: Array< string | null > | null,
  id?: string | null,
};

export type ModelInformationConditionInput = {
  phone?: ModelStringInput | null,
  favItems?: ModelStringInput | null,
  myOrder?: ModelStringInput | null,
  and?: Array< ModelInformationConditionInput | null > | null,
  or?: Array< ModelInformationConditionInput | null > | null,
  not?: ModelInformationConditionInput | null,
};

export type Information = {
  __typename: "Information",
  phone?: string | null,
  shippingAddress?: Address | null,
  billingAddress?: Address | null,
  favItems?: Array< string | null > | null,
  myOrder?: Array< string | null > | null,
  id: string,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type UpdateInformationInput = {
  phone?: string | null,
  favItems?: Array< string | null > | null,
  myOrder?: Array< string | null > | null,
};

export type DeleteInformationInput = {
  id: string,
};

export type ModelAddressFilterInput = {
  firstname?: ModelStringInput | null,
  lastname?: ModelStringInput | null,
  street?: ModelStringInput | null,
  city?: ModelStringInput | null,
  region?: ModelStringInput | null,
  postcode?: ModelStringInput | null,
  telephone?: ModelStringInput | null,
  and?: Array< ModelAddressFilterInput | null > | null,
  or?: Array< ModelAddressFilterInput | null > | null,
  not?: ModelAddressFilterInput | null,
};

export type ModelAddressConnection = {
  __typename: "ModelAddressConnection",
  items:  Array<Address | null >,
  nextToken?: string | null,
};

export type ModelInformationFilterInput = {
  phone?: ModelStringInput | null,
  favItems?: ModelStringInput | null,
  myOrder?: ModelStringInput | null,
  and?: Array< ModelInformationFilterInput | null > | null,
  or?: Array< ModelInformationFilterInput | null > | null,
  not?: ModelInformationFilterInput | null,
};

export type ModelInformationConnection = {
  __typename: "ModelInformationConnection",
  items:  Array<Information | null >,
  nextToken?: string | null,
};

export type CreateAddressMutationVariables = {
  input: CreateAddressInput,
  condition?: ModelAddressConditionInput | null,
};

export type CreateAddressMutation = {
  createAddress?:  {
    __typename: "Address",
    firstname?: string | null,
    lastname?: string | null,
    street?: string | null,
    city?: string | null,
    region?: string | null,
    postcode?: string | null,
    telephone?: string | null,
    id: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateAddressMutationVariables = {
  input: UpdateAddressInput,
  condition?: ModelAddressConditionInput | null,
};

export type UpdateAddressMutation = {
  updateAddress?:  {
    __typename: "Address",
    firstname?: string | null,
    lastname?: string | null,
    street?: string | null,
    city?: string | null,
    region?: string | null,
    postcode?: string | null,
    telephone?: string | null,
    id: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteAddressMutationVariables = {
  input: DeleteAddressInput,
  condition?: ModelAddressConditionInput | null,
};

export type DeleteAddressMutation = {
  deleteAddress?:  {
    __typename: "Address",
    firstname?: string | null,
    lastname?: string | null,
    street?: string | null,
    city?: string | null,
    region?: string | null,
    postcode?: string | null,
    telephone?: string | null,
    id: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type CreateInformationMutationVariables = {
  input: CreateInformationInput,
  condition?: ModelInformationConditionInput | null,
};

export type CreateInformationMutation = {
  createInformation?:  {
    __typename: "Information",
    phone?: string | null,
    shippingAddress?:  {
      __typename: "Address",
      firstname?: string | null,
      lastname?: string | null,
      street?: string | null,
      city?: string | null,
      region?: string | null,
      postcode?: string | null,
      telephone?: string | null,
      id: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    billingAddress?:  {
      __typename: "Address",
      firstname?: string | null,
      lastname?: string | null,
      street?: string | null,
      city?: string | null,
      region?: string | null,
      postcode?: string | null,
      telephone?: string | null,
      id: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    favItems?: Array< string | null > | null,
    myOrder?: Array< string | null > | null,
    id: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateInformationMutationVariables = {
  input: UpdateInformationInput,
  condition?: ModelInformationConditionInput | null,
};

export type UpdateInformationMutation = {
  updateInformation?:  {
    __typename: "Information",
    phone?: string | null,
    shippingAddress?:  {
      __typename: "Address",
      firstname?: string | null,
      lastname?: string | null,
      street?: string | null,
      city?: string | null,
      region?: string | null,
      postcode?: string | null,
      telephone?: string | null,
      id: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    billingAddress?:  {
      __typename: "Address",
      firstname?: string | null,
      lastname?: string | null,
      street?: string | null,
      city?: string | null,
      region?: string | null,
      postcode?: string | null,
      telephone?: string | null,
      id: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    favItems?: Array< string | null > | null,
    myOrder?: Array< string | null > | null,
    id: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteInformationMutationVariables = {
  input: DeleteInformationInput,
  condition?: ModelInformationConditionInput | null,
};

export type DeleteInformationMutation = {
  deleteInformation?:  {
    __typename: "Information",
    phone?: string | null,
    shippingAddress?:  {
      __typename: "Address",
      firstname?: string | null,
      lastname?: string | null,
      street?: string | null,
      city?: string | null,
      region?: string | null,
      postcode?: string | null,
      telephone?: string | null,
      id: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    billingAddress?:  {
      __typename: "Address",
      firstname?: string | null,
      lastname?: string | null,
      street?: string | null,
      city?: string | null,
      region?: string | null,
      postcode?: string | null,
      telephone?: string | null,
      id: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    favItems?: Array< string | null > | null,
    myOrder?: Array< string | null > | null,
    id: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type GetAddressQueryVariables = {
  id: string,
};

export type GetAddressQuery = {
  getAddress?:  {
    __typename: "Address",
    firstname?: string | null,
    lastname?: string | null,
    street?: string | null,
    city?: string | null,
    region?: string | null,
    postcode?: string | null,
    telephone?: string | null,
    id: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListAddressesQueryVariables = {
  filter?: ModelAddressFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListAddressesQuery = {
  listAddresses?:  {
    __typename: "ModelAddressConnection",
    items:  Array< {
      __typename: "Address",
      firstname?: string | null,
      lastname?: string | null,
      street?: string | null,
      city?: string | null,
      region?: string | null,
      postcode?: string | null,
      telephone?: string | null,
      id: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetInformationQueryVariables = {
  id: string,
};

export type GetInformationQuery = {
  getInformation?:  {
    __typename: "Information",
    phone?: string | null,
    shippingAddress?:  {
      __typename: "Address",
      firstname?: string | null,
      lastname?: string | null,
      street?: string | null,
      city?: string | null,
      region?: string | null,
      postcode?: string | null,
      telephone?: string | null,
      id: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    billingAddress?:  {
      __typename: "Address",
      firstname?: string | null,
      lastname?: string | null,
      street?: string | null,
      city?: string | null,
      region?: string | null,
      postcode?: string | null,
      telephone?: string | null,
      id: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    favItems?: Array< string | null > | null,
    myOrder?: Array< string | null > | null,
    id: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListInformationQueryVariables = {
  filter?: ModelInformationFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListInformationQuery = {
  listInformation?:  {
    __typename: "ModelInformationConnection",
    items:  Array< {
      __typename: "Information",
      phone?: string | null,
      shippingAddress?:  {
        __typename: "Address",
        firstname?: string | null,
        lastname?: string | null,
        street?: string | null,
        city?: string | null,
        region?: string | null,
        postcode?: string | null,
        telephone?: string | null,
        id: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null,
      billingAddress?:  {
        __typename: "Address",
        firstname?: string | null,
        lastname?: string | null,
        street?: string | null,
        city?: string | null,
        region?: string | null,
        postcode?: string | null,
        telephone?: string | null,
        id: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null,
      favItems?: Array< string | null > | null,
      myOrder?: Array< string | null > | null,
      id: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateAddressSubscriptionVariables = {
  owner?: string | null,
};

export type OnCreateAddressSubscription = {
  onCreateAddress?:  {
    __typename: "Address",
    firstname?: string | null,
    lastname?: string | null,
    street?: string | null,
    city?: string | null,
    region?: string | null,
    postcode?: string | null,
    telephone?: string | null,
    id: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateAddressSubscriptionVariables = {
  owner?: string | null,
};

export type OnUpdateAddressSubscription = {
  onUpdateAddress?:  {
    __typename: "Address",
    firstname?: string | null,
    lastname?: string | null,
    street?: string | null,
    city?: string | null,
    region?: string | null,
    postcode?: string | null,
    telephone?: string | null,
    id: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteAddressSubscriptionVariables = {
  owner?: string | null,
};

export type OnDeleteAddressSubscription = {
  onDeleteAddress?:  {
    __typename: "Address",
    firstname?: string | null,
    lastname?: string | null,
    street?: string | null,
    city?: string | null,
    region?: string | null,
    postcode?: string | null,
    telephone?: string | null,
    id: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnCreateInformationSubscriptionVariables = {
  owner?: string | null,
};

export type OnCreateInformationSubscription = {
  onCreateInformation?:  {
    __typename: "Information",
    phone?: string | null,
    shippingAddress?:  {
      __typename: "Address",
      firstname?: string | null,
      lastname?: string | null,
      street?: string | null,
      city?: string | null,
      region?: string | null,
      postcode?: string | null,
      telephone?: string | null,
      id: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    billingAddress?:  {
      __typename: "Address",
      firstname?: string | null,
      lastname?: string | null,
      street?: string | null,
      city?: string | null,
      region?: string | null,
      postcode?: string | null,
      telephone?: string | null,
      id: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    favItems?: Array< string | null > | null,
    myOrder?: Array< string | null > | null,
    id: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateInformationSubscriptionVariables = {
  owner?: string | null,
};

export type OnUpdateInformationSubscription = {
  onUpdateInformation?:  {
    __typename: "Information",
    phone?: string | null,
    shippingAddress?:  {
      __typename: "Address",
      firstname?: string | null,
      lastname?: string | null,
      street?: string | null,
      city?: string | null,
      region?: string | null,
      postcode?: string | null,
      telephone?: string | null,
      id: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    billingAddress?:  {
      __typename: "Address",
      firstname?: string | null,
      lastname?: string | null,
      street?: string | null,
      city?: string | null,
      region?: string | null,
      postcode?: string | null,
      telephone?: string | null,
      id: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    favItems?: Array< string | null > | null,
    myOrder?: Array< string | null > | null,
    id: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteInformationSubscriptionVariables = {
  owner?: string | null,
};

export type OnDeleteInformationSubscription = {
  onDeleteInformation?:  {
    __typename: "Information",
    phone?: string | null,
    shippingAddress?:  {
      __typename: "Address",
      firstname?: string | null,
      lastname?: string | null,
      street?: string | null,
      city?: string | null,
      region?: string | null,
      postcode?: string | null,
      telephone?: string | null,
      id: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    billingAddress?:  {
      __typename: "Address",
      firstname?: string | null,
      lastname?: string | null,
      street?: string | null,
      city?: string | null,
      region?: string | null,
      postcode?: string | null,
      telephone?: string | null,
      id: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    favItems?: Array< string | null > | null,
    myOrder?: Array< string | null > | null,
    id: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};
