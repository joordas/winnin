import fetch from 'isomorphic-unfetch';
import { stringify } from 'query-string';
import config from './config';

export const getListingsBySub = async ({ sub, type, params }) => {
  try {
    const reqParams = stringify(params);
    const { redditDomain } = config;
    const endpoint = `${redditDomain}/r/${sub}${type}.json?${reqParams
      || ''}`;
    const res = await fetch(endpoint);
    const data = await res.json();
    return data;
  } catch (error) {
    console.error('error getting listings >>', error);
    return {};
  }
};

export const paginate = async ({
  sub, type, count, after,
}) => {
  const { fetchPerPage } = config;
  const params = {
    limit: fetchPerPage,
    count,
    after,
  };
  return getListingsBySub({ sub, type, params });
};

export default getListingsBySub;
