require("dotenv").config();

const config={
    app:{
        name:process.env.APP_NAME ||'My App',
        version:process.env.App_version||'1.0.0',
        Port:process.env.PORT || 8000,
        Node_Env:process.env.NODE_ENV


    }
}

console.log(config.app)
module.exports=config