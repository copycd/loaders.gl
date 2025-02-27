// Fork of https://github.com/floatdrop/require-from-string/blob/master/index.js
// Copyright (c) Vsevolod Strukchinsky <floatdrop@gmail.com> (github.com/floatdrop)
// MIT license

// this file is not visible to webpack (it is excluded in the package.json "browser" field).

import Module from 'module';
import path from 'path';

// copycd:: requireFromString를 사용하기 위해서 추가.
import {
    requireFromString as proxy_requireFromString
    //importFromString,
    //importFromStringSync
  } from 'module-from-string';
  
// Node.js Dynamically require from file
// Relative names are resolved relative to cwd
// This indirect function is provided because webpack will try to bundle `module.require`.
// this file is not visible to webpack (it is excluded in the package.json "browser" field).
export async function requireFromFile(filename: string): Promise<any> {
  if (filename.startsWith('http')) {
    const response = await fetch(filename);
    const code = await response.text();
    return proxy_requireFromString(code);
  }

  if (!filename.startsWith('/')) {
    filename = `${process.cwd()}/${filename}`;
  }
  return require(filename);
}

// Dynamically require from string
// - `code` - Required - Type: string - Module code.
// - `filename` - Type: string - Default: '' - Optional filename.
// - `options.appendPaths` Type: Array List of paths, that will be appended to module paths.
// Useful, when you want to be able require modules from these paths.
// - `options.prependPaths` Type: Array Same as appendPaths, but paths will be prepended.
// copycd:: requireFromString 원래있던 함수를 사용하지 않고, 위의 import한걸 사용함.
export function requireFromString(
  code: string,
  filename = '',
  options?: {
    prependPaths?: string[];
    appendPaths?: string[];
  }
): any {
  if (typeof filename === 'object') {
    options = filename;
    filename = '';
  }

  if (typeof code !== 'string') {
    throw new Error(`code must be a string, not ${typeof code}`);
  }

  // @ts-ignore
  const paths = Module._nodeModulePaths(path.dirname(filename));
	// copycd::이젠없어진것때문에. https://nodejs.org/api/deprecations.html#DEP0144
  const parent = module.parent;
  // @ts-ignore
  const newModule = new Module(filename, parent);
  newModule.filename = filename;
  newModule.paths = ([] as string[])
    .concat(options?.prependPaths || [])
    .concat(paths)
    .concat(options?.appendPaths || []);
  // @ts-ignore
  newModule._compile(code, filename);

  if (parent && parent.children) {
    parent.children.splice(parent.children.indexOf(newModule), 1);
  }

  return newModule.exports;
}
