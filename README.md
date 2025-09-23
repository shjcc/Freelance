# Saad Hussain Freelance Website  

This is my personal portfolio site showcasing my skills, experience, and knowledge within the field of web design and development.


**Live Site**:  
[www.saad-hussain.com](https://saad-hussain.com/)

---

.projects {
    padding: 4rem;
}

.projects > .container > h3 {
    letter-spacing: 0.3rem;
    font-weight: 600;
    font-family: var(--font-secondary);
    font-size: clamp(3rem, 6vw, 6rem);
    color: var(--color-black);
    position: relative;
    margin: 0;
    padding-bottom: 2rem;
    text-align: center;
}

.projects-grid {
    display: flex;
    flex-direction: column;
}

.p-item {
    width: 800px;
    padding: 4rem;
}

.p-item:last-child {
    align-self: flex-end;
}

.p-content > p {
    background-color: #444;
    border: 1rem solid #444;
    border-radius: 1rem;
    font-family: var(--font-primary);
    font-weight: 400;
    font-size: clamp(1rem, 2vw, 1.5rem);
    letter-spacing: -.05rem;
    color: var(--color-cream);
    text-wrap: balance;
    text-wrap: pretty;
}

.p-item img:hover {
    transform: scale(1.1);
}

img {
    display: block;
    width: 100%;
    height: auto;
    border-radius: 1rem;
}