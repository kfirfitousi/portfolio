<script lang="ts">
    import ThemeSwitcher from '$lib/components/ThemeSwitcher';
    import IconWithTooltip from '$lib/components/IconWithTooltip';
    import Timeline from '$lib/components/Timeline';
    import ProjectCard from '$lib/components/ProjectCard';
    import { LinkedIn, GitHub, Email } from '$lib/components/Icons';
    import { years, yearsText } from '$lib/data/timeline.json';
</script>

<svelte:head>
    <title>Kfir Fitousi | Front End Developer</title>
    <meta
        name="description"
        content="I'm Kfir Fitousi, a front end developer. 
        I have experience with TypeScript, React, Svelte and more.
        Here I will showcase some of the things I'm working on."
    />
</svelte:head>

<main class="conatiner max-w-2xl mx-auto px-4">
    <div class="w-fit h-0 ml-auto z-10">
        <ThemeSwitcher />
    </div>

    <section class="mt-5">
        <img
            src="/kfir.webp"
            alt="Kfir Fitousi"
            class="p-1 w-40 h-40 mx-auto rounded-full bw:grayscale"
        />
        <div
            class="pic-border w-40 h-40 border-2 border-t-[#d27884] border-b-[#3271aa] 
                border-x-transparent rounded-full bw:grayscale"
        />

        <h1
            class="flex flex-col justify-center space-x-0 sm:space-x-2 sm:flex-row mt-2 
                italic text-4xl text-primary text-center neon:animate-neon-text neon:tracking-wider"
        >
            <span>Kfir Fitousi</span>
            <span>כפיר פיטוסי</span>
        </h1>
        <h2
            class="text-xl text-primary text-center mb-2 neon:animate-neon-text neon:tracking-widest"
        >
            Front End Developer
        </h2>

        <div class="flex flex-row justify-center space-x-3 mb-12">
            <IconWithTooltip
                tip="My profile on LinkedIn"
                link="https://www.linkedin.com/in/kfirp"
                icon={LinkedIn}
            />
            <IconWithTooltip
                tip="My profile on GitHub"
                link="https://github.com/kfirfitousi"
                icon={GitHub}
            />
            <IconWithTooltip tip="My Email" link="mailto:kfirp84@gmail.com" icon={Email} />
        </div>
    </section>

    <Timeline {years} {yearsText} />

    <section class="flex flex-wrap justify-center space-y-5 mt-12">
        <h1
            class="text-3xl text-primary text-center mb-1 neon:animate-neon-text neon:tracking-wider"
        >
            Projects
        </h1>
        <ProjectCard
            title="Pasta Quiz"
            subtitle="Put your pasta knowledge to the test!"
            summary="Built with TypeScript, Next.js and TailwindCSS."
            image="/pasta-quiz.webp"
            link="https://pasta-quiz.kfirfitousi.com"
            github="https://github.com/kfirfitousi/pasta-quiz"
            lazyImage={false}
        />
        <ProjectCard
            title="WHILE Compiler"
            subtitle="Online interpreter and compiler for a programming language called WHILE."
            summary="Built with TypeScript, SvelteKit and TailwindCSS."
            image="/while-compiler.webp"
            link="https://while.kfirfitousi.com"
            github="https://github.com/kfirfitousi/while-compiler"
        />
        <ProjectCard
            title="Arous Elbahar Style"
            subtitle="Second-hand store website for Arous Elbahar, a non-profit organization."
            summary="Built with Shopify. Not yet available."
            image="/arous-style.webp"
        />
    </section>
</main>

<style>
    .pic-border {
        position: absolute;
        top: 1.5rem;
        left: calc(50% - 5rem);
    }

    .pic-border:hover {
        transform: rotate(360deg);
        transition: ease-out 1s;
    }
</style>
