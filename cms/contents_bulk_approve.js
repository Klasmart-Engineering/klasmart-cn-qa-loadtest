import { sleep } from 'k6';
import http from 'k6/http';
import * as env from '../utils/env.js';
import {
  defaultHeaders,
  Check,
  Options
} from '../utils/common.js';

import { createPublishLm } from './create_publish_lm.js';

export const options = Options;

export default function main() {
  const response = contentsBulkApprove();
  return response;
}

export function contentsBulkApprove() {
  let content_id1 = createPublishLm();
  let content_id2 = createPublishLm();
//  console.log(content_id1, content_id2);
  let url = `${env.Loadtest_URL}/v1/contents_review/approve?org_id=${env.ORG_ID}`;
//  console.log(url);
   let data = {
      "ids": [
        content_id1,
        content_id2
      ]
   };

  let res = http.put(url, JSON.stringify(data), defaultHeaders);
//  console.log(res.body);
  Check(res);
}
