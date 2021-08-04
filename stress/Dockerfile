FROM registry.access.redhat.com/rhscl/httpd-24-rhel7

CMD ab -dSrk -c 20 -n 50000000 http://php-scale-ale:8080/index.php
# It can be executed from a httpd/apache web service ab generate load 
#php-scale-ale it is the service name of my deployment, 880 default port 
#CMD ab -dSrk -c 20 -n 50000000 http://${SCALE_SERVICE_HOST}:${SCALE_SERVICE_PORT}/index.php

