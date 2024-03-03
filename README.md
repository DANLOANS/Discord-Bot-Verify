# Discord Verification Bot

This is a Discord bot built with Discord.js that provides a simple verification system using buttons.

## Features

- Allows users to verify themselves with a single click using a button.
- Assigns a specified role to verified users upon verification.

## Installation

1. Clone this repository to your local machine.
2. Install the required dependencies using `npm install`.
3. Set up your Discord bot and obtain the bot token.
4. Edit the `config.json` file and replace `'YOUR_ROLE_ID_HERE'` with the ID of the role you want to assign to verified users.
5. Replace `'YOUR_BOT_TOKEN_HERE'` with your actual bot token in the `index.js` file.
6. Customize the bot prefix and activity status in  `index.js` files if necessary.

## Usage

1. Run the bot using `node index.js`.
2. Invite the bot to your Discord server.
3. Use the specified prefix followed by the `verify` command to initiate the verification process (`.<prefix>verify` by default).
4. Users will receive a verification prompt with a button. Upon clicking the button, they will be assigned the specified role.

## Configuration


- `index.js`: Contains the main bot logic, including event handlers and button click actions.

## Dependencies

- [discord.js](https://discord.js.org/) - Discord API wrapper for Node.js.
- [discord-buttons](https://www.npmjs.com/package/discord-buttons) - Library for creating buttons in Discord messages.

## Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
