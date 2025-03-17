FROM pierrezemb/gostatic
COPY ./index.html /srv/http/
COPY ./output.css /srv/http/
COPY ./favicon.ico /srv/http/
CMD ["-port","8080","-https-promote", "-enable-logging"]
