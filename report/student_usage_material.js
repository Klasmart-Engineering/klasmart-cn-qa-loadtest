import { sleep } from 'k6';
import http from 'k6/http';
import * as env from '../utils/env.js';
import {
  defaultHeaders,
  Check,
  Options,
  dateTimestamp
} from '../utils/common.js';

export const options = Options;

export default function main() {
  const response = studentUsageMaterial();
  return response;
}

export function studentUsageMaterial(){
  var url = `${env.Loadtest_URL}/v1/reports/student_usage/material?org_id=${env.ORG_ID}`;
  let data = {
      "class_id_list": [
        "bae3617d-8bbc-4253-b397-1d597340c7b9",
        "23dcc986-a7d8-44d2-b7df-496380a6cbac",
        "5e5d0fd0-83a1-433e-bfe4-43569e5430b7",
        "41f5cea7-f079-4f57-a40c-4072a786af85",
        "896e7727-69ad-4da7-9643-cc8064d45701"
      ],
      "time_range_list": [
        dateTimestamp(21) + '-' + dateTimestamp(14),
        dateTimestamp(14) + '-' + dateTimestamp(7),
        dateTimestamp(7) + '-' + env.S_TIME_STAMP
      ],
      "content_type_list": [
        "h5p",
        "image",
        "video",
        "audio",
        "document"
      ]
   }

//  console.log(JSON.stringify(data))
  let res = http.post(url, JSON.stringify(data), defaultHeaders);
  Check(res);
//  console.log(res.body);
}