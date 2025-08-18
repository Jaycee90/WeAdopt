#!/bin/sh
# Start a tiny static server and expose a health file
echo "${MSG}" > /app/healthy
# -f: run in foreground; use & to keep container alive separately with tail
httpd -f -p 8080 -h /app >/dev/null 2>&1 &
tail -f /dev/null
