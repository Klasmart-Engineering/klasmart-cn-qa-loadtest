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
        "9a83bacc-1941-47d9-8161-fda3df039735",
        "8860789c-d66e-47ff-892c-8577d09ed86d",
        "2ea4ea0e-8a23-4063-98e8-84cdc30ad80b",
        "a607c7d9-9775-441d-b671-bffe5dd01639",
        "d41690f7-8871-46bb-ad92-ba4e6c9f81fa"
      ],
      "time_range_list": [
        "1646064000-1648742400",
        "1648742400-1651334400",
        "1651334400-1652954265"
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