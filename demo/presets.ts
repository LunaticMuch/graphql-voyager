const githubIntrospection = require('./presets/github_introspection.json');
const swapiIntrospection = require('./presets/swapi_introspection.json');
const yelpIntrospection = require('./presets/yelp_introspection.json');
const shopifyIntrospection = require('./presets/shopify_introspection.json');

import { buildSchema, introspectionFromSchema } from 'graphql/utilities';
const twitterIntrospection= {data: introspectionFromSchema(buildSchema('./presets/twitter.graphql'))};

export const PRESETS = {
  'Star Wars': swapiIntrospection,
  Yelp: yelpIntrospection,
  'Shopify Storefront': shopifyIntrospection,
  GitHub: githubIntrospection,
  Twitter: twitterIntrospection
};

export const defaultPresetName = 'Star Wars';
export const defaultPreset = PRESETS[defaultPresetName];
