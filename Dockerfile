FROM ghost
ADD config.js ${GHOST_CONTENT}/config.js
CMD ["npm", "start", "--production"]
