FROM alpine
COPY . .
RUN apk update
RUN apk add python3
CMD ["python3", "-m", "http.server", "4444"]