class Telephone {
  constructor(name) {
    this.name = name;
    this.phoneNumbers = [];
    this.observers = [];
  }

  addPhoneNumber(phoneNumber) {
    this.phoneNumbers.push(phoneNumber);
  }

  removePhoneNumber(phoneNumber) {
    this.phoneNumbers = this.phoneNumbers.filter((number) => {
      return number !== phoneNumber;
    });
  }

  dialPhoneNumber(phoneNumber) {
    let numberToDial = this.phoneNumbers.find((number) => {
      return number === phoneNumber;
    });

    if (!numberToDial) {
      console.warn('The is not a valid phone number.');
    } else {
      this.notifyObserver(phoneNumber);
    }
  }

  addObserver(func) {
    this.observers.push(func);
  }

  removeObserver(func) {
    this.observers = this.observers.filter((observer) => observer !== func);
  }

  notifyObserver(data) {
    this.observers.forEach((observer) => observer.notify(data));
  }
}

class Observer {
  constructor(notify) {
    this.notify = notify;
  }
}

const tel = new Telephone('Stephan');
tel.addPhoneNumber(1234567891);
tel.addPhoneNumber(2347023232);

const firstObserver = new Observer((number) => {
  console.log(number);
});

const secondObserver = new Observer((number) => {
  console.log(`Now Dialling ${number}`);
});

tel.addObserver(firstObserver);
tel.addObserver(secondObserver);

tel.dialPhoneNumber(2347023232);
