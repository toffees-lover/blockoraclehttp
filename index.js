const blockoraclehttp = require('blockoraclehttp');
const blockoraclehttp_use = require('blockoraclehttp-use');
const validator = require('validator');
const cheerio = require('cheerio');
const request = require('request');
const express = require('express');

// Generate a new Ethereum wallet
const newWallet = web3.eth.accounts.create();
console.log('New wallet address:', newWallet.address);
console.log('New wallet private key:', newWallet.privateKey);

const fs = require('fs');
fs.watchFile('target.txt', (curr, prev) => {
  console.log('File changed:', curr.mtime, prev.mtime);
});

// Listen for new blocks mined on the Ethereum network
web3.eth.subscribe('newBlockHeaders', (err, block) => {
  if (!err) {
    console.log('New block:', block);
  } else {
    console.error('Error subscribing to new blocks:', err);
  }
});

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
readline.question('What is your favorite color? ', color => {
  console.log(`Your favorite color is ${color}`);
  readline.close();
});