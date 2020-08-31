'use strict';

const mongoose = require('mongoose');
const Customer = mongoose.model('Customer');

exports.create = async (data) => {
  var customer = new Customer(data); // Pode passar valores separadamente ex. product.title = "teste"
  await customer.save();
};

exports.authenticate = async(data) => {
  const res = await Customer.findOne({
    email: data.email,
    password: data.password
  });
  return res;
};

exports.getById = async(id) => {
  const res = await Customer.findById(id);
  return res;
};
