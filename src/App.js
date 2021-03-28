import React from 'react';
import SelectList from './components/SelectList/SelectList';
import ClipList from './components/ClipList/ClipList';
import { observer } from 'mobx-react';
import { useStores } from './stores';
import './App.css';

const App = observer(() => {
  const { videoStore, selectStore } = useStores();

  return (
    <div className="App">
      <SelectList selectStore={selectStore} videoStore={videoStore} />
      <ClipList store={videoStore} />
    </div>
  );
});

export default App;
