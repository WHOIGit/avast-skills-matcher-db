#!/bin/sh
docker buildx build -f compose/production/postgres/Dockerfile -t ghcr.io/whoigit/postgres-docker-scripts:14.23 --platform linux/amd64 --push .