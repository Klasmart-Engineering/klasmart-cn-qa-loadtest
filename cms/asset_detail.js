import { sleep } from 'k6';
import http from 'k6/http';
import * as env from '../utils/env.js';
import {
  defaultHeaders,
  Check,
  Options
} from '../utils/common.js';
import { assetsList } from './contents_folders_assets_list.js';

export const options = Options;

export default function main() {

  const response = assetDetail();
  return response;

}
export function assetDetail(){
  let content_id = assetsList();
  let url = env.Loadtest_URL + '/v1/contents/' + content_id + '?org_id=' + env.ORG_ID;
//  console.log(url);

  let res = http.get(url, defaultHeaders);
  Check(res);
//  console.log(res.body);
}