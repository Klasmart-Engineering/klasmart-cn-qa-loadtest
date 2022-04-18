import { sleep } from 'k6';
import http from 'k6/http';
import * as env from '../utils/env.js';
import {
  defaultHeaders,
  Check,
  Options
} from '../utils/common.js';
import { publishLmList } from './contents_folders_lm_list.js';

export const options = Options;

export default function main() {

  const response = contentDetail();
  return response;

}
export function contentDetail(){
  let content_id = publishLmList();
  let url = env.Loadtest_URL + '/v1/contents/' + content_id + '?org_id=' + env.ORG_ID;
//  console.log(url);

  let res = http.get(url, defaultHeaders);
  Check(res);
//  console.log(res.body);
}