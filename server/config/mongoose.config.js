const mongoose = require("mongoose");
const dbName = "products";
mongoose.connect(`mongodb://localhost/${dbName}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(()=>console.log(`Connected to ${dbName} DBZ!`))
.catch((err)=>console.log(err));