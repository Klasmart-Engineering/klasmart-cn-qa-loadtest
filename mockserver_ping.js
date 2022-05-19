import { sleep } from 'k6';
import http from 'k6/http';
import {
  defaultHeaders,
  Check,
  Options
} from './utils/common.js';

export const options = Options;

export default function main() {
  const response = pingMockServer();
  return response;
}

export function pingMockServer(){
  var url = 'https://api-loadtest.kidsloop.cn/v1/ping';
//  console.log(url);

  let res = http.get(url, defaultHeaders);

  Check(res);
//  console.log(res.body);
}