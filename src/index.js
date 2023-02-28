import React from "react";
import ReactDOM from "react-dom";

ReactDOM.render(
  <div>
    <h1>My Contacts</h1>

    <h2>Beyonce</h2>
    <img
      src="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
      alt="avatar_img"
    />
    <p>+123 456 789</p>
    <p>b@beyonce.com</p>

    <h2>Jack Bauer</h2>
    <img
      src="https://pbs.twimg.com/profile_images/625247595825246208/X3XLea04_400x400.jpg"
      alt="avatar_img"
    />
    <p>+987 654 321</p>
    <p>jack@nowhere.com</p>

    <h2>Chuck Norris</h2>
    <img
      src="https://i.pinimg.com/originals/e3/94/47/e39447de921955826b1e498ccf9a39af.png"
      alt="avatar_img"
    />
    <p>+918 372 574</p>
    <p>gmail@chucknorris.com</p>
  </div>,
  document.getElementById("root")
);
/*

Now we can see here that
ekta component  i.e.
<h2>Beyonce</h2>
    <img
      src="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
      alt="avatar_img"
    />
    <p>+123 456 789</p>
    <p>b@beyonce.com</p> 
    3 bar repeat hocche with different name,img,tellephone,mail id diye
    so amra ekta component banabo i.e. card component 
    function Card() {
  return (
    <div>
      <h2>name</h2>
      <img src="img address" alt="avatar_img" />
      <p>tellephone no</p>
      <p>mail</p>
    </div>
  );
}

but ekhane ekta problem hocche je ei card component or function take jodi amra 3 bar call di
tahole 3 bar ei same naam ,mail show korbe i.e. same data
but amader toh lagbe custom data i.e. alada data

ei jonnoi props or properties r requirement porechilo 
amra ebare jokhun card component/fn take call debo
 <Card
      name="Bell"
      img="https://images.unsplash.com/photo-1568127335414-076e418412f0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=327&q=80"
      tell="+123 4569"
      mail="bell@.com"
    />
    tokhun erom bhabe likhbo 

    
    
    
    
    
    
    import React from "react";
import ReactDOM from "react-dom";

function Card(props) {
  return (
    <div>
      <h2>{props.name}</h2>
      <img src={props.img} alt="avatar_img" />
      <p>{props.tell}</p>
      <p>{props.mail}</p>
    </div>
  );
}

ReactDOM.render(
  <div>
    <h1>My Contacts</h1>
    <Card
      name="Beyonce"
      img="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
      tell="+123 456 789"
      mail="b@beyonce.com"
    />
    <Card
      name="Bell"
      img="https://images.unsplash.com/photo-1568127335414-076e418412f0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=327&q=80"
      tell="+123 4569"
      mail="bell@.com"
    />
    <Card
      name="football"
      img="https://images.unsplash.com/photo-1579952363873-27f3bade9f55?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80"
      tell="+699996969699"
      mail="football@.com"
    />
  </div>,
  document.getElementById("root")
);




*/
