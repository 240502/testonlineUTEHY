import React from "react";

const postItem = React.createElement("div",
  {
    className: "post-item",
    color: "#fff",
  },
  React.createElement("h2",{
    title:"Hoc React tai F8"

  },"Hoc ReactJS"),
  React.createElement("p",null,"ReactJS từ cơ bản đến nâng cao")

)

console.log(postItem)
function App() {
  return (
    <div className="App">
        <h1>Sang đẹp trai</h1>
        <a href="https://www.facebook.com/profile.php?id=100020967847527"></a>
        <p>
          Ngày sinh 21-05-2002 
         
        </p>
        <p>
            Sở thích: code
        </p>
        <p>
          Người yêu: Không có
        </p>
    </div>
  );
}

export default App;
