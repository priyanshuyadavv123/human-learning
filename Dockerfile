# ===================================================
# Stage 1: Build Frontend Assets
# ===================================================
FROM node:22-alpine AS builder

WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm ci

# Copy application source and build production bundle
COPY . .
RUN npm run build

# ===================================================
# Stage 2: Production Runtime Server
# ===================================================
FROM node:22-alpine AS runner

WORKDIR /app

ENV NODE_ENV=production
ENV PORT=3000

# Install production dependencies only
COPY package*.json ./
RUN npm ci --omit=dev

# Copy compiled frontend assets from builder
COPY --from=builder /app/dist ./dist

# Copy backend server files
COPY server ./server

# Expose server port
EXPOSE 3000

# Run with Node 22 native TypeScript execution
CMD ["node", "--experimental-strip-types", "server/index.ts"]
