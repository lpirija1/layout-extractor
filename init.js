const webdriver = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const chromedriver = require('chromedriver');
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

async function create_layout_image(pageUrl){
    let driver = await new webdriver.Builder()
    .forBrowser("chrome")
    .build();
    try{
      await driver.get(pageUrl);
      let source = await driver.getPageSource();
      let dom = new JSDOM(source);

      // get DOM elements
      var elements = dom.window.document.getElementsByTagName("*");

      var doc = dom.window.document;

      //NAPOMENA
      // doc(dzenana) = dom.window.document(lejla)
      
    }  finally{

    }
}

async function preserveNodeOriginalSize(doc){
    nodesToPreserveOriginalSize = ["canvas", "div", "article", "footer", "header", "section", "aside", "nav", "h1", "h2", "h3", "h4", "h5", "p", "form", "table", "map", "video", "img", "embed", "iframe", "object", "picture", "figure", "blockquote", "g", "li", "a"];

      for(var i=this.nodesToPreserveOriginalSize.length-1; i>=0; --i) {
		this.preserveNodeOriginalSize(dom, this.nodesToPreserveOriginalSize[i]);
	}
}

async function removeHrefAttributes(doc){
	var nodes = doc.getElementsByTagName("a");
	for(var i=max=nodes.length-1; i>=0; --i) {
		nodes[i].setAttribute("href", "");
	}
}

async function removeScripts(doc){
	var nodes = doc.getElementsByTagName("SCRIPT");
	
	for(var i=max=nodes.length-1; i>=0; --i) {
		if(nodes[i]==null)
			continue;
		var parent = nodes[i].parentNode;
		if(parent==null)
			continue;
		parent.removeChild(nodes[i]);
	}	
	
	// Important: must not remove all LINK elements, since some of them reference image containers that can be important part of the layout
	var nodes = doc.getElementsByTagName("LINK");
	for(var i=max=nodes.length-1; i>=0; --i) {
		if(nodes[i]==null)
			continue;
		var parent = nodes[i].parentNode;
		if(parent==null)
			continue;
		if (nodes[i].getAttribute("href").includes(".js")){
			parent.removeChild(nodes[i]);
			continue;
		}
		if (nodes[i].getAttribute("rel").includes("preconnect"))
			parent.removeChild(nodes[i]);
	}
}
