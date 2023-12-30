import React, { useEffect } from 'react';

const Slider = () => {
    const tagListItems = [
        { text: "HTML", bgColor: "#ffcccb", type: 'fab', icon: "fa-html5" },
        { text: "React", bgColor: "#ffcccb", type: 'fab', icon: "fa-react" },
        { text: "node js", bgColor: "#ffcccb", type: 'fab', icon: "fa-node-js" },
        { text: "CSS", bgColor: "#cbf5ff", type: 'fab', icon: "fa-css3-alt" },
        { text: "JS", bgColor: "#d4ffb8", type: 'fab', icon: "fa-js-square" },
        { text: "JSX", bgColor: "#ffd8cb", type: 'fa', icon: "fa-cogs" },
        { text: "webdev", bgColor: "#f7cbff", type: 'fa', icon: "fa-globe" },
        { text: "animation", bgColor: "#cbf5ff", type: 'fa', icon: "fa-film" },
        { text: "UI/UX", bgColor: "#d4ffb8", type: 'fa', icon: "fa-paint-brush" },
    ];
    useEffect(() => {
        const scrollers = document.querySelectorAll(".scroller");
        if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            addAnimation();
        }

        function addAnimation() {
            scrollers.forEach((scroller) => {
                scroller.setAttribute("data-animated", true);
                const scrollerInner = scroller.querySelector(".scroller__inner");
                const scrollerContent = Array.from(scrollerInner.children);
                scrollerContent.forEach((item) => {
                    const duplicatedItem = item.cloneNode(true);
                    duplicatedItem.setAttribute("aria-hidden", true);
                    scrollerInner.appendChild(duplicatedItem);
                });
            });
        }
    }, []);

    return (
        <div>
            <div class="scroller" data-speed="fast">
                <ul class="tag-list scroller__inner">
                    {tagListItems.map((item, index) => (
                        <li key={index}>
                            {item.icon && <i className={`${item.type} ${item.icon} icon`}></i>}
                            &nbsp;
                            &nbsp;
                            {item.text}
                        </li>
                    ))}
                </ul>
            </div>

        </div>
    );
};

export default Slider;
