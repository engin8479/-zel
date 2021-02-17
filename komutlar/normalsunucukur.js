const Discord = require('discord.js');

exports.run = async(client, message, args) => {
    if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('Yetkin yok!')
 
      message.guild.channels.cache.filter(kanalgg => {
        kanalgg.delete()
        message.guild.channels.create("🔊 Genel Sohbet 1", { type: 'text', reason: 'sunucukurma' }).then(engin => {
      const embed = new Discord.MessageEmbed()
      .setTitle(':warning: Sunucu kuralları! :warning: ')
      .setDescription(':one: Küfür argo vb. yasak! \n \n :two: Yetkililere etiket spamı yapmak gereksiz yere etiketlemek yasak! \n \n :three: Din, dil, ırk ayrımcılığı yapmak yasak! \n \n :four: Siyaset konuşmak yasak! \n \n :five: +18 paylaşım yapmak yasak! \n \n **Her şeyi biz buraya yazmak zorunda değiliz kendiniz ayırt edebilmelisiniz.** \n \n **Sunucuya giren herkes kuralları okumuş sayılır!**')
     .setColor('GREEN')
      engin.send(embed)
      })
    })
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'normal-sunucu-kur',

};
