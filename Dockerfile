FROM oven/bun:alpine

WORKDIR /thiccban

COPY ["package.json", "."]
RUN bun install --save 
COPY . .
RUN bun run lint
RUN bun run build

CMD ["bun", "start"]