import ProjectCard from '../lib/components/projectCard.svelte';
import '../app.css'

export default {
    title: 'Project Card',
    component: ProjectCard,
};

export const WithLinks = () => ({
    Component: ProjectCard,
    props: {
        title: "Pasta Quiz",
        subtitle: "Put your pasta knowledge to the test!",
        summary: "Built with TypeScript, Next.js and TailwindCSS.",
        image: "static/pasta-quiz.webp",
        link: "https://pasta-quiz.kfirfitousi.com",
        github: "https://github.com/kp2c/pasta-quiz" 
    },
});