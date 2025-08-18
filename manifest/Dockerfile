FROM busybox:latest
WORKDIR /app
COPY start.sh /app/start.sh
RUN chmod +x /app/start.sh
EXPOSE 8080
ENV MSG="Level 4: Hello"
CMD ["/bin/sh", "/app/start.sh"]
