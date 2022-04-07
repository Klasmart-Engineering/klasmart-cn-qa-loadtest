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
  const response = lessonsSummary();
  return response;
}

export function lessonsSummary(){
  var url = `${env.Loadtest_URL}/v1/reports/teacher_load/assignments?org_id=${env.ORG_ID}`;
  let data = {
      "class_type_list": [
        "study",
        "home_fun"
      ],
      "duration": dateTimestamp(7) + '-' + env.S_TIME_STAMP,
      "class_id_list": [
        "bae3617d-8bbc-4253-b397-1d597340c7b9",
        "23dcc986-a7d8-44d2-b7df-496380a6cbac",
        "896e7727-69ad-4da7-9643-cc8064d45701",
        "5e5d0fd0-83a1-433e-bfe4-43569e5430b7",
        "9e5d98f4-2bae-4d88-9a29-72b388c9de63"
      ],
      "teacher_id_list": [
        "2b6f5510-0342-471c-8aea-92291f66610b",
        "eac9e9b0-bb92-495b-9cc5-c64db10c6ceb",
        "cc9f16f5-bf27-484a-a397-c93029bcdae7",
        "a1faa575-ea0c-4a30-8bb6-5bb373c0b094",
        "97e3f59b-41d4-42a0-af20-663c3cb12c5c"
      ]
  }
//  console.log(JSON.stringify(data))
  let res = http.post(url, JSON.stringify(data), defaultHeaders);
  Check(res);
//  console.log(res.body);
}