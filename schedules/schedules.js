import { sleep } from 'k6';
import http from 'k6/http';
import * as env from '../utils/env.js';
import {
  defaultHeaders,
  Check,
  Options
} from '../utils/common.js';

export const options = Options;

export default function main() {
  const response = schedules();
};

export  function schedules() {
  var url = `${env.Loadtest_URL}/v1/schedules?org_id=${env.ORG_ID}`;
// console.log(url);
  let data = {
    "attachment_path":"",
    "class_id":"9e5d98f4-2bae-4d88-9a29-72b388c9de63",
    "class_type":"OnlineClass",
    "description":"24234",
    "due_at":0,
    "is_all_day":true,
    "is_force":false,
    "is_repeat":false,
    "lesson_plan_id":"60a316cc03b03c3acdb54b54",
    "program_id":"14d350f1-a7ba-4f46-bef9-dc847f0cbac5",
    "repeat":{

    },
    "subject_id":"7cf8d3a3-5493-46c9-93eb-12f220d101d0",
    "teacher_ids":[
        "a1faa575-ea0c-4a30-8bb6-5bb373c0b094",
        "537e703d-4b53-4159-b504-65e8c4f45c98"
    ],
    "title":"live",
    "outcome_ids":[

    ],
    "start_at":1686412800,
    "end_at":1686499199,
    "subject_ids":[
        "7cf8d3a3-5493-46c9-93eb-12f220d101d0"
    ],
    "attachment":{
        "id":"",
        "name":""
    },
    "time_zone_offset":28800,
    "is_home_fun":false,
    "class_roster_student_ids":[
        "537e703d-4b53-4159-b504-65e8c4f45c98"
    ],
    "class_roster_teacher_ids":[
        "a1faa575-ea0c-4a30-8bb6-5bb373c0b094"
    ],
    "participants_student_ids":[
        "0520dbf0-8a9f-4a90-9731-8d7db0b92dca"
    ],
    "participants_teacher_ids":[

    ],
    "is_review":false
    }

  let res = http.post(url, JSON.stringify(data), defaultHeaders);
  console.log(res.body);
  Check(res);

}