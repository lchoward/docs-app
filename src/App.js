// import logo from './logo.svg';
import "./App.css";
import "./index.css";
// import CommandBar from '@commandbar/stable';

function App() {
  // async function myBoot() {
  //   const myHMAC = "8ea22cd6db6f966deca6bbd0ec19bbc8d461cba79d985230590e1027d3e258c6";
  //   await window.CommandBar.boot("lch-feb", { friend: "false" }, { hmac: myHMAC });
  //   console.log("async boot");
  //   return;
  // }

  // myBoot();
  // const myHMAC = "8ea22cd6db6f966deca6bbd0ec19bbc8d461cba79d985230590e1027d3e258c6";
  // window.CommandBar.boot("lch-mar", { friend: "false" }, { hmac: myHMAC });
  window.CommandBar.boot("lch-mar", { friend: "false", fiend: "true" });

  // async function myAddCommand(details) {
  //   await window.CommandBar.addCommand(details);
  //   console.log("async addCommand");
  //   return;
  // }

  // myAddCommand({
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
  //   icon: 'minuscircle'
  // });

  window.CommandBar.addContext("cereals", [
    { label: "Trix", id: "1", icon: "🐰", promo: "true" },
    { label: "Lucky Charms", id: "2", icon: "🍀", promo: "true" },
    { label: "Apple Jacks", id: "3", icon: "🍎", promo: "false" },
    { label: "Fruity Pebbles", icon: "🍇", promo: "false" },
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
    },
    {
      label: "Theranos",
      id: "4",
      slug: "theranos",
      contact: "Elizabeth Holmes",
      icon: "🩸",
    },
  ];

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

  // add user role type to CommandBar context
  window.CommandBar.addContext("role", "OrganizationMember");

  // add pet name to CommandBar context
  window.CommandBar.addContext("pet", "Ralph");

  // add companies to CommandBar context
  window.CommandBar.addContext("companies", companies);
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

  async function shortcuts() {
    let myShortcuts = await window.CommandBar.getShortcuts();
    console.log("logging shortcuts!");
    console.log(myShortcuts);
    return "success";
  }

  shortcuts();

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
    </div>
  );
}

export default App;
