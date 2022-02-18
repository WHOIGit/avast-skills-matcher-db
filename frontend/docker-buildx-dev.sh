#!/bin/sh
docker buildx build -f Dockerfile-dev -t ghcr.io/whoigit/avast-skillsmatcher-frontend:dev --platform linux/amd64 --push .