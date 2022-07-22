import ProjectCard from './ProjectCard.svelte';
import '/src/app.css';

export default {
    title: 'Project Card',
    component: ProjectCard,
    args: {
        title: "Example Project",
        subtitle: "Example text",
        summary: "Built with This, That and the Third.",
        image: "static/pasta-quiz.webp"
    }
};

const Template = (args) => ({
    Component: ProjectCard,
    props: args
});

export const WithoutLinks = Template.bind({});

export const WithLinks = Template.bind({});
WithLinks.args = {
    link: "https://pasta-quiz.kfirfitousi.com",
    github: "https://github.com/kp2c/pasta-quiz",
};