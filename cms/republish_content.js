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
  const response = reublishContent();
  return response;
}

export function reublishContent() {
  let content_id = contentRemoveToArchive();
//  console.log(content_id);
  let url = `${env.Loadtest_URL}/v1/contents/${content_id}/publish?org_id=${env.ORG_ID}`;
//  console.log(url);

  let data = {
    "scope":[]
    }

  let res = http.put(url, JSON.stringify(data), defaultHeaders);
//  console.log(res.body);

  Check(res);
//  return content_id;
}