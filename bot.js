const { Telegraf, Markup } = require('telegraf')
const bot=new Telegraf("5803362552:AAEqtKjbGNfIailrUXtxrHZXEmj6Yv9mv9I")
const PROVIDER_TOKEN="284685063:TEST:NmU4NzRhMmUyNGI4";

bot.on('inline_query', (ctx) => {
  const inlineKeyboard = {
    inline_keyboard: [
      [
        {
          text: 'Launch Web App',
          url: 'https://testingbot-psi.vercel.app/'
        }
      ]
    ]
  };

  ctx.answerInlineQuery(
    console.log('hhhe')
    [
    {
      type: 'article',
      id: '1',
      title: 'Launch Web App',
      input_message_content: { message_text: 'Click the button to launch the web app!' },
      reply_markup: inlineKeyboard
    }
  ]);
});

bot.launch();





// bot.start((ctx)=>{
//     ctx.reply(`Welcome ${ctx.from.first_name + ctx.from.last_name}`,{
//         reply_markup:{
//             keyboard:[
//                 [{text:'Order',web_app:{url:'https://testingbot-psi.vercel.app/'}}]
//             ],
//         }
//     })
// })


// const getInvoice = (id) => {
//     const invoice = {
//       chat_id: id, // Unique identifier of the target chat or username of the target channel
//       provider_token: PROVIDER_TOKEN, // token issued via bot @SberbankPaymentBot
//       //start_parameter: 'get_access', // Unique parameter for deep links. If you leave this field blank, forwarded copies of the forwarded message will have a Pay button that allows multiple users to pay directly from the forwarded message using the same account. If not empty, redirected copies of the sent message will have a URL button with a deep link to the bot (instead of a payment button) with a value used as an initial parameter.
//       title: 'InvoiceTitle', // Product name, 1-32 characters
//       description: 'InvoiceDescription', // Product description, 1-255 characters
//       currency: 'USD', // ISO 4217 Three-Letter Currency Code
//       prices: [{ label: 'Invoice Title', amount: 100 * 200 }], // Price breakdown, serialized list of components in JSON format 100 kopecks * 100 = 100 rubles
//       photo_url:"https://play-lh.googleusercontent.com/NuJSG_bIoce6kvvtJnULAf34_Rsa1j-HDEt4MWTOrL_3XA51QH9qOQR5UmAYxPI96jA",
//       payload: { // The payload of the invoice, as determined by the bot, 1-128 bytes. This will not be visible to the user, use it for your internal processes.
//         unique_id: `${id}_${Number(new Date())}`,
//         provider_token: PROVIDER_TOKEN 
//       }
//     }
  
//     return invoice
//   }

 
//   bot.use(Telegraf.log())
 
  
//   bot.hears('pay', (ctx) => {  // this is a handler for a specific text, in this case it is "pay"
//     return ctx.replyWithInvoice(getInvoice(ctx.from.id)) //  replyWithInvoice method for invoicing 
//   })
//             bot.command('buy', ({ replyWithInvoice }) => replyWithInvoice(invoice, replyOptions))
//             bot.on('pre_checkout_query', (ctx) => ctx.answerPreCheckoutQuery(true)) // response to a preliminary request for payment
//             bot.on('successful_payment', async (ctx, next) => { // reply in case of positive payment
//             await ctx.reply('SuccessfulPayment')
//             })  
// bot.launch() 

  
  
  