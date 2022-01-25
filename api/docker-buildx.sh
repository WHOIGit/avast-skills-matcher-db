#!/bin/sh
docker buildx build -f compose/production/django/Dockerfile -t ghcr.io/whoigit/avast-skillsmatcher-api:stable --platform linux/amd64 --push .