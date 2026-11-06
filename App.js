
    const parent=React.createElement('div',{id:'parent'},

      React.createElement('div',{id:'child'},

        [ React.createElement('h1',{},"i'm an h1 tag"),
          React.createElement('h2',{},"i am h2 tag")
        ]

      ),React.createElement('div',{id:'child'},

        [ React.createElement('h1',{},"i'm an h1 tag"),
          React.createElement('h2',{},"i am h2 tag")
        ]
      )
    );
    
    const root=ReactDOM.createRoot(document.querySelector('#root'));
    
    root.render(parent);
