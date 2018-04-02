// Communication between different functions
// for example you will have 3 isolated classes
// when method called from one class needs call method from another class

class A {
  callM() {
    console.log('Trigger call A');
  }
  listenM() {
    console.log('Trigger listen A');
  }
}

class B {
  callM() {
    console.log('Trigger call B');
  }
  listenM() {
    console.log('Trigger listen B');
  }
}

class C {
  callM() {
    console.log('Trigger call C');
  }
  listenM() {
    console.log('Trigger listen C');
  }
}

// here we describe relation and need say to what class we want communicate
const A_entity = new A();
const C_entity = new C();

A_entity.callM();
C_entity.callM();

// Trigger call A
// Trigger listen B
// Trigger call C
// Trigger listen B

