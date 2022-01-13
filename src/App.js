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