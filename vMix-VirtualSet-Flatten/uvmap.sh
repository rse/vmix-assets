#!/bin/sh

npm install yargs sharp

node uvmap.mjs -w 3840 -h 2160 uvmap-2160p.png
node uvmap.mjs -w 1920 -h 1080 uvmap-1080p.png
node uvmap.mjs -w 1280 -h  720 uvmap-720p.png

rm -rf node_modules

