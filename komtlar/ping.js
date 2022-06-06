const { MessageEmbed,Client,CommandInteraction } = require("discord.js");
module.exports = {
    name:"ping",
    description: 'Botun Geçikme Değeri',
    permissions:[],
    options:[],
    /**
     * 
     * @param {Client} client 
     * @param {CommandInteraction} interaction 
     */
    run: async (client, interaction) => {

     const embed = new MessageEmbed()
     .setTitle(":ping_pong: Pong!")
     .setDescription(`Gecikme değeri: ${client.ws.ping}ms!`)

     if(client.ws.ping < 60) embed.setColor("GREEN")
     else if(client.ws.ping > 60 && client.ws.ping < 120) embed.setColor("YELLOW")
     else if(client.ws.ping > 120) embed.setColor("RED")


     interaction.reply({embeds:[embed]});
      
}
};