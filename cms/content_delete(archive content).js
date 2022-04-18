import { sleep } from 'k6';
import http from 'k6/http';
import * as env from '../utils/env.js';
import {
  defaultHeaders,
  Check,
  Options
} from '../utils/common.js';
import { contentRemoveToArchive } from './content_delete(remove to archive).js';
export const options = Options;

export default function main() {

  const response = contentDelete();
  return response;

}
// delete from the archive
export function contentDelete(){
  let content_id = contentRemoveToArchive();
//  console.log(content_id);
  let url = `${env.Loadtest_URL}/v1/contents/${content_id}?org_id=${env.ORG_ID}`;

  let res = http.del(url, null, defaultHeaders);
  Check(res);
//  console.log(res.body);
//  return content_id;
}