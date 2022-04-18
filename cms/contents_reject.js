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
  const response = contentsReject();
  return response;
}

export function contentsReject() {
  let content_id = createPublishLm();
//  console.log(content_id);
  let url = `${env.Loadtest_URL}/v1/contents/${content_id}/review/reject?org_id=${env.ORG_ID}`;
//  console.log(url);
   let data = {
      "reject_reason": [
        "library_label_inappropriate_content"
      ],
      "remark": "auto reject" + env.MS_TIME_STAMP
   };

  let res = http.put(url, JSON.stringify(data), defaultHeaders);
//  console.log(res.body);
  Check(res);
}

