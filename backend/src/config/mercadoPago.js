const MercadoPago = require('mercadopago');

module.exports = {
    async checkout(req, res){        
        //Essa instrução configura a lib do mercado pago para se comunicar usando suas credenciais
        //tipo um ''login', mas ao inves de usuario e senha usamos access_token
        MercadoPago.configure({

            //esse sandbox serve pra saber quando a cobrança deve ser feita de verdade ou não
            //ele define qual ambiente a aplicacao ta rodando
            //se sandbox for false, é pq ta em produção e ele vai cobrar mesmo
            sandbox: process.env.ENVIRONMENT === 'sandbox' ? true : false,

            //nunca deixa esses tokens privados expostos no código, deixa nas variaveis de ambiente
            //quando vc fizer deploy pra prod, vc configura no servidor direto
            //pra desenvolvimento, a gente usa a lib dotenv-safe q ela usa o arquivo .env na raiz como fonte
            access_token: process.env.MERCADO_PAGO_ACCESS_TOKEN
        });
        //cuidado na hora de mandar esse amount, manda sempre preço bem baixo
        //centavos ou 1R$
        //para passar na url usa:
        //http://localhost:6767/checkout?price=0.01&description=%22boneca%20infl%C3%A1vel%20de%20an%C3%A3o%20careca%22&quantity=2
        const {name, title, description, valueGol} = req.body;

        console.log(title +" " + description +" " + valueGol);
        
        //Create purchase item object template
        const purchaseOrder = {
           items: [
             {
                title: title + " - " + name,
                description : description,
                quantity: parseInt(1),
                currency_id: 'BRL',
                unit_price: parseFloat(valueGol)
              }
            ]
          }          
          //ah perai, nunca deixa essas coisa de configuracao do mercado pago hardcoded, deixa em variavel de ambiente, 
          // This code below is part of the frontend
          try {
            //Depois de configurado, aqui vc cria o pedido
            const preference = await MercadoPago.preferences.create(purchaseOrder);
            return res.json({url:`${preference.body.init_point}`});
          }catch(err){
            return res.json(err.message);
          }
    }
}