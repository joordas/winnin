import fetch from 'isomorphic-unfetch';
import config from './config';

export const getListingsBySub = async ({ sub, type }) => {
  try {
    const { redditDomain } = config;
    const endpoint = `${redditDomain}/r/${sub}/${type}.json`;
    const res = await fetch(endpoint);
    const data = await res.json();
    return data;
  } catch (error) {
    console.error('error getting listings >>', error);
    return {};
  }
};

export default getListingsBySub;
