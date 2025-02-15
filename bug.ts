function printObject(obj: any): void {
  console.log(obj);
}

const myObject = {
  name: "John Doe",
  age: 30,
  address: {
    street: "123 Main St",
    city: "Anytown",
  },
};

printObject(myObject); //This will work fine

//But if we add a new optional property to myObject

interface MyObject {
  name: string;
  age: number;
  address?: {
    street: string;
    city: string;
  };
}

const myObject2:MyObject = {
  name: "John Doe",
  age: 30,
};

printObject(myObject2); // This will also work fine

//However if we add a new required property to myObject, it will break

interface MyObject2 {
  name: string;
  age: number;
  address: {
    street: string;
    city: string;
  };
  newProperty:string //this is a new required property
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

printObject(myObject5); //this will throw an error because newProperty is missing