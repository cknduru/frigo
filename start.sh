#!/bin/bash
docker stop docker-compose_nodejs_1 docker-compose_redis_1 docker-compose_frigo_server_1
pushd .
cd images/nodejs
docker build --tag nodeserver:1.0 .
popd
pushd .
cd docker-compose
docker-compose up -d
popd