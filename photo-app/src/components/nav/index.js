import React from "react";


function Nav() {

  const  categories = [
    { name: 'Challenges', description: 'Homeworks completed during bootcamp' },
    { name: 'Projects', description: 'Full-stack projects completed during bootcamp' },
    { name: 'other', description: 'Unguided projects' },
  ];

  const handleClick = (item) => {
    console.log(item);
    return item;
  };

  return (
    <header className="flex-row px-1">
      <h2>
        <a data-testid="link" href="/">
          <span role="img" aria-label="camera"> 📸</span> Oh Snap!
        </a>
      </h2>
      <nav>
        <ul className="flex-row">
          <li className="mx-2">
            <a data-testid="about" href="#about" onClick={() => handleClick("About")}>
              About me
            </a>
          </li>
          <li className={"mx-2"}>
            <span onClick={() => handleClick('Contact')}>
              Contact
            </span>
          </li>
          {
            categories.map((category) => (
              <li className="mx-1" key={category.name} >
                 <span onClick={() => categorySelected(category.name)} >
                    {category.name}
                </span>
            </li>
            ))
          }
        </ul>
      </nav>
    </header>
  );
}

export default Nav;