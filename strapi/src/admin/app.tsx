import type { StrapiApp } from '@strapi/strapi/admin';

import favicon from "./extensions/favicon.ico";

const config = {
  config: {
    head: {
      favicon: favicon as string,
    },
  },
};

export default config;
