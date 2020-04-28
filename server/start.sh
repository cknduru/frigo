#!/bin/bash
pushd .
cd images/nodejs
docker build --tag nodeserver:1.0 .
popd
pushd .
cd docker-compose
docker-compose up -d
popd