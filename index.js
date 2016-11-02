var skbPack = require('skb');
var token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ODE5OWE2MDJmYjc0ZDAwMTFiZTg1NjQiLCJ1c2VybmFtZSI6ImhlbGxvQGFsZXhhbmRlcndlYi5ydSIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNDc4MDcyOTI5fQ.wjqB84OSh09V_HEVpho5GqUVS5X9rXnUBQt58kWSf_8';
var skb = new skbPack(token);

skb.taskHelloWorld('hellow skill-branch');