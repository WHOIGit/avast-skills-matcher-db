#!/bin/sh
docker buildx build -t ghcr.io/whoigit/avast-skillsmatcher-frontend:stable --platform linux/amd64 --push .