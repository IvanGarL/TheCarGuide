'use strict';
var mongoose = require('mongoose');
const uri = "mongodb+srv://IvanGarL:Q6c3yN..rtpFDxw@cluster0-hq4ec.mongodb.net/theCarGuide?retryWrites=true&w=majority";

mongoose.connect(uri, { useNewUrlParser: true,
                        useCreateIndex: true, 
                        useUnifiedTopology: true,
                        useFindAndModify: false
                    });

module.exports.mongoose = mongoose; 