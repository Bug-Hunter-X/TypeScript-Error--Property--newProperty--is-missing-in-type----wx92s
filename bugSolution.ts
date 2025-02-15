function printObject(obj: any): void {
  if(obj && "newProperty" in obj){
    console.log(obj.newProperty);
  }
  console.log(obj);
}

interface MyObject2 {
  name: string;
  age: number;
  address: {
    street: string;
    city: string;
  };
  newProperty?:string
}

const myObject3: MyObject2 = {
  name: "John Doe",
  age: 30,
  address: {
    street: "123 Main St",
    city: "Anytown",
  },
};

printObject(myObject3); //This will work fine

const myObject4: MyObject2 = {
  name: "John Doe",
  age: 30,
  address: {
    street: "123 Main St",
    city: "Anytown",
  },
  newProperty:"new value" //we need to add this property for it to work
};

printObject(myObject4); //This will work fine

//However, if we try to use myObject3 without the newProperty it will throw an error

const myObject5: MyObject2 = {
  name: "John Doe",
  age: 30,
  address: {
    street: "123 Main St",
    city: "Anytown",
  },
};

printObject(myObject5); //this will not throw an error because we added a check for newProperty 