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
  const response = classAttendance();
  return response;
}

export function classAttendance(){
  var url = `${env.Loadtest_URL}/v1/reports/student_progress/class_attendance?org_id=${env.ORG_ID}`;
  let data = {
  "class_id": "bae3617d-8bbc-4253-b397-1d597340c7b9",
  "durations": [
    dateTimestamp(28) + '-' + dateTimestamp(21),
    dateTimestamp(21) + '-' + dateTimestamp(14),
    dateTimestamp(14) + '-' + dateTimestamp(7),
    dateTimestamp(7) + '-' + env.S_TIME_STAMP
  ],
  "selected_subject_id_list": [
    "20d6ca2f-13df-4a7a-8dcb-955908db7baa",
    "36c4f793-9aa3-4fb8-84f0-68a2ab920d5a",
    "66a453b0-d38f-472e-b055-7a94a94d66c4",
    "b997e0d1-2dd7-40d8-847a-b8670247e96b",
    "49c8d5ee-472b-47a6-8c57-58daf863c2e1",
    "b19f511e-a46b-488d-9212-22c0369c8afd",
    "f12276a9-4331-4699-b0fa-68e8df172843",
    "29d24801-0089-4b8e-85d3-77688e961efb",
    "f037ee92-212c-4592-a171-ed32fb892162",
    "51189ac9-f206-469c-941c-3cda28af8788",
    "7cf8d3a3-5493-46c9-93eb-12f220d101d0",
    "5e9a201e-9c2f-4a92-bb6f-1ccf8177bb71",
    "fab745e8-9e31-4d0c-b780-c40120c98b27",
    "8f566d7f-a76f-4f27-a644-3ff9b7cb6350",
    "f304af60-95c1-49cf-80b3-8f3265bbf663",
    ""
  ],
  "student_id": "537e703d-4b53-4159-b504-65e8c4f45c98",
  "un_selected_subject_id_list": []
}

//  console.log(JSON.stringify(data))
  let res = http.post(url, JSON.stringify(data), defaultHeaders);
  Check(res);
//  console.log(res.body);
}