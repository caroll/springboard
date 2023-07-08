#!/usr/bin/env bash

echo "Terminal exercise - part I"


mkdir first
echo "-> Create directory called first: mkdir first"
ls -la

cd first
echo "-> change to the first folder: cd first"
pwd

touch person.txt
echo "-> create person.txt file: touch person.txt"
ls -la

mv person.txt another.txt
echo "-> change the name of person.txt to another.txt: mv person.txt another.txt"
ls -la

cp another.txt copy.txt
echo "-> make a copy of another.txt and call it copy.txt: cp another.txt copy.txt"
ls -la

rm copy.txt
echo "-> remove copy.txt: rm copy.txt"
ls -la

cd ..
echo "-> go to its parent directory: cd .."
cp -r first/ second
echo "-> make a copy of first folder and call it second: cp -r first/ second"
ls -la

rm -rf second/
echo "-> remove second folder: rm -rf second/"
ls -la

