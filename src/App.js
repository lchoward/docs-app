// import logo from './logo.svg';
import './App.css';
import './index.css';
// import CommandBar from '@commandbar/stable';

function App() {
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