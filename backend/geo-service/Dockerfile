FROM node:15.14.0-alpine3.10 as builder
WORKDIR /app

COPY . /app

RUN apk add --no-cache binutils && \
  npm ci --no-audit --production && \
	npm run build && \
	strip /usr/local/bin/node

FROM alpine:3.12

COPY --from=builder /usr/local/bin/node /usr/bin/
COPY --from=builder /usr/lib/libgcc* /usr/lib/libstdc* /usr/lib/
COPY --from=builder /app /app
COPY --from=builder /app/src/python-modules /app/dist/src/python-modules 

WORKDIR /app

RUN apk add --no-cache tini=0.19.0-r0
RUN apk add --no-cache curl=7.76.1-r0
RUN apk add --no-cache python3 py3-pip
RUN pip install geopy

EXPOSE 3001

COPY entrypoint.sh /usr/bin/entrypoint
CMD ["tini", "--", "/usr/bin/entrypoint"]