import { sleep } from 'k6';
import http from 'k6/http';
import * as env from '../utils/env.js';
import {
  defaultHeaders,
  Check,
  Options
} from '../utils/common.js';

import { contentsPending } from './contents_pending.js';

export const options = Options;

export default function main() {
  const response = contentsApprove();
  return response;
}

export function contentsApprove() {
  let content_id = contentsPending();
//  console.log(content_id);
  let url = `${env.Loadtest_URL}/v1/contents/${content_id}/review/approve?org_id=${env.ORG_ID}`;
//  console.log(url)
   let data = {
    }
  let res = http.put(url, JSON.stringify(data), defaultHeaders);
//  console.log(res.body);
  Check(res);
}