<script>
    import IconWithTooltip from '$lib/components/IconWithTooltip';
    import Timeline from '$lib/components/Timeline';
    import ProjectCard from '$lib/components/ProjectCard';
    import { LinkedIn, GitHub, Email} from '$lib/components/Icons';
    import { years, yearsText } from '$lib/data/timeline.json';

    let showWave = false;
</script>

<head>
    <title>Kfir Fitousi | Front End Developer</title>
</head>

<main class="conatiner max-w-2xl m-auto px-4">
    <img src="/kfir.jpg" alt="Kfir Fitousi" class="p-1 w-40 h-40 mx-auto mt-6 rounded-full" />
    <div class="pic-border w-40 h-40 border-2 border-t-[#d27884] border-x-zinc-800 border-b-[#3271aa] rounded-full"></div>

    <div class="flex flex-row justify-center mt-2">
        <h1 class="text-3xl text-zinc-200 text-center"
            on:mouseover={() => showWave = true}
            on:focus={() => showWave = true}
            on:mouseout={() => showWave = false}
            on:blur={() => showWave = false}
        >
            Kfir Fitousi
            {#if showWave}
                <span class="wave text-3xl absolute">&nbsp;&#128075;</span>
            {/if}
        </h1>
    </div>
    <h2 class="text-lg text-zinc-200 text-center mb-2">Front End Developer</h2>

    <div class="flex flex-row justify-center space-x-3 mb-6">
        <IconWithTooltip 
            tip="My profile on LinkedIn"
            link="https://www.linkedin.com/in/kfirp"
            icon={LinkedIn} 
        />
        <IconWithTooltip 
            tip="My profile on GitHub"
            link="https://github.com/kp2c"
            icon={GitHub}
        />
        <IconWithTooltip 
            tip="My Email"
            link="mailto:kfirp84@gmail.com"
            icon={Email}
        />
    </div>

    <Timeline years={years} yearsText={yearsText} />

    <h1 class="text-3xl text-zinc-200 text-center mt-10">Projects</h1>

    <div class="flex flex-wrap justify-center space-y-3 my-4">
        <ProjectCard 
            title="Pasta Quiz"
            subtitle="Put your pasta knowledge to the test!"
            summary="Built with TypeScript, Next.js and TailwindCSS."
            image="/pasta-quiz.webp"
            link="https://pasta-quiz.kfirfitousi.com"
            github="https://github.com/kp2c/pasta-quiz" 
        />
        <ProjectCard 
            title="WHILE Compiler"
            subtitle="Online interpreter and compiler for a programming language called WHILE."
            summary="Built with TypeScript, SvelteKit and TailwindCSS."
            image="/while-compiler.webp"
            link="https://while.kfirfitousi.com"
            github="https://github.com/kp2c/while-compiler" 
        />
        <ProjectCard 
            title="Arous Elbahar Style"
            subtitle="Second-hand store website for Arous Elbahar, a non-profit organization."
            summary="Built with Shopify. Not yet available."
            image="/arous-style.webp"
        />
    </div>
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

    .wave {
        animation: wave-animation infinite 2.5s;
        transform-origin: 70% 70%;
    }

    @keyframes wave-animation {
        0% { transform: rotate( 0.0deg) }
        10% { transform: rotate(14.0deg) } 
        20% { transform: rotate(-8.0deg) }
        30% { transform: rotate(14.0deg) }
        40% { transform: rotate(-4.0deg) }
        50% { transform: rotate(10.0deg) }
        60% { transform: rotate( 0.0deg) }
        100% { transform: rotate( 0.0deg) }
    }
</style>