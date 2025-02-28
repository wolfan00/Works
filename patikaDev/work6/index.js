const Koa = require('koa');
const app = new Koa();

// Middleware normally takes two parameters (ctx, next), ctx is the context for one request,
// next is a function that is invoked to execute the downstream middleware. It returns a Promise with a then function for running code after completion.

app.use(async (ctx, next) => {
    
    if(ctx.path =="/"){
        ctx.status=200
        ctx.response.type = "html";
    ctx.response.body = "<h1> İndex Sayfasına hoşgeldiniz.</h1>"
    }else if(ctx.path =="/about"){
        ctx.status=200
        ctx.response.type = "html";
    ctx.response.body = "<h1> Hakkında Sayfasına hoşgeldiniz.</h1>"
    }else if(ctx.path =="/contact"){
        ctx.status=200
        ctx.response.type = "html";
    ctx.response.body = "<h1> İletişim Sayfasına hoşgeldiniz.</h1>"
    }else{
        ctx.status=404
        ctx.response.type = "html";
    ctx.response.body = "404 not found"
    }
    
    await next();
  });

app.listen(3000);