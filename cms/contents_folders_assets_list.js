import { sleep } from 'k6';
import http from 'k6/http';
import * as env from '../utils/env.js';
import {
  defaultHeaders,
  Check,
  Options
} from '../utils/common.js';

export const options = Options;

export default function main() {

  const response = assetsList();
  return response;

}
export function assetsList(){
  let url = `${env.Loadtest_URL}/v1/contents_folders?submenu=assets&content_type=3%2C10&order_by=-update_at&page=1&page_size=20&path=&org_id=${env.ORG_ID}`;
//  console.log(url);

  let res = http.get(url, defaultHeaders);
  Check(res);
//  console.log(res.body);
//  console.log(res.json().list[0].id);
  return res.json().list[0].id;
}