const { Collection, Client, Discord, MessageEmbed, Message } = require('discord.js');
const client = new Client({
    disableMention: 'everyone'
});
require('discord-buttons')(client);
const { MessageButton, MessageActionRow } = require("discord-buttons")

const config = {
    prefix: '.', // เพิ่มข้อมูล prefix ตามที่ต้องการ
    roleid: 'YOUR_ROLE_ID_HERE' // เพิ่ม ID ของบทบาทที่ต้องการให้มอบหลังจากการยืนยันตัวตน
};

client.prefix = config.prefix;

client.on('clickButton', async (button) => {
    if (button.id == 'AddVerifiedRole') {
        button.reply.send(`You have been verified!`, true)
        const role = button.guild.roles.cache.get(config.roleid)
        const member = button.clicker.member
        await member.roles.add(role)
    }
})

client.on("ready", () => {
    console.log("Bot online & ready!");
    client.user.setActivity("Verify by DanLoans", {
        type: "STREAMING",
        url: ""
    });
});

client.on('message', async (message) => {
    if (message.content.startsWith(config.prefix + 'verify')) { // เปลี่ยนจาก '.verify' เป็น config.prefix + 'verify'
        const embed = new MessageEmbed()
            .setTitle('Verification')
            .setColor("GREEN")
            .setDescription('Click the button below to verify!')

        const add = new MessageButton()
            .setStyle("green")
            .setLabel("Verify Me!")
            .setID("AddVerifiedRole")

        const row = new MessageActionRow()
            .addComponent(add)

        message.channel.send({ component: row, embed: embed })
    }
})

client.login('YOUR_BOT_TOKEN_HERE'); // เพิ่มโทเคนของบอทที่นี่
