const skills = [
  {
    title: 'Javascript',
    competency: 4,
    category: ['Web Development', 'Languages', 'Javascript'],
  },
  {
    title: 'Java',
    competency: 4,
    category: ['Web Development', 'Languages'],
  },
  {
    title: 'Node.JS',
    competency: 2,
    category: ['Web Development', 'Javascript'],
  },
  {
    title: 'React',
    competency: 5,
    category: ['Web Development', 'Javascript'],
  },
  {
    title: 'SQL',
    competency: 3,
    category: ['Web Development', 'Databases', 'Languages'],
  },
  {
    title: 'Data Mining',
    competency: 3,
    category: ['Data Science'],
  },
  {
    title: 'Git',
    competency: 3,
    category: ['Tools'],
  },
  {
    title: 'Numpy',
    competency: 3,
    category: ['Data Science', 'Data Engineering', 'Python'],
  },
  {
    title: 'Jupyter',
    competency: 4,
    category: ['Data Science', 'Python'],
  },
  {
    title: 'Typescript',
    competency: 5,
    category: ['Web Development', 'Languages', 'Javascript'],
  },
  {
    title: 'HTML + SASS/SCSS/CSS',
    competency: 4,
    category: ['Web Development', 'Languages'],
  },
  {
    title: 'Python',
    competency: 3,
    category: ['Languages', 'Python'],
  },
  {
    title: 'C++',
    competency: 2,
    category: ['Languages'],
  },
  {
    title: 'R',
    competency: 1,
    category: ['Languages'],
  },
  {
    title: 'GraphQL',
    competency: 1,
    category: ['Web Development', 'Databases'],
  },
  {
    title: 'Pandas',
    competency: 3,
    category: ['Data Engineering', 'Data Science', 'Python'],
  },
  {
    title: 'Matplotlib',
    competency: 3,
    category: ['Data Engineering', 'Data Science', 'Python'],
  },
  {
    title: 'Scikit-Learn',
    competency: 3,
    category: ['Data Engineering', 'Data Science', 'Python'],
  },
  {
    title: 'C#',
    competency: 2,
    category: ['Languages', 'Game Development'],
  },
  {
    title: 'Unity',
    competency: 2,
    category: ['Game Development', 'Tools'],
  },
].map((skill) => ({ ...skill, category: skill.category.sort() }));

// this is a list of colors that I like. The length should be == to the
// number of categories. Re-arrange this list until you find a pattern you like.
const colors = [
  '#6968b3',
  '#37b1f5',
  '#40494e',
  '#515dd4',
  '#e47272',
  '#cc7b94',
  '#3896e2',
  '#c3423f',
  '#d75858',
  '#747fff',
  '#64cb7b',
];

const categories = [
  ...new Set(skills.reduce((acc, { category }) => acc.concat(category), [])),
]
  .sort()
  .map((category, index) => ({
    name: category,
    color: colors[index],
  }));

export { categories, skills };
