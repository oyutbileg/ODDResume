FROM mhart/alpine-node:16 as builder
ARG BACK_URL
ARG GET_URL
WORKDIR /next/app
ENV NEXT_PUBLIC_API_URL=$BACK_URL
ENV NEXT_PUBLIC_GET_URL=$GET_URL
COPY package.json ./
RUN yarn
COPY . .
RUN yarn build
RUN yarn install --production --ignore-scripts --prefer-offline

FROM mhart/alpine-node:16
WORKDIR /next/app
COPY --from=builder /next/app/.next /next/app/.next
COPY --from=builder /next/app/package.json /next/app/
COPY --from=builder /next/app/public /next/app/public
COPY --from=builder /next/app/node_modules /next/app/node_modules

# ENTRYPOINT [ "yarn", "start", "-p", "4000" ]

EXPOSE 4000

ENV PORT 4000

CMD ["node", "server.js"]
