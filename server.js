const express = require('express');
const http = require('http');
const webdriver = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const chromedriver = require('chromedriver');
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

const app = express();

app.get('/firstPage.html',function(req,res){
    res.sendFile(path.join(__dirname+'/firstPage.html'));
  });
  app.get('/firstPage.css',function(req,res){
    res.sendFile(path.join(__dirname+'/firstPage.css'));
  });
  app.get('/loading.js',function(req,res){
    res.sendFile(path.join(__dirname+'/loading.js'));
  });
  app.get('/background.jpg',function(req,res){
    res.sendFile(path.join(__dirname+'/background.jpg'));
  });

  app.get('/:url/:browser', (req,res) => {
    loadPage("https://" + req.params.url, req.params.browser).then(value =>{
  })});

app.listen(3000);

async function loadPage(pageURL, browser) {   
    let driver = await new webdriver.Builder()
    .forBrowser(browser)
    .build();
    try{
      await driver.get(pageURL);
      let source = await driver.getPageSource();

      console.log(source);
      
      let dom = new JSDOM(source);

      // get DOM elements
      var elements = dom.window.document.getElementsByTagName("*");

      var doc = dom.window.document;

      // sredjivanje



      
      //NAPOMENA
      
    }  finally{

    }
}
     