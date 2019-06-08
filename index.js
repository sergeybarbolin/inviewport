const getRandomColor = () => {
    const [r,g,b] = [Math.floor(Math.random() * (256)), Math.floor(Math.random() * (256)), Math.floor(Math.random() * (256))];
    return `RGB(${r}, ${g}, ${b})`;
}

const sections = document.querySelectorAll('section');

for (let section of sections) {
    section.style.backgroundColor = getRandomColor();
    section.style.height = (Math.floor(Math.random() * (1300 - 100)) + 100) + 'px';
}


const visible = (target, partiallyVisible) => {
    const el = {
        top: target.offsetTop,
        bottom: target.offsetTop + target.offsetHeight,
        height: target.offsetHeight
    }

    const viewport = {
        top: window.pageYOffset,
        bottom: window.pageYOffset + window.innerHeight,
        height: window.innerHeight
    };

    partiallyVisible = partiallyVisible ? (viewport.top < el.top && el.top < viewport.bottom) || (viewport.top < el.bottom && el.bottom < viewport.bottom) : false;

    return  (el.top <= viewport.top && el.bottom >= viewport.bottom) || (el.top >= viewport.top && el.bottom <= viewport.bottom) || partiallyVisible;
}



window.addEventListener('scroll', function() {
    const visibleSections = new Set;

    for (const section of sections) {
        if (visible(section)) {
            visibleSections.add(section.innerText);
        }
    }

    console.clear();
    console.log(visibleSections);
});
