// Dependencies
import 'isomorphic-fetch';
import queryString from 'query-string';

export function apiEndpoint(endpoint, qs, fetchingFrom, typeGet) {
  let query = '';
  let apiUrl = '';

  //console.log('[i] TYPEGET 4: ',typeGet);
  //console.log(qs);

  if (qs) {
    if(typeGet==='all'){
      query = `?${qs}`;
    }else{
      qs = qs.replace('id=', '');
      query = `/${qs}`;
    }
  }
  //console.log(query);

  if (fetchingFrom === 'server') {
    apiUrl = 'http://localhost:3000';
  }

  return `${apiUrl}/api/${endpoint}${query}`;
}

export function apiFetch(endpoint, options = {}, query = false, typeGet) {
  let qs;
  const { fetchingFrom = 'client' } = options;

  delete options.fetchFrom;
  //console.log('[i] TYPEGET 3: ',typeGet);
  //console.log(query);
  if (query) {
    qs = queryString.stringify(query);
  }

  const fetchOptions = apiOptions(options);
  const fetchEndpoint = apiEndpoint(endpoint, qs, fetchingFrom, typeGet);

  return fetch(fetchEndpoint, fetchOptions).then(response => response.json());
}

export function apiOptions(options = {}) {
  const {
    method = 'GET',
    headers = {
      'Content-Type': 'application/json'
    },
    body = false
  } = options;

  const newOptions = {
    method,
    headers,
    credentials: 'include'
  };

  if (body) {
    newOptions.body = body;
  }

  return newOptions;
}

