// import logo from './logo.svg';
import "./App.css";
import "./index.css";
import React, { useState, useEffect } from 'react';
// import CommandBar from '@commandbar/stable';

function App() {
  // async function myBoot() {
  //   const myHMAC = "8ea22cd6db6f966deca6bbd0ec19bbc8d461cba79d985230590e1027d3e258c6";
  //   await window.CommandBar.boot("lch-feb", { friend: "false" }, { hmac: myHMAC });
  //   console.log("async boot");
  //   return;
  // }

  // myBoot();
  const myHMAC = "8ea22cd6db6f966deca6bbd0ec19bbc8d461cba79d985230590e1027d3e258c6";
  // window.CommandBar.boot("lch-mar", { friend: "false" }, { hmac: myHMAC });

  window.CommandBar.boot("luke-1", 
    { friend: "false", fiend: "true" }, 
    // { formFactor: { type: 'inline', rootElement: 'commandbar-inline-root'}, hmac: myHMAC }
    { hmac: myHMAC}
  );

  window.CommandBar.setSummonHotkey();

  // window.CommandBar.setFormFactor({ type: 'inline', rootElement: 'commandbar-inline-root' }); // for inline bar

  // const customHeader = ''
  const customHeader = () => `
    <div>
      <div class="CommandBarHeader">
        <div>
        <svg width="30" height="13" viewBox="0 0 59 26" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.2878 7.38529C17.2878 1.62826 14.0709 0.500244 8.5144 0.500244H0V25.1661H4.09426V14.2286H8.27209L13.5696 25.1661H18.2069L12.241 13.6771C14.2046 13.1006 17.2878 11.538 17.2878 7.38529ZM13.1936 7.38529C13.1936 11.2205 11.9903 13.0086 9.42516 13.0086H4.09426V1.74523H8.5144C11.7898 1.74523 13.1936 3.42472 13.1936 7.36023V7.38529Z" fill="white"></path><path d="M31.6103 7.11791C30.2989 7.09812 29.0052 7.42162 27.8576 8.05628C26.7099 8.69094 25.7481 9.61472 25.0678 10.7359V0.500244H20.9902V25.1661H25.0678V14.0531C25.0678 11.8973 27.1483 8.76397 30.407 8.76397C33.39 8.76397 33.9582 10.4351 33.9582 13.5601V25.1661H38.0692V14.1701C38.0692 9.42407 35.9301 7.11791 31.6103 7.11791Z" fill="white"></path><path d="M49.6416 7.11743C45.2382 7.11743 40.793 9.96671 40.793 16.3086C40.793 22.6506 45.2382 25.4998 49.6416 25.4998C54.045 25.4998 58.4902 22.7174 58.4902 16.3755C58.4902 10.0336 54.045 7.11743 49.6416 7.11743ZM54.1704 16.3086C54.1704 22.0406 53.5437 24.447 49.6416 24.447C46.4497 24.4805 45.1212 23.3441 45.1212 16.3755C45.1212 10.6352 45.7562 8.23709 49.6499 8.23709C52.8334 8.20367 54.1704 9.33168 54.1704 16.3755V16.3086Z" fill="white"></path></svg>
        </div>
      <div class="CBHeaderTitle">CommandBar</div>
      </div>
    </div>`
  const customFooter = "<div>Hello></div>"
  
  async function myAddCommand(details) {
    await window.CommandBar.addCommand(details);
    console.log("async addCommand");
    return;
  }

  useEffect(() => {
    // myAddCommand({
    //   category: 477,
    //   text: 'Remove teammates',
    //   name: 'remove_teammates',
    //   arguments: {
    //   teammates: {
    //     'type': 'context',
    //     'input_type': 'multi-select',
    //     'value': 'team',
    //     'order_key': 0,
    //     'label': 'Select the teammates you want to add'
    //   }
    //   },
    //   template: {
    //     type: 'callback',
    //     value: 'inviteTeammates',
    //     operation: 'blank',
    //   },
    //   icon: 'minuscircle',
    //   hotkey_mac: 'g x',
    //   hotkey_win: 'g x',
    // })

    // window.CommandBar.setCustomComponent("header", customHeader);
    // window.CommandBar.setCustomComponent("footer", customFooter);

    // Adding for Appcues
    window.Appcues.identify(
      "lucas-test", // unique, required
      {

        // recommended (optional) properties

        createdAt: 1566932390, // Unix timestamp of user signup date
        purchasedAd: 1566932395, // Unix timestamp of account purchase date (leave null if empty)
        planTier: "Standard", // Current user’s plan tier
        role: "Admin", // Current user’s role or permissions
        accountId: "1234", // Current user's account ID
        firstName: "John", // current user's first name

        // additional suggestions

        companyName: "Acme Corp", // Current user’s company name
        email: "john.doe@example.com", // Current user's email
        location: "90210", // a zipcode, state, or country enables location-based targeting
        version: "2.0", // users on different versions may need to see different content
        language: "spanish", // for multi-language applications
        renewalDate: 1577880288 // to remind users to renew
      }
    );
  }, []);

  // window.CommandBar.addContext("cereals", [
  //   { label: "Trix", id: "1", icon: "🐰", promo: "true", similarProducts: ["A", "B", "C"] },
  //   { label: "Lucky Charms", id: "2", icon: "🍀", promo: "true", similarProducts: ["A", "B", "D"] },
  //   { label: "Apple Jacks", id: "3", icon: "🍎", promo: "false", similarProducts: ["C", "D", "E"] },
  //   { label: "Fruity Pebbles", icon: "🍇", promo: "false", similarProducts: ["A", "B", "C"] },
  // ]);

  // cereals without icons
  window.CommandBar.addContext("cereals", [
    { label: "Trix", id: "1", promo: "true", similarProducts: ["A", "B", "C"] },
    { label: "Lucky Charms", id: "2", promo: "true", similarProducts: ["A", "B", "D"] },
    { label: "Apple Jacks", id: "3", promo: "false", similarProducts: ["C", "D", "E"] },
    { label: "Fruity Pebbles", promo: "false", similarProducts: ["A", "B", "C"] },
  ]);

  const companies = [
    {
      label: "Dunder Mifflin",
      id: "1",
      slug: "dmiff",
      contact: "Michael Scott",
      icon: '<svg width="96" height="96" viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M76 20V76H20V20H76ZM80.4 12H15.6C13.6 12 12 13.6 12 15.6V80.4C12 82 13.6 84 15.6 84H80.4C82 84 84 82 84 80.4V15.6C84 13.6 82 12 80.4 12V12ZM44 28H68V36H44V28ZM44 44H68V52H44V44ZM44 60H68V68H44V60ZM28 28H36V36H28V28ZM28 44H36V52H28V44ZM28 60H36V68H28V60Z" fill="black"/></svg>',
    },
    {
      label: "Santa's Workshop",
      id: "2",
      slug: "theshop",
      contact: "Santa Claus",
      icon: "🎁",
    },
    {
      label: "Super Store",
      id: "3",
      slug: "super",
      contact: "Amy",
      icon: "🧼",
    },
    {
      label: "Team Rocket",
      id: "5",
      slug: "rocket",
      contact: "Jesse & James",
      icon: "🚀",
      mission: 'To protect the world from devastation! To unite all peoples within our nation! To denounce the evils of truth and love! To extend our reach to the stars above!',
      stage: 'Prospect',
      number: '415-1962-030',
    },
    {
      label: "Theranos",
      id: "4",
      slug: "theranos",
      contact: "Elizabeth Holmes",
      icon: "🩸",
    },
  ];

  window.CommandBar.addRecords("companies", companies);

  // window.CommandBar.generateDetailPreview((rowdata, rowmetadata) => {
  //   if (rowmetadata.type === 'parameter' && rowmetadata.contextKey === 'companies')
  //     return `
  //     <h2>Company Summary</h2>
  //     <div class="cb-record-container">
  //       <div class="cb-info">
  //         <div class="cb-label-main">Main Contact(s)</div> 
  //         <div class="cb-value-main">${rowdata.contact}</div>
  //       </div>
  //       <div class="cb-info">
  //         <div class="cb-label-main">Phone Number</div>
  //         <div class="cb-value-main">${rowdata.number}</div>
  //       </div>
  //       <div class="cb-info">
  //         <div class="cb-label-main">Stage</div>
  //         <div class="cb-value-main">${rowdata.stage}</div>
  //       </div>
  //     </div>
  //     <div class="cb-value-sec">${rowdata.mission}</div>
  //     `;
  //   return;
  // });

  const integrations = [
    {
      label: "Github",
      id: 1,
      icon: '<svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.0001 0C6.71687 0 0 6.8768 0 15.3601C0 22.1466 4.29799 27.9043 10.258 29.9353C11.0077 30.0775 11.2829 29.6021 11.2829 29.1964C11.2829 28.8301 11.269 27.6201 11.2625 26.3367C7.08946 27.2658 6.2089 24.5244 6.2089 24.5244C5.52656 22.749 4.54341 22.2769 4.54341 22.2769C3.18245 21.3235 4.64599 21.3431 4.64599 21.3431C6.15227 21.4515 6.94539 22.926 6.94539 22.926C8.28325 25.2742 10.4545 24.5953 11.3105 24.2029C11.4451 23.2101 11.8338 22.5325 12.2628 22.1489C8.93107 21.7605 5.42869 20.4435 5.42869 14.5579C5.42869 12.8809 6.01466 11.5107 6.97421 10.435C6.81846 10.0481 6.30503 8.48587 7.11952 6.37012C7.11952 6.37012 8.37913 5.9573 11.2456 7.94459C12.4421 7.60426 13.7254 7.43359 15.0001 7.42774C16.2749 7.43359 17.5591 7.60426 18.7579 7.94459C21.6209 5.9573 22.8787 6.37012 22.8787 6.37012C23.6952 8.48587 23.1815 10.0481 23.0258 10.435C23.9876 11.5107 24.5696 12.8809 24.5696 14.5579C24.5696 20.4574 21.0605 21.7564 17.7203 22.1367C18.2583 22.6134 18.7377 23.5481 18.7377 24.9812C18.7377 27.0364 18.7203 28.6905 18.7203 29.1964C18.7203 29.6052 18.9904 30.0841 19.7507 29.9333C25.7075 27.8999 30 22.1443 30 15.3601C30 6.8768 23.2841 0 15.0001 0ZM5.61803 21.8808C5.585 21.9571 5.46775 21.98 5.36094 21.9276C5.25215 21.8775 5.19104 21.7735 5.22631 21.6969C5.25861 21.6183 5.3761 21.5965 5.48465 21.6491C5.59369 21.6992 5.65579 21.8043 5.61803 21.8808ZM6.35587 22.555C6.28434 22.6229 6.14449 22.5914 6.0496 22.484C5.95149 22.3769 5.9331 22.2337 6.00564 22.1648C6.07941 22.0969 6.21503 22.1287 6.3134 22.2358C6.41151 22.3441 6.43064 22.4863 6.35587 22.555ZM6.86206 23.4176C6.77015 23.4829 6.61987 23.4216 6.52697 23.285C6.43507 23.1485 6.43507 22.9846 6.52896 22.919C6.62211 22.8534 6.77015 22.9124 6.8643 23.048C6.95595 23.1869 6.95595 23.3507 6.86206 23.4176ZM7.71813 24.4165C7.63591 24.5094 7.46079 24.4845 7.33262 24.3578C7.20146 24.2339 7.16495 24.0582 7.24742 23.9653C7.33063 23.8722 7.50674 23.8984 7.63591 24.0241C7.76607 24.1477 7.80581 24.3247 7.71813 24.4165ZM8.82451 24.7538C8.78825 24.8741 8.61959 24.9288 8.44968 24.8777C8.28003 24.825 8.169 24.6841 8.20328 24.5625C8.23855 24.4414 8.40795 24.3845 8.5791 24.4391C8.7485 24.4915 8.85979 24.6314 8.82451 24.7538ZM10.0836 24.8968C10.0878 25.0235 9.94378 25.1286 9.76543 25.1308C9.58609 25.1349 9.44103 25.0324 9.43904 24.9078C9.43904 24.7798 9.57988 24.6758 9.75922 24.6727C9.93757 24.6692 10.0836 24.7709 10.0836 24.8968ZM11.3206 24.8483C11.3419 24.9719 11.218 25.0988 11.0409 25.1327C10.8667 25.1652 10.7055 25.0889 10.6834 24.9663C10.6618 24.8396 10.788 24.7127 10.9619 24.6799C11.1392 24.6484 11.298 24.7226 11.3206 24.8483Z" fill="#161614"/></svg>',
    },
    {
      label: "Slack",
      id: 2,
      icon: '<svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0)"><path fill-rule="evenodd" clip-rule="evenodd" d="M10.9991 0C9.34072 0.00122324 7.99858 1.34434 7.99981 2.99939C7.99858 4.65443 9.34194 5.99755 11.0003 5.99878H14.0008V3.00061C14.002 1.34557 12.6587 0.00244648 10.9991 0C11.0003 0 11.0003 0 10.9991 0V0ZM10.9991 8H3.00022C1.34186 8.00122 -0.001497 9.34434 -0.000271309 10.9994C-0.00272269 12.6544 1.34063 13.9976 2.99899 14H10.9991C12.6574 13.9988 14.0008 12.6557 13.9996 11.0006C14.0008 9.34434 12.6574 8.00122 10.9991 8V8Z" fill="#36C5F0"/><path fill-rule="evenodd" clip-rule="evenodd" d="M30.0001 10.9994C30.0013 9.34434 28.6579 8.00122 26.9996 8C25.3412 8.00122 23.9978 9.34434 23.9991 10.9994V14H26.9996C28.6579 13.9988 30.0013 12.6557 30.0001 10.9994ZM21.9999 10.9994V2.99939C22.0012 1.34557 20.659 0.00244648 19.0006 0C17.3423 0.00122324 15.9989 1.34434 16.0001 2.99939V10.9994C15.9977 12.6544 17.341 13.9976 18.9994 14C20.6578 13.9988 22.0012 12.6557 21.9999 10.9994Z" fill="#2EB67D"/><path fill-rule="evenodd" clip-rule="evenodd" d="M18.9994 30C20.6578 29.9988 22.0011 28.6557 21.9999 27.0006C22.0011 25.3456 20.6578 24.0024 18.9994 24.0012H15.9989V27.0006C15.9977 28.6544 17.341 29.9976 18.9994 30ZM18.9994 21.9988H26.9995C28.6578 21.9976 30.0012 20.6544 30 18.9994C30.0024 17.3443 28.6591 16.0012 27.0007 15.9988H19.0006C17.3423 16 15.9989 17.3431 16.0001 18.9982C15.9989 20.6544 17.341 21.9976 18.9994 21.9988V21.9988Z" fill="#ECB22E"/><path fill-rule="evenodd" clip-rule="evenodd" d="M-7.54559e-05 18.9993C-0.00130115 20.6544 1.34206 21.9975 3.00041 21.9987C4.65877 21.9975 6.00213 20.6544 6.0009 18.9993V15.9999H3.00041C1.34206 16.0011 -0.00130115 17.3442 -7.54559e-05 18.9993ZM8.00001 18.9993V26.9994C7.99755 28.6544 9.34091 29.9976 10.9993 30C12.6576 29.9988 14.001 28.6556 13.9998 27.0006V19.0017C14.0022 17.3467 12.6589 16.0035 11.0005 16.0011C9.34091 16.0011 7.99878 17.3442 8.00001 18.9993C8.00001 19.0005 8.00001 18.9993 8.00001 18.9993Z" fill="#E01E5A"/></g><defs><clipPath id="clip0"><rect width="30" height="30" fill="white"/></clipPath></defs></svg>',
    },
    {
      label: "Google Drive",
      id: 3,
      icon: '<svg viewBox="0 0 87.3 78" xmlns="http://www.w3.org/2000/svg"><path d="m6.6 66.85 3.85 6.65c.8 1.4 1.95 2.5 3.3 3.3l13.75-23.8h-27.5c0 1.55.4 3.1 1.2 4.5z" fill="#0066da"/><path d="m43.65 25-13.75-23.8c-1.35.8-2.5 1.9-3.3 3.3l-25.4 44a9.06 9.06 0 0 0 -1.2 4.5h27.5z" fill="#00ac47"/><path d="m73.55 76.8c1.35-.8 2.5-1.9 3.3-3.3l1.6-2.75 7.65-13.25c.8-1.4 1.2-2.95 1.2-4.5h-27.502l5.852 11.5z" fill="#ea4335"/><path d="m43.65 25 13.75-23.8c-1.35-.8-2.9-1.2-4.5-1.2h-18.5c-1.6 0-3.15.45-4.5 1.2z" fill="#00832d"/><path d="m59.8 53h-32.3l-13.75 23.8c1.35.8 2.9 1.2 4.5 1.2h50.8c1.6 0 3.15-.45 4.5-1.2z" fill="#2684fc"/><path d="m73.4 26.5-12.7-22c-.8-1.4-1.95-2.5-3.3-3.3l-13.75 23.8 16.15 28h27.45c0-1.55-.4-3.1-1.2-4.5z" fill="#ffba00"/></svg>',
    },
  ];

  const groups = [
    {
      icon: 'https://website-assets-fw.freshworks.com/attachments/cjqf1fpz604sbq2fzb1z9jczx-freshdesk-2x.one-half.png',
      label: 'Guatemala',
      description: 'Travel to the beautiful mountains',
    },
    {
      icon: 'https://website-assets-fw.freshworks.com/attachments/ck67gqxbc0h5w8efzldzi5rie-fmarketer.one-half.png',
      label: 'India',
      description: 'The cities and nature are incredible',
    },
    {
      icon: 'https://website-assets-fw.freshworks.com/attachments/cjqf13n6t04fnpxfzyvbtvhg7-freshchat-2x.one-half.png',
      label: 'Freshchat',
      description: 'Communicate in context and collaborate with teams…',
    },
    {
      icon: 'https://website-assets-fw.freshworks.com/attachments/cjqf69pt500egeufzgtg3tgrd-freshconnect-2x.one-half.png',
      label: 'Freshconnect',
      description: 'Make and receive calls, automatically log and record…',
    },
    {
      icon: 'https://website-assets-fw.freshworks.com/attachments/cjqf1c9rz04k7pxfzldie19pk-freshcaller-2x.one-half.png',
      label: 'Freshcaller',
      description: 'Book appointments, schedule meetings and calls on your…',
    },
  ];

  const payees = [
    { id: 1, label: 'AWS', account: 'International (IN)', currency: 'USD',
      totalPayment: 2704, openBills: 0, unpaidBills: 0, 
      type: 'Business', phone: '+91 22 2680 0485', email: 'billing@barrierbreak.com',
      address: '1234 Example Address', City: 'Mumbai', Region: 'Mumbai', Zip: '400063', Country: 'IN'
    },
    { id: 1, label: 'Google', account: 'International (IN)', currency: 'USD',
      totalPayment: 2704, openBills: 0, unpaidBills: 0, 
      type: 'Business', phone: '+91 22 2680 0485', email: 'billing@barrierbreak.com',
      address: '1234 Example Address', City: 'Mumbai', Region: 'Mumbai', Zip: '400063', Country: 'IN'
    },
    { id: 1, label: 'CleanShot', account: 'International (IN)', currency: 'USD',
      totalPayment: 2704, openBills: 0, unpaidBills: 0, 
      type: 'Business', phone: '+91 22 2680 0485', email: 'billing@barrierbreak.com',
      address: '1234 Example Address', City: 'Mumbai', Region: 'Mumbai', Zip: '400063', Country: 'IN'
    },
    { id: 1, label: 'Barrier Break', account: '🇮🇳 International (IN)', currency: 'USD',
      totalPayment: '$2704.00', openBills: 0, unpaidBills: 0, 
      type: 'Business', phone: '+91 22 2680 0485', email: 'billing@barrierbreak.com',
      address: '1234 Example Address', City: 'Mumbai', Region: 'Mumbai', Zip: '400063', Country: 'IN'
    },
    { id: 1, label: 'Theranos', account: 'International (IN)', currency: 'USD',
      totalPayment: 2704, openBills: 0, unpaidBills: 0, 
      type: 'Business', phone: '+91 22 2680 0485', email: 'billing@barrierbreak.com',
      address: '1234 Example Address', City: 'Mumbai', Region: 'Mumbai', Zip: '400063', Country: 'IN'
    },
    { id: 1, label: 'Juicero', account: 'International (IN)', currency: 'USD',
      totalPayment: 2704, openBills: 0, unpaidBills: 0, 
      type: 'Business', phone: '+91 22 2680 0485', email: 'billing@barrierbreak.com',
      address: '1234 Example Address', City: 'Mumbai', Region: 'Mumbai', Zip: '400063', Country: 'IN'
    },
    { id: 1, label: 'Dunder Mifflin', account: 'International (IN)', currency: 'USD',
      totalPayment: 2704, openBills: 0, unpaidBills: 0, 
      type: 'Business', phone: '+91 22 2680 0485', email: 'billing@barrierbreak.com',
      address: '1234 Example Address', City: 'Mumbai', Region: 'Mumbai', Zip: '400063', Country: 'IN'
    },
    { id: 1, label: 'Doordash', account: 'International (IN)', currency: 'USD',
      totalPayment: 2704, openBills: 0, unpaidBills: 0, 
      type: 'Business', phone: '+91 22 2680 0485', email: 'billing@barrierbreak.com',
      address: '1234 Example Address', City: 'Mumbai', Region: 'Mumbai', Zip: '400063', Country: 'IN'
    },
  ];

  window.CommandBar.addRecords('payees', payees);
  // window.CommandBar.generateDetailPreview((rowdata, rowmetadata) => {
  //   if (rowmetadata.type === 'parameter' && rowmetadata.contextKey === 'payees')
  //     return `
  //     <h2>Summary</h2>
  //     <div class="cb-record-container">
  //       <div class="cb-info">
  //         <div class="cb-label-main">Total payments</div> 
  //         <div class="cb-value-main">${rowdata.totalPayment}</div>
  //       </div>
  //       <div class="cb-info">
  //         <div class="cb-label-main">Open bills</div>
  //         <div class="cb-value-main">${rowdata.openBills}</div>
  //       </div>
  //       <div class="cb-info">
  //         <div class="cb-label-main">Unpaid bills</div>
  //         <div class="cb-value-main">${rowdata.unpaidBills}</div>
  //       </div>
  //     </div>
  //     <div class="cb-record-container">
  //       <div class="cb-info">
  //         <div class="cb-label-main">Account type</div> 
  //         <div class="cb-value-sec">${rowdata.account}</div>
  //       </div>
  //       <div class="cb-info">
  //         <div class="cb-label-main">Currency</div> 
  //         <div class="cb-value-sec">${rowdata.currency}</div>
  //       </div>
  //     </div>
  //     <h2>Other Details</h2>
  //     <div class="cb-record-container">
  //       <div class="cb-info">
  //         <div class="cb-label-main">Type</div>
  //         <div class="cb-value-sec">${rowdata.type}</div>
  //       </div>
  //       <div class="cb-info">
  //         <div class="cb-label-main">Phone</div>
  //         <div class="cb-value-sec">${rowdata.phone}</div>
  //       </div>
  //       <div class="cb-info">
  //         <div class="cb-label-main">Email</div>
  //         <div class="cb-value-sec">${rowdata.email}</div>
  //       </div>
  //     </div>
  //     `;
  //   return;
  // });

  // window.CommandBar.addRecords('groups', groups, { labelKey: 'label', descriptionKey: 'description' });

  const friends = [
    { label: "Pam", id: 1},
    { label: "Jim", id: 2},
    { label: "Michael", id: 3},
    { label: "Holly", id: 4},
    { label: "Kelly", id: 5},
    { label: "Ryan", id: 6},
  ];

  const users = [];

    for (let i = 1; i < 20; i++) {
      users.push({
        name: 'Group ' + i,
        id: i,
        icon: `https://picsum.photos/seed/${i}/300/200`,
        description: `Manage your groups here`,
      });
    }

    window.CommandBar.addRecords('users', users, {
      labelKey: 'name',
      descriptionKey: 'description',
    });

  // add user role type to CommandBar context
  window.CommandBar.addContext("role", "OrganizationMember");

  // add pet name to CommandBar context
  window.CommandBar.addContext("pet", "Ralph");

  // add friends to context
  window.CommandBar.addContext("friends", friends);

  // add companies to CommandBar context
  window.CommandBar.addContext("integrations", integrations);
  let team = ["Anita", "Zhou", "Rodger", "Terrence", "Mary"];
  window.CommandBar.addContext("team", team);
  window.CommandBar.addContext("records", ["Record 1", "Record 2", "Record 3"]);
  window.CommandBar.addContext("myWorkspaces", [
    "Personal",
    "Engineering",
    "Customer Success",
    "Operations",
  ]);

  window.CommandBar.addCallback("announceTeammate", (args) => {
    console.log(args);
    if (args.teammate._createdByCommandBar) {
      team.push(args.teammate.value);
      window.CommandBar.addContext("team", team);
      console.log(
        `${args.teammate.value} was successfully added to your team :)`
      );
    }
    // console.log(`You are now viewing ${args.value}'s profile!`);
  });
  window.CommandBar.addCallback("inviteTeammates", (args) => {
    console.log(args);
    // alert(`${args.teammates[0]} and ${args.teammates[1]} have been added to the project`);
  });
  window.CommandBar.addCallback("displayTime", (args) =>
    console.log(args.time)
  );
  window.CommandBar.addCallback("Order cereal", (args) =>
    alert(`We ordered ${args.quantity} boxes of ${args.cereal.label} for you!`)
  );
  window.CommandBar.addCallback("reloadRecords", (args) =>
    alert(`${args.record} reloaded successfully`)
  );
  window.CommandBar.addCallback("Receive recommendation", (args) =>
    alert(
      `Thank you for the recommendation. Our team will get back to you shortly!`
    )
  );
  window.CommandBar.addCallback("Send recommendations", (args) =>
    alert(
      `Thank you for the recommendation. Our team will get back to you shortly!`
    )
  );
  window.CommandBar.addCallback("Say hi", (args) =>
    console.log(`Hello, ${args.name}!`)
  );
  window.CommandBar.addCallback("registerVolunteer", (args) =>
    console.log(`Volunteer reigstered!`)
  );
  // callback that does nothign
  window.CommandBar.addCallback("doNothing", (args) =>
    console.log("did nothing")
  );

  // callbacks that interact with a web request command
  window.CommandBar.addCallback("webReqSuccess", (response, request) => {
    console.log("web request success")
    console.log(response)
    console.log(request)
    console.log(arguments)
  });

  window.CommandBar.addCallback("webReqError", (args, context) => {
    console.log("web request error")
    console.log(`args are: ${args}`)
    console.log(`context is: ${context}`)
  });

  const myHandler = (eventName, eventData) => {
    console.log({ eventName, eventData });
  };
  window.CommandBar.addEventHandler(myHandler);

  // window.CommandBar.addContext("sites", [], {
  //     searchOptions: {
  //       searchFunction: () => [
  //         { site: "pied-piper.commandbar.com", slug: "pied-piper-cb", deploy: "Deploys from GitHub", team: "Owned by CommandBar" },
  //         { site: "labs.commandbar.com", slug: "commandbar-com-labs", deploy: "Manual deploys", team: "Owned by CommandBar" },
  //         { site: "frames-editor-labs.commandbar.com", slug: "editor-labs", deploy: "Manual deploys", team: "Owned by CommandBar" },
  //         { site: "frames-commandbar-labs.commandbar.com", slug: "commandbar-labs", deploy: "Manual deploys", team: "Owned by CommandBar" },
  //         { site: "frames-proxy-labs.commandbar.com", slug: "proxy-labs", deploy: "Manual deploys", team: "Owned by CommandBar" },
  //         { site: "d.commandbar.com", slug: "commandbar-docs", deploy: "Manual deploys", team: "Owned by CommandBar" },
  //         { site: "frames-editor-prod.commandbar.com", slug: "editor-prod", deploy: "Manual deploys", team: "Owned by CommandBar" },
  //         { site: "app.commandbar.com", slug: "commandbar-com-prod", deploy: "Manual deploys", team: "Owned by CommandBar" },
  //         { site: "frames-commandbar-prod.commandbar.com", slug: "commandbar-prod", deploy: "Manual deploys", team: "Owned by CommandBar" },
  //         { site: "frames-proxy-prod.commandbar.com", slug: "proxy-prod", deploy: "Manual deploys", team: "Owned by CommandBar" },
  //         { site: "frames-editor-branch2.commandbar.com", slug: "editor-branch2", deploy: "Manual deploys", team: "Owned by CommandBar" },
  //         { site: "frames-commandbar-branch2.commandbar.com", slug: "commandbar-branch2", deploy: "Manual deploys", team: "Owned by CommandBar" },
  //         { site: "frames-proxy-branch2.commandbar.com", slug: "proxy-branch2", deploy: "Manual deploys", team: "Owned by CommandBar" },
  //         { site: "frames-editor-branch.commandbar.com", slug: "editor-branch", deploy: "Manual deploys", team: "Owned by CommandBar" },
  //         { site: "frames-commandbar-branch.commandbar.com", slug: "commandbar-branch", deploy: "Manual deploys", team: "Owned by CommandBar" },
  //       ]
  //     }
  //   });

  window.CommandBar.addCallback("startWorkflow", (args, context) => {
    window.open("/foo.com/page1/" + args.company.slug);
    window.open("/foo.com/page2/" + args.company.slug);
    window.open("/foo.com/page3/" + args.company.slug);
  });

  // context for misc stuff
  window.CommandBar.addContext("chores", [
    "Fix garage",
    "Mow the lawn",
    "Schedule dentist appointment",
    "Bake chocolate chip cookies",
    "Make dinner",
  ]);
  window.CommandBar.addContext("mice", ["Remy", "Auguste", "Linguini"]);

  // context for lazy vs eager loaders
  const catFacts = () => {
    const res = fetch("https://catfact.ninja/facts").then((response) =>
      response.json()
    );
    console.log("Load Facts");
    return res.data;
  };

  // window.CommandBar.addContext("catFacts", () => {
  //   return fetch('https://catfact.ninja/facts')
  //   .then(response => console.log('Loaded facts'))
  // });

  window.CommandBar.addContext("catFacts", []);
  window.CommandBar.addContext("catFacts", catFacts);

  // async function shortcuts() {
  //   let myShortcuts = await window.CommandBar.getShortcuts();
  //   console.log("logging shortcuts!");
  //   console.log(myShortcuts);
  //   return "success";
  // }

  // shortcuts();

  return (
    <div className="App">
      <header className="App-header">
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {/* Learn React */}
        </a>
      </header>
      <div id="commandbar-inline-root" style={{ height: 40, width: 375, }}></div>
    </div>
  );
}

export default App;
