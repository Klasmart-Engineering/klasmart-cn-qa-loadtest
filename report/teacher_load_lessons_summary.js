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
  var url = `${env.Loadtest_URL}/v1/reports/teacher_load/lessons_summary?org_id=${env.ORG_ID}`;
      let data = {
          "class_ids": [
            "5870f60a-ea01-476d-98c4-f016124debc8",
            "facc1eaa-0f7c-4f97-9346-3fd945a7d4f4",
            "d41690f7-8871-46bb-ad92-ba4e6c9f81fa",
            "e05187ad-63bf-43a6-9a5c-72f1a64bce01",
            "98a1d98c-4ee7-4e91-b6fc-78e210998979",
            "b06119d4-764f-4613-bc4c-ed0a126f5423",
            "75e3825f-6674-44be-9ea2-01d6c0197d28",
            "9a83bacc-1941-47d9-8161-fda3df039735",
            "a607c7d9-9775-441d-b671-bffe5dd01639",
            "a5e488fd-0b53-4e3a-bdb7-f14641cdba9f",
            "8860789c-d66e-47ff-892c-8577d09ed86d"
          ],
          "duration": "1646841600-1652955503",
//          "duration": dateTimestamp(70) + '-' + env.S_TIME_STAMP,
          "teacher_ids": [
            "d52ed9a5-d663-4605-be0b-087299d3283c",
            "8700dfaf-a352-4902-bcb0-e3982c6a12df",
            "1e200965-df57-461e-8af3-e255886e8e41",
            "5e284945-5900-4acd-be43-f57dc478e325",
            "5cd801e4-f657-49c7-9c0a-adabe5d207e7",
            "c57ef68d-a635-451d-b997-aebc3c29b99a",
            "17a28338-3b88-4bac-ab15-cce3887af357",
            "23d5d7c6-73ab-4fc0-be0f-57464fcd3596",
            "70eb76d1-91d3-4edf-9bf6-a2dfcfb51407",
            "d9d0df26-c2e9-4605-94ff-4c8237e2487a",
            "fe225a37-ee64-4ed2-969e-8846dad568e7",
            "97e3f59b-41d4-42a0-af20-663c3cb12c5c",
            "7d88a4ea-93a4-4949-b6cb-ad0469919e7e"
          ]
      }

//  console.log(JSON.stringify(data))
  let res = http.post(url, JSON.stringify(data), defaultHeaders);
  Check(res);
//  console.log(res.body);
}