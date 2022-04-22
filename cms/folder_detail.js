import { sleep } from 'k6';
import http from 'k6/http';
import * as env from '../utils/env.js';
import {
  defaultHeaders,
  Check,
  Options
} from '../utils/common.js';
import { folderList } from './contents_folders_folder_list.js';

export const options = Options;

export default function main() {

  const response = folderDetail();
  return response;

}
export function folderDetail(){
  let folder_id = folderList();
  let url = `${env.Loadtest_URL}/v1/folders/items/details/${folder_id}?org_id=${env.ORG_ID}`;
//  console.log(url);
  let res = http.get(url, defaultHeaders);
  Check(res);
//  console.log(res.body);
}
