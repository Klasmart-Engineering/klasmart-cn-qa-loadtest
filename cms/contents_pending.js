import { sleep } from 'k6';
import http from 'k6/http';
import * as env from '../utils/env.js';
import {
  defaultHeaders,
  Check,
  Options,
  random
} from '../utils/common.js';

export const options = Options;

export default function main() {

  const response = contentsPending();
  return response;

}
export function contentsPending(){
  let url = env.Loadtest_URL + '/v1/contents_pending?publish_status=pending&submenu=pending&content_type=1%2C2%2C10&order_by=-update_at&page=1&page_size=20&org_id=' + env.ORG_ID;
//  console.log(url);

  let res = http.get(url, defaultHeaders);
  Check(res);
  return res.json().list[0].id;
}