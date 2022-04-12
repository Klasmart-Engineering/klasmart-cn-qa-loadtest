#!/bin/bash

for file in `ls ./cms/*.js`;do
k6 run "$file" > "./output/${file##*/}-`date`.txt" 2>&1
done
for file in `ls ./report/*.js`;do
k6 run "$file" > "./output/${file##*/}-`date`.txt" 2>&1
done