window.onload = () => {
  const barMenu = document.querySelector('.bar-menu');
  const popUp = document.querySelector('.pop-up');
  const close = document.querySelector('.close');
  const menu = document.querySelector('.menu');

  barMenu.addEventListener('click', () => {
    popUp.classList.remove('hidden');
  });

  close.addEventListener('click', () => {
    popUp.classList.remove('hidden');
  });

  menu.addEventListener('click', () => {
    popUp.classList.add('hidden');
  });

  let projectsData = [
    {
      title: 'Tonic',
      subtitle: 'CANOPY',
      techStack: 'Back End Dev',
      year: 2015,
      src: './images/second-section/project-01.svg',
      highlight: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
      lang: ['html', 'css', 'javascript'],
      live: 'https://kanzatahreem.github.io/Portfolio-Website/',
      source: 'https://github.com/KanzaTahreem/Portfolio-Website',
    },
  ];

  let projectCardString = projectsData.map((project) => `
    <div class="card">
    <div class="inner-card">
      <div class="card-img card-1">
        <img
          src="${project.src}"
          alt="Project Snapshoot"
        />
      </div>
      <div class="desc">
        <h3>${project.title}</h3>
        <h4>${project.subtitle} <span>${project.techStack}</span> <span>${project.year}</span></h4>
        <p>
          ${project.highlight}
        </p>
        <ul>
          ${project.lang.map((tech) => `<li>${tech}</li>`).join('')}
        </ul>
        <button type="button" class="project-btn button">
          See Project
        </button>
      </div>
    </div>
  </div>
  `);
};
