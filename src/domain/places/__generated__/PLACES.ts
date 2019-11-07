/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { LanguageFilter } from './../../../__generated__/globalTypes';

// ====================================================
// GraphQL query operation: PLACES
// ====================================================

export interface PLACES_places_name {
  __typename: 'Name';
  fi: string | null;
  en: string | null;
}

export interface PLACES_places_description {
  __typename: 'Description';
  body: string;
}

export interface PLACES_places_location {
  __typename: 'Location';
  lat: number | null;
  lon: number | null;
}

export interface PLACES_places {
  __typename: 'Place';
  id: string;
  name: PLACES_places_name;
  description: PLACES_places_description;
  location: PLACES_places_location;
}

export interface PLACES {
  places: (PLACES_places | null)[] | null;
}

export interface PLACESVariables {
  limit?: number | null;
  start?: number | null;
  languageFilter?: LanguageFilter | null;
}
