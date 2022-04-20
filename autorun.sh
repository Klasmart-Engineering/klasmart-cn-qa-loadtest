#!/bin/bash

for file in `ls ./cms/*.js`;do
k6 run "$file" > "./resultCMS/${file##*/}-`date`.txt" 2>&1
done
for file in `ls ./report/*.js`;do
k6 run "$file" > "./resultReport/${file##*/}-`date`.txt" 2>&1
done