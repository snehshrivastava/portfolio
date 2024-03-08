
ARG NODE_VERSION=20.11.1

################################################################################
# Use node image for base image for all stages.
FROM node:${NODE_VERSION}-alpine as base

# Set working directory for all build stages.
WORKDIR /usr/src/app


################################################################################
# Create a stage for installing production dependecies.
# FROM base as deps

# Download dependencies as a separate step to take advantage of Docker's caching.
# Leverage a cache mount to /root/.npm to speed up subsequent builds.
# Leverage bind mounts to package.json and package-lock.json to avoid having to copy them
# into this layer.
# RUN --mount=type=bind,source=package.json,target=package.json \
#     --mount=type=bind,source=package-lock.json,target=package-lock.json \
#     --mount=type=cache,target=/root/.npm \
#     npm ci --omit=dev

################################################################################
# Create a stage for building the application.
# FROM deps as build

# Download additional development dependencies before building, as some projects require
# "devDependencies" to be installed to build. If you don't need this, remove this step.
# RUN --mount=type=bind,source=package.json,target=package.json \
#     --mount=type=bind,source=package-lock.json,target=package-lock.json \
#     --mount=type=cache,target=/root/.npm \
#     npm ci

# Copy the rest of the source files into the image.
COPY .env /usr/src/app/
COPY package.json /usr/src/app/
RUN npm i

COPY /public /usr/src/app/public
COPY /src /usr/src/app/src
# Run the build script.
RUN npm run build

################################################################################
# Create a new stage to run the application with minimal runtime dependencies
# where the necessary files are copied from the build stage.
# FROM base as final

# Use production node environment by default.
ENV NODE_ENV production

# Run the application as a non-root user.
# USER node

# Copy package.json so that package manager commands can be used.

# COPY /src ./src
# COPY /public ./public
# Copy the production dependencies from the deps stage and also
# the built application from the build stage into the image.
# COPY --from=build /usr/src/app/node_modules ./node_modules
# COPY --from=build /usr/src/app/public ./public

# COPY --from=build /usr/src/app/* .
# COPY --from=build /usr/src/app/.env .

# RUN npm i


# Expose the port that the application listens on.
EXPOSE 3001

# Run the application.
CMD npm run start
