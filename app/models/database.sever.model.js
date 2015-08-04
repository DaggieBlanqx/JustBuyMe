
'use strict';


var mongoose = require('mongoose'),
	Schema = mongoose.Schema;
	
var CustomerSchema = new mongoose.Schema({
    customer_id: mongoose.Schema.ObjectId,
    customer_name : [{first: String, last: String}],
    contact_email: String,
    twitter: [{t_id: String, twitter_screen_name: String}],
    facebook: [{fb_id: String}],
    credit_card: [{cc_num: String, expiry_month: String, expiry_year: String, security_code: String}],
    password: String

});

var PostSchema = new mongoose.Schema({
    post_id: mongoose.Schema.ObjectId,
    merchant_id: mongoose.Schema.ObjectId,
    product_id: mongoose.Schema.ObjectId,
    description: String,
    tweet_id: String,
    facebook_post_id: String
});

var PurchaseSchema = new mongoose.Schema({
        timestamp: Date,
        customer_id: mongoose.Schema.ObjectId,
        post_id: mongoose.Schema.ObjectId
});


        var customerModel = mongoose.model('customer', CustomerSchema);
        var postModel = mongoose.model('post', PostSchema);
        var purchaseModel = mongoose.model('purchase', PurchaseSchema)
