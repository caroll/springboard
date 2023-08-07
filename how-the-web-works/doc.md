# How the web works

## what is as HTTP?

It is the transfer protocol used to exchange information on the Internet, it's how computers (web servers) communicate.

## what is a URL?

It is an readable address or localization of a site or resource on the Internet.

## what is DNS?

Domain Name Servers are catalogs of web addresses that help us to reach out to the Internet (and other people to reach us), translating human readable URL to computer readable IP addresses.

## what is a query string?

Query strings are fragments of information we can add to URLs to provide extra information about our request.

## What are two HTTP verbs and how are they different?



## What is an HTTP request?

When you enter an URL on your browser and hit enter, the browser makes a request to the host server. It's like knocking on the door asking to see their content.

## What is an HTTP response?

When the host server answer with the HTML asked for, it's a HTTP response.

## What is an HTTP header? Give a couple examples of request and response headers you have seen.

The HTTP header let the browser/server send/receive more information with each HTTP request/response.

Examples:
* content language: language of the content that is being transmitted
* content type: if the content is text or code, or HTML
* expires: date limit to use said response, after that you'll need to make a new request
* origin: info about the request (host, port, etc)
* content encoding: describes the encoding used to compress the data
* user agent: sneak peak on the browser, OS and/or SW used to make the request

## What are the processes that happen when you type “http://somesite.com/some/page.html” into a browser?

Summary:
* browser sends request to the server
* server processes the request and send back the data
* browser renders the content

A bit longer:
* browser asks the DNS for the IP address of the URL (human readable address to computer readable adress)
* browser sends the HTTP request to the IP address
* the server sends back a HTTP response
* browser renders the initial content
* browser sends additional HTTP requests made after the initial page load, like images, 3rd party scripts, css, etc.

The list could be hundred points if we wanted to list all the steps in between, like details about the protocol layers and what each one does with your request, encryption, firewalls, routes, balance loaders, etc.