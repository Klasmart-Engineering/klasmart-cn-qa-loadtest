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
      'access=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImFlYTBlNDk0LWU1NmYtNDE3ZS05OWE3LTgxNzc0Yzg3OWJmOCIsImVtYWlsIjoic3R1MDJfMDAxQHlvcG1haWwuY29tIiwiZXhwIjoyNzQ4NzIwNzAxLCJpc3MiOiJjYWxtaWQtZGVidWcifQ.muj4OrqbSk72xeNvKr4wyzo8CRQH70FSSVoO9romy0s',
    },
};

export const Options = {
  stages: [
//    { duration: '5s', target: 1 },
    { duration: '1m', target: 500 },
    { duration: '2m', target: 500 },
    { duration: '2m', target: 500 },
  ],
  thresholds: {
    http_req_failed: ['rate<0.02'], // http errors should be less than 2%
    http_req_duration: ['p(95)<2000'], // 95% requests should be below 2s
  },
};

function batchCheck(res, expectedStatus = 200) {
  if (res.status !== expectedStatus) {
    console.error(res.status)
    console.error(JSON.stringify(res))
  }
};

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
};
//n months ago
export function monthsTimestamp(n){
  var d = new Date();
  d.setMonth(d.getMonth() -n );
  var dd = new Date(d.getFullYear(), d.getMonth(), d.getDate(), 0, 0, 0, 0);
  var ts = Math.round(dd/1000);
  return ts;
};

//random number
export function randomNum(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}



































