// import logo from './logo.svg';
import './App.css';
import './index.css';
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
  // window.CommandBar.boot("lch-feb", { friend: "false" }, { hmac: myHMAC });
  window.CommandBar.boot("lch-feb", { friend: "false" });

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
  
  window.CommandBar.addContext("cereals",
    [
      {label: "Trix", id: "1", icon:"🐰", promo: "true",},
      {label: "Lucky Charms", id: "2", icon: "🍀", promo: "true",},
      {label: "Apple Jacks", id: "3", icon: "🍎", promo: "false",}
    ]
  );
  const companies = [
    { label: "Dunder Mifflin", id: "1", slug: "dmiff", contact: "Michael Scott", icon: "📄" },
    { label: "Santa's Workshop", id: "2", slug: "theshop", contact: "Santa Claus", icon: "🎁" },
    { label: "Super Store", id: "3", slug: "super", contact: "Amy", icon: "🧼" },
    { label: "Team Rocket", id: "5", slug: "rocket", contact: "Jesse & James", icon: "🚀" },
    { label: "Theranos", id: "4", slug: "theranos", contact: "Elizabeth Holmes", icon: "🩸" },
  ];

  // add companies to CommandBar context
  window.CommandBar.addContext("companies", 
    companies
  );
  let team = ["Anita", "Zhou", "Rodger", "Terrence", "Mary"];
  window.CommandBar.addContext("team", team);
  window.CommandBar.addContext("records", ["Record 1", "Record 2", "Record 3"]);
  window.CommandBar.addContext("myWorkspaces", ["Personal", "Engineering", "Customer Success", "Operations"]);

  window.CommandBar.addCallback(
      "announceTeammate",
      (args) => {
        console.log(args);
        if (args.teammate._createdByCommandBar) {
          team.push(args.teammate.value);
          window.CommandBar.addContext("team", team)
          console.log(`${args.teammate.value} was successfully added to your team :)`);
        }
        // console.log(`You are now viewing ${args.value}'s profile!`);
      }
  );
  window.CommandBar.addCallback("inviteTeammates", (args) => {
    console.log(args);
    // alert(`${args.teammates[0]} and ${args.teammates[1]} have been added to the project`);
  });
  window.CommandBar.addCallback("displayTime", (args) => console.log(args.time));
  window.CommandBar.addCallback("Order cereal", (args) => alert(`We ordered ${args.quantity} boxes of ${args.cereal.label} for you!`));
  window.CommandBar.addCallback("reloadRecords", (args) => alert(`${args.record} reloaded successfully`));
  window.CommandBar.addCallback("Receive recommendation", (args) => alert(`Thank you for the recommendation. Our team will get back to you shortly!`));
  window.CommandBar.addCallback("Send recommendations", (args) => alert(`Thank you for the recommendation. Our team will get back to you shortly!`));
  window.CommandBar.addCallback("Say hi", (args) => console.log(`Hello, ${args.name}!`));
  window.CommandBar.addCallback("registerVolunteer", (args) => console.log(`Volunteer reigstered!`));
  // callback that does nothign
  window.CommandBar.addCallback("doNothing", (args) => console.log("did nothing"));

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
    window.open('/foo.com/page1/' + args.company.slug);
    window.open('/foo.com/page2/' + args.company.slug);
    window.open('/foo.com/page3/' + args.company.slug);
  });

  window.CommandBar.addContext("chores", ["Fix garage","Mow the lawn","Schedule dentist appointment","Bake chocolate chip cookies","Make dinner"]);
  window.CommandBar.addContext("mice", ["Remy","Auguste","Linguini"]);

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