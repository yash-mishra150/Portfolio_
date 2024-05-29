import project_quizapp from '../../assests/project1.png';
import project_movieapp from '../../assests/project2.png';
import project_registerevent from '../../assests/project3.png';

 const data = [
    {
        id:1,
        title: 'Quiz App',
        desc: 'Created a Quiz application with Next.js, featuring email verification for enhanced security. Leveraged back-end services to dynamically manage quiz content, ensuring seamless updates.',
        githuburl: 'https://github.com/yash-mishra150/Quiz_Web_App',
        demo: null,
        preview: project_quizapp
    },
    {
        id:2,
        title: 'Movie app',
        desc: 'Developed a basic movie browsing app using Android Studio with React Native. Integrated the TMDb API to fetch movie data, enabling users to browse, view details, and search for specific titles. Implemented key features including: Movie List: Displayed movies in a scrollable list, Movie Details: Fetched and displayed detailed information about selected movies, Search Functionality: Enabled users to search for movies by title.',
        githuburl: 'https://github.com/yash-mishra150/MovieApp',
        demo: null,
        preview: project_movieapp
    },
    {
        id:3,
        title: 'Register Page',
        desc: 'Developed a registration form for a college society event using Next.js. Collected participant details including name, student number, branch, email, phone, gender, year, residence, and section. Integrated reCAPTCHA to enhance security and prevent spam. Ensured the form is concise and user-friendly to streamline the registration process.',
        githuburl: 'https://github.com/yash-mishra150/register_event',
        demo: null,
        preview: project_registerevent
    }
]

export default data;