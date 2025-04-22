# 🐾 Tomodatchi

A nostalgic virtual pet game inspired by the Tamagotchi® devices.

> **Disclaimer**: Tamagotchi is a registered trademark of Bandai.
> This project is a fan-made game and is not affiliated with or endorsed by Bandai in any way.

## Features

- Cute pixel-style animated pet 🐣
- Needs management (hunger, sleep, happiness)
- Built with Node.js (Fastify) + React frontend
- WebSocket real-time interactions

## Developpement

``` bash
    # build typescript once, using tsconfig.json
    npm run build
    
    # build typescript files in dist/ and watch for changes
    npm run build-watch
    
    # Convert typescript files in memory (no write in /dist), exec api server and watch for changes
    npm run dev

    # Start the api server from /dist files (like a prod env)
    npm start
```

## License

This project is licensed under the GNU General Public License v3.0 - see the [LICENSE](./LICENSE) file for details.