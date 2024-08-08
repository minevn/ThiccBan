FROM oven/bun:alpine

WORKDIR /thiccban

COPY ["package.json", "."]
RUN bun install
COPY . .
RUN bun run lint
RUN bun run build

CMD ["bun", "start"]