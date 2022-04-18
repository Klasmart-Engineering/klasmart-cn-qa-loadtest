import { sleep } from 'k6';
import http from 'k6/http';
import * as env from '../utils/env.js';
import {
  defaultHeaders,
  Check,
  Options
} from '../utils/common.js';
import { contentsArchiveList } from './contents_archive_list.js';
export const options = Options;

export default function main() {

  const response = contentDelete();
  return response;

}
export function contentDelete(){
  let content_id = contentsArchiveList();
  let url = `${env.Loadtest_URL}/v1/contents/${content_id}?org_id=${env.ORG_ID}`;
//  console.log(url);

  let res = http.del(url, null, defaultHeaders);
  Check(res);
//  console.log(res.body);
}