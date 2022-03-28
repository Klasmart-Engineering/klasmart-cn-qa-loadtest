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
  var url = `${env.Loadtest_URL}/v1/reports/learner_usage/overview?org_id=${env.ORG_ID}`;

  let data = {
    "durations": [
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
  console.log(JSON.stringify(data))

  let res = http.post(url, JSON.stringify(data), defaultHeaders);
//  console.log(res.json().id);
  return res.json().id;

  Check(res);

//  console.log(res.status);
//  console.log(res.body);
//  sleep (1)
}