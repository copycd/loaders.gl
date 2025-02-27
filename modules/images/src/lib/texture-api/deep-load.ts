import {asyncDeepMap} from './async-deep-map.js';

export async function deepLoad(urlTree, load, options) {
  return await asyncDeepMap(urlTree, (url) => shallowLoad(url, load, options));
}

export async function shallowLoad(url, load, options) {
  // console.error('loading', url);
  const response = await fetch(url, options.fetch);
  const arrayBuffer = await response.arrayBuffer();
  return await load(arrayBuffer, options);
}
