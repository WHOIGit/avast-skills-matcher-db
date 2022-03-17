#!/bin/bash
# Script to rebuild all containers and run migrate/collectstatic to deploy
PATH=/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin

if [ -e docker-compose.yml ]
then
    docker-compose pull
    docker-compose up -d --no-deps django
    docker-compose run --rm django python manage.py migrate
    docker-compose run --rm django python manage.py collectstatic --noinput
    docker-compose up -d --no-deps frontend
fi
