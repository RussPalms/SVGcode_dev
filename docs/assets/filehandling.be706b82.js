import{i as o,F as r}from"./index.a35fb20c.js";import{s as n}from"./vendor.78f84693.js";window.launchQueue.setConsumer(async e=>{if(!!e.files.length)for(const t of e.files){const i=await t.getFile();if(i.type.startsWith("image/")){const s=URL.createObjectURL(i);o.addEventListener("load",()=>{URL.revokeObjectURL(s)},{once:!0}),o.src=s,await n(r,t);return}}});
