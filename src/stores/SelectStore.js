import { makeAutoObservable, autorun, observable } from 'mobx';

class SelectStore {
  optionsToShow = [
    {
      id: 1,
      title: 'Late Night with Seth Myers',
      channel_id: 'UCVTyTA7-g9nopHeHbeuvpRA',
    },
    {
      id: 2,
      title: 'The Daily Show with Trevor Noah',
      channel_id: 'UCwWhs_6x42TyRM4Wstoq8HA',
    },
    {
      id: 3,
      title: 'The Late Show with Stephen Colbert',
      channel_id: 'UCMtFAi84ehTSYSE9XoHefig',
    },
  ];
  chosenOption = observable([]);

  constructor() {
    makeAutoObservable(this);
  }

  updateChosenShow(value) {
    if (!this.chosenOption.includes(value)) {
      this.chosenOption.push(value);
    }
  }

  dispatch = autorun(() => {
    console.log('totalChosenOption:', this.totalChosenOption);
  });

  get totalChosenOption() {
    return this.chosenOption.length;
  }
}

export default SelectStore;
