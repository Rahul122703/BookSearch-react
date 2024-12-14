// import ReactDom from "react-dom";
// import "./index.css";
//------(1)------->SINGLE COMPONENT<-----------
// 1. Always return single Element
// 2. close the Element
// 3. Make sure that the element is formatted
// 4. Use camelCase for html attributes
// 5. use className instead of class
// 6. Capitalize all the component names

// function Rahul() {
//   return (
//     <div>
//       <h1>THIS IS FIRST COMPONENT</h1>
//     </div>
//   );
// }

// // ReactDom.render(<Rahul />, document.getElementById("root"));

// //------(2)------->NESTED COMPONENT<-----------

// function Book() {
//   return (
//     <article>
//       <BookImage />
//       <BookName />
//       <BookPrice />
//       <hr />
//     </article>
//   );
// }

// const BookImage = () => <h4>This is book image</h4>;

// const BookName = () => <h4>BookName</h4>;

// const BookPrice = () => <h4>BookPrice</h4>;

// const BookList = () => {
//   return (
//     <article>
//       <Book />
//       <Book />
//     </article>
//   );
// };

// ReactDom.render(<BookList />, document.getElementById("root"));

//------(3)------->CSS COMPONENT<-----------

// const BookImage = () => <img src="./src/logo192.png" alt="" />;

// const BookName = () => (
//   <h4 style={{ color: "#617d98", fontSize: "0.75rem" }}>React Mastery</h4> //inline css
// );

// const Author = () => <h4>Rahul Sharma</h4>;

// function Book() {
//   return (
//     <article className="book flex_center">
//       <BookImage />
//       <BookName />
//       <Author />
//     </article>
//   );
// }

// const BookList = () => {
//   return (
//     <article className="booklist">
//       <Book />
//       <Book />
//       <Book />
//       <Book />
//       <Book />
//       <Book />
//       <Book />
//       <Book />
//       <Book />
//       <Book />
//       <Book />
//       <Book />
//     </article>
//   );
// };

// ReactDom.render(<BookList />, document.getElementById("root"));

//------(4)------->PROPS<-----------

// const firstBook = {
//   title: "react-mastery",
//   img: "imageLink1",
//   author: "rahul sharma",
// };

// const secondBook = {
//   title: "flask-mastery",
//   img: "imageLink2",
//   author: "sharma rahul",
// };

// function BookComponent(props) {
//   return (
//     <div className="book flex_center">
//       <h4>{props.title}</h4>
//       <h4>{props.img}</h4>
//       <h4>{props.author}</h4>
//     </div>
//   );
// }

// function BookList() {
//   return (
//     <div className="booklist flex_center">
//       <BookComponent
//         title={firstBook.title}
//         img={firstBook.img}
//         author={firstBook.author}
//       />
//       <BookComponent
//         title={secondBook.title}
//         img={secondBook.img}
//         author={secondBook.author}
//       />
//     </div>
//   );
// }

// ReactDom.render(<BookList />, document.getElementById("root"));

//------(4)------->PROPER LIST<-----------
// very very very very important ----> MAKE SURE TO ADD KEY FOR UNIQUE IDENTIFICATION OF CHILDRENS

// import BookInfo from "./books.js";
// way 1
// const BookList = () => (
//   <div className="booklist flex_center">
//     {BookInfo.map((CurrentBook) => {
//       const { title, img, author ,id} = CurrentBook;
//       return (
//         <div className="book flex_center">
//           <h4>{title}</h4>
//           <h4>{img}</h4>
//           <h4>{author}</h4>
//         </div>
//       );
//     })}
//   </div>
// );

// way 2 (better way)

// const BookComponent = (props) => {
//   console.log(props);
//   const { title, img, author, num } = props;
//   return (
//     <div className="book flex_center">
//       <h4>{title}</h4>
//       <h4>{img}</h4>
//       <h4>{author}</h4>
//       <h3>{num + 1}</h3>
//     </div>
//   );
// };

// const BookList = () => {
//   return (
//     <div className="booklist flex_center">
//       {BookInfo.map((book, index) => {
//         return (
//           <BookComponent key={book.id} {...book} num={index} />
//         ); /* here {..book} is not understood */
//       })}
//     </div>
//   );
// };

// ReactDom.render(<BookList />, document.getElementById("root"));

//EVENT BASICS

// note:
// 1. react has many inbuild Events
// 2. Make sure to not to invoke the function in onclick attribute you can search on internet for this
// 3. Always use "./" while importing something from a js file which is not a node module
// 4. "rafc" is the short hand for creating a component
// 5. using "export variable name" will force to use the real variable name during import
// 6. using export default wont force to use the real name during import but only one default export is valid

// import BookInfo from "./books.js";

// const Book = (props) => {
//   const { title, img, author, num } = props;
//   const clickHandler = () => {
//     alert("HEY THIS IS A BUTTON IN REACT");
//   };
//   const consoleData = () => {
//     console.log(props);
//   };
//   return (
//     <div className="book flex_center" onMouseOver={consoleData}>
//       <h3 onClick={() => console.log(title)}> {title} </h3>
//       <h3>{img}</h3>
//       <h3>{author}</h3>
//       <h3>{num}</h3>
//       <button onClick={clickHandler}>BUTTON</button>
//     </div>
//   );
// };
// {
// }
// const BookList = () => {
//   return (
//     <div className="booklist flex_center">
//       {BookInfo.map((currentBook, index) => {
//         return <Book key={currentBook.id} {...currentBook} num={index + 1} />;
//       })}
//     </div>
//   );
// };

// ReactDom.render(<BookList />, document.getElementById("root"));

import React from "react";
import reactDom from "react-dom";
import './book.css';


