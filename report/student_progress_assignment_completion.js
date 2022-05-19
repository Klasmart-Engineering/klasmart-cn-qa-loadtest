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
  const response = assignmentCompletion();
  return response;
}

export function assignmentCompletion(){
  var url = `${env.Loadtest_URL}/v1/reports/student_progress/assignment_completion?org_id=${env.ORG_ID}`;
  let data = {
  "class_id": "facc1eaa-0f7c-4f97-9346-3fd945a7d4f4",
  "durations": [
//    dateTimestamp(70) + '-' + dateTimestamp(28),
    "1646841600-1650470400",
    "1651420800-1652025600",
    "1652025600-1652630400",
    "1652630400-1652946353"
  ],
  "selected_subject_id_list": [
    "0a8aacca-ad07-4596-8fb5-e4058b22b371",
    "4d490e30-f325-4682-9905-e5555c7a7dd3",
    "f037ee92-212c-4592-a171-ed32fb892162",
    "7cf8d3a3-5493-46c9-93eb-12f220d101d0",
    "fab745e8-9e31-4d0c-b780-c40120c98b27",
    "37daa8f5-6664-4082-9bfb-608208a0d2d8",
    "66a453b0-d38f-472e-b055-7a94a94d66c4",
    "36c4f793-9aa3-4fb8-84f0-68a2ab920d5a",
    "b997e0d1-2dd7-40d8-847a-b8670247e96b",
    "49c8d5ee-472b-47a6-8c57-58daf863c2e1",
    "b19f511e-a46b-488d-9212-22c0369c8afd",
    "f12276a9-4331-4699-b0fa-68e8df172843",
    "29d24801-0089-4b8e-85d3-77688e961efb",
    "51189ac9-f206-469c-941c-3cda28af8788",
    "20d6ca2f-13df-4a7a-8dcb-955908db7baa",
    "5e9a201e-9c2f-4a92-bb6f-1ccf8177bb71",
    "7a99e386-623a-48c9-b481-cd7edba73b84",
    "eac9d0b4-98fb-469c-92b5-4b67e5ac9de1",
    "4abb00b6-d5aa-48cd-a863-21b26d49bade",
    ""
  ],
  "student_id": "c57ef68d-a635-451d-b997-aebc3c29b99a",
  "un_selected_subject_id_list": []
}

//  console.log(JSON.stringify(data))
  let res = http.post(url, JSON.stringify(data), defaultHeaders);
  Check(res);
//  console.log(res.body);
}