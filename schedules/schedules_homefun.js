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
    "class_type":"Homework",
    "description":"1231",
    "due_at":0,
    "is_all_day":false,
    "is_force":true,
    "is_repeat":false,
    "lesson_plan_id":"",
    "program_id":"7565ae11-8130-4b7d-ac24-1d9dd6f792f2",
    "repeat":{

    },
    "subject_id":"",
    "teacher_ids":[
        "a1faa575-ea0c-4a30-8bb6-5bb373c0b094",
        "537e703d-4b53-4159-b504-65e8c4f45c98"
    ],
    "title":"homefun",
    "outcome_ids":[
        "6220631e5c7b89ca8c609e0f",
        "622f0017928e49256faea0f6"
    ],
    "start_at":1686412800,
    "end_at":1686499199,
    "subject_ids":[
        "5e9a201e-9c2f-4a92-bb6f-1ccf8177bb71"
    ],
    "attachment":{
        "id":"",
        "name":""
    },
    "time_zone_offset":28800,
    "is_home_fun":true,
    "class_roster_student_ids":[
        "537e703d-4b53-4159-b504-65e8c4f45c98"
    ],
    "class_roster_teacher_ids":[
        "a1faa575-ea0c-4a30-8bb6-5bb373c0b094"
    ],
    "participants_student_ids":[
        "348967c8-bed4-4aa1-9663-718e5499cffe"
    ],
    "participants_teacher_ids":[

    ],
    "is_review":false
}

  let res = http.post(url, JSON.stringify(data), defaultHeaders);
  // console.log(res.body);
  Check(res);

}