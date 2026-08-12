// Lista de links
const links = [{
    title: "W3Schools",
    url: "https://www.w3schools.com/",
    description: "Tutoriais simples e práticos para aprender desenvolvimento web do zero.",
    tag: "Tutorial"
},
    {
        title: "MDN Web Docs",
        url: "https://developer.mozilla.org/",
        description: "A melhor documentação para HTML, CSS e JavaScript.",
        tag: "Referência"
    },
    {
        title: "CSS Tricks",
        url: "https://css-tricks.com/",
        description: "Dicas incríveis e tutoriais avançados sobre CSS.",
        tag: "CSS"
    },
    {
        title: "JavaScript Info",
        url: "https://javascript.info/",
        description: "Um tutorial moderno e detalhado sobre JavaScript.",
        tag: "JavaScript"
    },
    {
        title: "CodePen",
        url: "https://codepen.io/",
        description: "Ambiente online para testar códigos front-end.",
        tag: "Ferramenta"
    }
];

const linkList = document.getElementById('linkList');
const searchInput = document.getElementById('searchInput');

// Função para exibir os links na tela
function renderLinks(linksToRender) {
    linkList.innerHTML = ''; // Limpa a lista atual
    
    linksToRender.forEach(link => {
        const li = document.createElement('li');
        li.className = 'link-card';
        
        li.innerHTML = `
            <a href="${link.url}" target="_blank" class="link-title">${link.title}</a>
            <p class="link-desc">${link.description}</p>
            <span class="tag">${link.tag}</span>
        `;
        
        linkList.appendChild(li);
    });
}

// Renderiza todos os links ao carregar a página
renderLinks(links);

// Função de busca
searchInput.addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    
    const filteredLinks = links.filter(link => {
        return link.title.toLowerCase().includes(searchTerm) || 
               link.description.toLowerCase().includes(searchTerm) ||
               link.tag.toLowerCase().includes(searchTerm);
    });
    
    renderLinks(filteredLinks);
});
