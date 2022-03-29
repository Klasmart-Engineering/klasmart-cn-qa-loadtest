import { sleep } from 'k6';
import http from 'k6/http';
import * as env from '../utils/env.js';
import {
  defaultHeaders,
  Check,
  Options
} from '../utils/common.js';

import { createSaveLm } from './create_save_lm.js';

export const options = Options;

export default function main() {
  const response = createPublishLm();
  return response;
}

export function createPublishLm() {
  let content_id = createSaveLm();
//  console.log(content_id);
  let url = `${env.Loadtest_URL}/v1/contents/${content_id}/publish?org_id=${env.ORG_ID}`;
//  console.log(url);

  let data = {
    "scope":[env.ORG_ID]
    }
//  console.log(JSON.stringify(data))

  let res = http.put(url, JSON.stringify(data), defaultHeaders);
//  console.log(res.body);

  Check(res);
}