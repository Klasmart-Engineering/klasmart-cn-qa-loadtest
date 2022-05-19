import http from 'k6/http';
import { Counter } from 'k6/metrics';
import * as env from './env.js';
import { check } from 'k6';

//all1124@yopmail.com
//export const defaultHeaders = {
//    headers: {
//      'Content-Type': 'application/json',
//      cookie:
//          'access=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImExZmFhNTc1LWVhMGMtNGEzMC04YmI2LTViYjM3M2MwYjA5NCIsImVtYWlsIjoiYWxsMTEyNEB5b3BtYWlsLmNvbSIsImV4cCI6Mjc0ODcyMDcwMSwiaXNzIjoiY2FsbWlkLWRlYnVnIn0.qVfuPzeQFKvHlOg3aPh45rQ878LrGif5I3yb3eZj7Z8',
//          // 'access=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjEzMjZhYjZkLWNlYjMtNDg5MS04ZjI5LWU5MzQxOTcxMWY4NCIsImVtYWlsIjoiYWxsMTEyNEB5b3BtYWlsLmNvbSIsImV4cCI6Mjc0ODcyMDcwMSwiaXNzIjoiY2FsbWlkLWRlYnVnIn0.yDkRHbNCqZ8C_TM9dn1yWy8Dr64MhRcg0iUU2xSdc0c', // teacher
//    },
//};

//org1119@yopmail.com  org: air jordan    user_id: afdfc0d9-ada9-4e66-b225-20f956d1a399
export const defaultHeaders = {
    headers: {
      'Content-Type': 'application/json',
      cookie:
          'access=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImFmZGZjMGQ5LWFkYTktNGU2Ni1iMjI1LTIwZjk1NmQxYTM5OSIsImVtYWlsIjoib3JnMTExOUB5b3BtYWlsLmNvbSIsImV4cCI6Mjc0ODcyMDcwMSwiaXNzIjoiY2FsbWlkLWRlYnVnIn0.Y3S-xyEhq221v38Ning97oyRzkSzevC1UTEj9w04f_A',
    },
};

//stu02_001@yopmail.com
export const StudentHeaders = {
    headers: {
      'Content-Type': 'application/json',
      cookie:
      'access=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImFlYTBlNDk0LWU1NmYtNDE3ZS05OWE3LTgxNzc0Yzg3OWJmOCIsImVtYWlsIjoic3R1MDJfMDAxQHlvcG1haWwuY29tIiwiZXhwIjoyNzQ4NzIwNzAxLCJpc3MiOiJjYWxtaWQtZGVidWcifQ.muj4OrqbSk72xeNvKr4wyzo8CRQH70FSSVoO9romy0s',
    },
};

//student112301@yopmail.com
export const orgHeaders = {
    headers: {
      'Content-Type': 'application/json',
      cookie:
          'access=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijg4NDJiMmVjLWI5MDMtNDZjNi1iMDYyLTA1OTIwYTNiN2Y3OSIsImVtYWlsIjoic3R1ZGVudDExMjMwMUB5b3BtYWlsLmNvbSIsImV4cCI6Mjc0ODcyMDcwMSwiaXNzIjoiY2FsbWlkLWRlYnVnIn0.hGq0BzRa3iV1vZESYlLaxbEBl1MmoAc-AjSZkyrJB1s',
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



































