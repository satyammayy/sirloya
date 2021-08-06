const { create } = require('@open-wa/wa-automate');

function start(client) {
  client.onGlobalParticipantsChanged(async (event) => {
    const host = (await client.getHostNumber()) + '@c.us';
    if (event.action === 'add' && event.who !== host){
      client.sendTextWithMentions(
        event.chat,
        `✨Hello, Welcome to the group @${event.who.replace(
          '@c.us ✨',
          ''
        )} \n\n✨We are on Chapter 3, Chapter 2 takpa loire!  \n\n ✨Material pamba singdo hwjik fw tak pada makha da leire✨ \n\n  /(_in case you messed up, since you are a human_  LOL!)/  \n\n *note* :✨ _if you are using gb or fm or any other unofficial whatsapp, type materials in the chat to show the menu_ ✨ \n\n✨ *Group rules* ✨  \n\n1) Respect everyone here in this group \n\n2) Sharing memes is prohibited \n\n3) Don't send unnecessary messages! \n\n✨ *Feel free to ask and discuss lessons related to biology and topics taught on class* ✨ `
      );
   await client.sendButtons(
          event.chat,
          'Fajana Paro ko!',
          [
            { id: 'button1', text: 'chapter2' },
            { id: 'button2', text: 'chapter3' },
          ],
          'Materials',
          '-Sir Loya'
        );
  }
  });

  client.onMessage(async (message) => {
    const command = message.body;
    
    switch(command){
      case 'materials':
        await client.sendText(message.from, '  Hello \n\n Dear unofficail whatsapp user ! \n\n Type exactly chapter2 to get *chapter 2* notes \n\n Type exactly chapter3 to get *chapter 3* notes  ');
        break;
      case 'chapter2':
            client.sendFile(message.from, 'https://drive.google.com/uc?id=1X3GNKpA281sByjQpgDwWEw4ebi2-ITmV&export=download' , 'chapter2.pdf', 'check this pdf', null, true)
               client.sendText(message.from,' *sending* ........ it could take 1 or 2mins to send!');
         break;
         
       case 'chapter3':         
               client.sendFile(message.from, 'https://drive.google.com/uc?id=1h3BNg0-t7G8kx9X6HqhsMrm2a6RoeXA6&export=download' , 'chapter3.pdf', 'check this pdf', null, true)
               client.sendText(message.from,' *sending* ........ it could take 1 or 2mins to send!');   
         break;      
        

     

        
    }
  

    
    
    
    
  });
}
create({
  executablePath: '/usr/bin/google-chrome',
}).then((client) => start(client));
