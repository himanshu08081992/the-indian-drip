import gsap from "gsap";

export const navbarAnimation = (refs) => {

    const {
        navbar,
        logo,
        menu,
        icons
    } = refs;

    const tl = gsap.timeline();

    tl.from(navbar,{
        y:-80,
        opacity:0,
        duration:.6,
        ease:"power3.out"
    })

    .from(
        logo,
        {
            y:-20,
            opacity:0,
            duration:.45
        },
        "-=.35"
    )

    .from(
        menu.children,
        {
            y:-20,
            opacity:0,
            stagger:.08,
            duration:.35
        },
        "-=.2"
    )

    .from(
        icons,
        {
            y:-20,
            opacity:0,
            stagger:.08,
            duration:.3
        },
        "-=.25"
    );
    

    return tl;
}