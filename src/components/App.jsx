import React from "react";
import Card from "./Card";
import contacts from "../contacts";
function createCard(contact) {
  return (
    <Card
      key={contact.id}
      name={contact.name}
      email={contact.email}
      tel={contact.phone}
      img={contact.imgURL}
    />
  );
}
//every card should have a unique "key"
//thats why we use id here, this is used for ordering purposes by the system
//if you want to access the unique key, create another prop
//for eg id ={contact.id}
//then you can access the id
function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      {contacts.map(createCard)}

      {/* /* <Card
        name={contacts[0].name}
        img={contacts[0].imgURL}
        tel={contacts[0].phone}
        email={contacts[0].email}
      />
      <Card
        name={contacts[1].name}
        img={contacts[1].imgURL}
        tel={contacts[1].phone}
        email={contacts[1].email}
      />
      <Card
        name={contacts[2].name}
        img={contacts[2].imgURL}
        tel={contacts[2].phone}
        email={contacts[2].email}
      /> */}
    </div>
  );
}

export default App;
