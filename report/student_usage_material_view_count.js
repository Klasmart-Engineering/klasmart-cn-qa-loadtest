import { sleep } from 'k6';
import http from 'k6/http';
import * as env from '../utils/env.js';
import {
  defaultHeaders,
  Check,
  Options,
  monthsTimestamp
} from '../utils/common.js';

export const options = Options;

export default function main() {
  const response = materialViewCount();
  return response;
}

export function materialViewCount(){
  var url = `${env.Loadtest_URL}/v1/reports/student_usage/material_view_count?org_id=${env.ORG_ID}`;
  let data = {
      "class_id_list": [
        "9a83bacc-1941-47d9-8161-fda3df039735",
        "8860789c-d66e-47ff-892c-8577d09ed86d",
        "2ea4ea0e-8a23-4063-98e8-84cdc30ad80b",
        "a607c7d9-9775-441d-b671-bffe5dd01639",
        "d41690f7-8871-46bb-ad92-ba4e6c9f81fa",
        "facc1eaa-0f7c-4f97-9346-3fd945a7d4f4",
        "e05187ad-63bf-43a6-9a5c-72f1a64bce01",
        "110b78e4-9e59-4d4c-89db-73f80fc3aacc",
        "6770cee0-8c78-4636-a646-22237ba3aefc",
        "b06119d4-764f-4613-bc4c-ed0a126f5423",
        "a5e488fd-0b53-4e3a-bdb7-f14641cdba9f",
        "75e3825f-6674-44be-9ea2-01d6c0197d28",
        "5870f60a-ea01-476d-98c4-f016124debc8",
        "98a1d98c-4ee7-4e91-b6fc-78e210998979"
      ],
      "time_range_list": [
        "1646064000-1652954265"
//        monthsTimestamp(2) + '-' + env.S_TIME_STAMP
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