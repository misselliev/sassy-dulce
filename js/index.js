const createMainContainer = () => {
  let cont = document.getElementById('content');
  let main = document.createElement('div');
  main.id = 'main-container';
  main.classList = 'container';
  cont.appendChild(main);
};

class Section {
  setup(name, description) {
    let starter = document.getElementById('main-container');
    const title = document.createElement('h1');
    title.classList = 'title is-3 is-spaced';
    title.innerHTML = name;
    const subtitle = document.createElement('h2');
    subtitle.classList = 'subtitle is-5 is-spaced';
    subtitle.innerHTML = description;
    starter.appendChild(title);
    starter.appendChild(subtitle);
  }
}
const displayNewSection = (name, description) => {
  const newPage = new Section();
  newPage.setup(name, description);
};

// Rendering
createMainContainer();
displayNewSection('Fall 2020', 'Keep your best paw forward');
