FROM node:22-alpine

WORKDIR /thiccban

COPY ["package.json", "."]
RUN npm install -g pnpm
RUN pnpm install
COPY . .
RUN pnpm run lint
RUN pnpm run build

CMD ["pnpm", "start"]