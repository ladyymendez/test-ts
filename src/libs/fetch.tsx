import fetch from 'isomorphic-unfetch';

const fetcher = async  (...args) => {
  // @ts-ignore
  const res = await fetch(...args);
  return res.json();
}

export default fetcher;
