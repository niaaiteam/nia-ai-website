#!/bin/bash

# Set environment variables for Netlify build
export VITE_ALLOW_ALL_HOSTS=true
export NETLIFY=true
export NODE_ENV=production

# Install dependencies
npm install

# Build the project
npm run build
