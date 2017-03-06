
## How to run

1. Create the `.env` by using `.env.example` as a reference: `cp .env.example .env`
2. Update the .env file with your correct local information
3. Install dependencies: `npm i`
4. Fix to binaries for sass: `npm rebuild node-sass`
5. Run migrations: `npm run knex migrate:latest
5a-Optional: psql -d [database_name] < db/resetseq.sql     if running seeds again, reset the id sequences `
6. Run the seed: `npm run knex seed:run`
7. Run the server: `npm run local`
8. Visit `http://localhost:8080/`


## Dependencies

- Node 5.10.x or above
- NPM 3.8.x or above
