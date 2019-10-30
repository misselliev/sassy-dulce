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
    let hero = Object.assign(document.createElement('div'), {
      className: 'hero has-text-centered'
    });
    const title = document.createElement('h1');
    title.classList = 'title is-3 is-spaced space-top';
    title.innerHTML = name;
    const subtitle = document.createElement('h2');
    subtitle.classList = 'subtitle is-5 is-spaced space-bottom';
    subtitle.innerHTML = description;
    starter.appendChild(hero);
    hero.appendChild(title);
    hero.appendChild(subtitle);
  }
  content() {
    let counter = 0;
    const container = Object.assign(
      document.createElement('div'),
      {
        className: 'container'
      },
      { id: `section-container-${counter}` }
    );
    counter += 1;
    const main = document.getElementById('main-container');
    main.appendChild(container);
    return container;
  }
  form(container) {
    const form = Object.assign(document.createElement('form'), {
      className: 'space-bottom'
    });
    const fields = [
      {
        name: 'Name',
        placeholder: 'Name',
        type: 'text'
      },
      {
        name: 'Lastname',
        placeholder: 'Lastname',
        type: 'text'
      },
      {
        name: 'Email',
        placeholder: 'Email',
        type: 'text'
      }
    ];
    fields.forEach((item) => {
      const wrapper = Object.assign(document.createElement('div'), {
        className: 'field'
      });
      const label = Object.assign(
        document.createElement('label'),
        { className: 'field white' },
        { innerHTML: item.placeholder }
      );

      const control = Object.assign(document.createElement('div'), {
        className: 'control'
      });
      const input = Object.assign(
        document.createElement('input'),
        {
          className: 'input'
        },
        {
          type: item.type
        }
      );

      wrapper.appendChild(label);
      wrapper.appendChild(control);
      control.appendChild(input);
      form.appendChild(wrapper);
      container.appendChild(form);
    });
    const wrapperbtn = Object.assign(document.createElement('div'), {
      className: 'field'
    });

    const submit = Object.assign(
      document.createElement('button'),
      {
        className: 'button btn-centered'
      },
      {
        innerHTML: 'Subscribe to our newsletter'
      }
    );
    wrapperbtn.appendChild(submit);
    form.appendChild(wrapperbtn);
  }
}
const displayNewSection = (name, description) => {
  const newPage = new Section();
  newPage.setup(name, description);
  // newPage.content();
  newPage.form(newPage.content());
};

// Rendering
createMainContainer();
displayNewSection('Fall 2020', 'Keep your best paw forward');
