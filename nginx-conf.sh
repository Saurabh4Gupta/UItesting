#!/bin/sh

#cp /etc/nginx/nginx.conf.template /var/log/nginx.conf.a

sed -i '/\${/! s/\$/!@!/g' /etc/nginx/nginx.conf.template
#cp /etc/nginx/nginx.conf.template /var/log/nginx.conf.b

#env > /var/log/env.dump

envsubst < /etc/nginx/nginx.conf.template > /etc/nginx/nginx.conf
#cp /etc/nginx/nginx.conf /var/log/nginx.conf.c

sed -i 's/!@!/\$/g' /etc/nginx/nginx.conf

exit 0
