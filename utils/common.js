import http from 'k6/http';
import { Counter } from 'k6/metrics';
import * as env from './env.js';
import { check } from 'k6';


  export const defaultHeaders = {
    headers: {
      'Content-Type': 'application/json',
      cookie:
          'access=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImExZmFhNTc1LWVhMGMtNGEzMC04YmI2LTViYjM3M2MwYjA5NCIsImVtYWlsIjoiYWxsMTEyNEB5b3BtYWlsLmNvbSIsImV4cCI6Mjc0ODcyMDcwMSwiaXNzIjoiY2FsbWlkLWRlYnVnIn0.qVfuPzeQFKvHlOg3aPh45rQ878LrGif5I3yb3eZj7Z8',
    },
  };

export const StudentHeaders = {
    headers: {
      'Content-Type': 'application/json',
      cookie:
          'access=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjEzYTgwNGQ3LWZiYmMtNGI2OS1hNzkzLWVhZmRkMTI3MjUwZCIsImVtYWlsIjoic3R1MTIyMWFAeW9wbWFpbC5jb20iLCJleHAiOjI3NDg3MjA3MDEsImlzcyI6ImNhbG1pZC1kZWJ1ZyJ9.M-0-kILlrkm7ApV9k4xMeBm0C-w-_JtGVtmPEOTHeOs',
    },
  };

//alpha token  alphaHeaders
export const alphaHeaders = {
    headers: {
      'Content-Type': 'application/json',
      cookie:
          'access=eyJhbGciOiJSUzUxMiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImExZmFhNTc1LWVhMGMtNGEzMC04YmI2LTViYjM3M2MwYjA5NCIsImVtYWlsIjoiYWxsMTEyNEB5b3BtYWlsLmNvbSIsImV4cCI6MTY0ODcxNDQyNywiaXNzIjoia2lkc2xvb3AifQ.MoB3mBw0Hj0Yu1_XcVbTtD9Caq_YSaQE2-2FsYglXpn-dgZVmi6GCJ7qbL1kx45J1vqmH2S2B45HGjX_jZswlowF7ieGIX4uhcJ3-XAA0VTqVRnDl88w9fPcYn_EMvXLF6ciY-9nxnt9FrY5RYbXgWEHb7T1oVFAjmh7HhZAQUXP4MLb-G-x1tLAI7UJbaCb99ASM76vfi7Kdg674KTmuxzkBKHmNnL2O9zpTYDMLW20xAqLlGkuiXd7a-DQK5m-HrzomuH-bM_fZXgosuPhYa3VZaZ2_RS7Pvs0ezbzsT_8L4ioPDEwSy9gAQ6xxppGLA37g_Q5Tj_3ZkltA-VoEg'
    },
  };

export const Options = {
  stages: [
    { duration: '2s', target: 1 },
//    { duration: '2m', target: 500 },
//    { duration: '1m', target: 800 },
  ],
  thresholds: {
    http_req_failed: ['rate<0.02'], // http errors should be less than 2%
    http_req_duration: ['p(95)<2000'], // 95% requests should be below 2s
  },
}

function batchCheck(res, expectedStatus = 200) {
  if (res.status !== expectedStatus) {
    console.error(res.status)
    console.error(JSON.stringify(res))
  }
}

//function batchCheck(res) {
//    check(res, {
//        'status is 200': (res) => res.status == 200,
//    });
//}

export const Check = batchCheck;

//n days ago
export function dateTimestamp(n){
  var d = new Date();
  d.setDate(d.getDate() - n);
  var dd = new Date(d.getFullYear(), d.getMonth(), d.getDate(), 0, 0, 0, 0);
  var ts = Math.round(dd/1000);
  return ts;
}
//n months ago
export function monthsTimestamp(n){
  var d = new Date();
  d.setMonth(d.getMonth() -n );
  var dd = new Date(d.getFullYear(), d.getMonth(), d.getDate(), 0, 0, 0, 0);
  var ts = Math.round(dd/1000);
  return ts;
}





































