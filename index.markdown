---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: home
---

 <main class="container">    
        

        <input type="search" id="search-box" name="search" placeholder="Search for a topic or calculation">
        
        <!-- 'article' is a good semantic tag for a self-contained block of content -->
        <article id="item-list">
            <!-- List items will be dynamically inserted here -->
            <div aria-busy="true">Loading list...</div>
        </article>

    </main>

<script>
        // --- DATA (from itemsList.kt) ---
        
        // --- LOGIC ---
        const listContainer = document.getElementById('item-list');
        const searchBox = document.getElementById('search-box');

        function renderList(items) {
            listContainer.innerHTML = ''; // Clear content
            if (items.length === 0) {
                listContainer.innerHTML = '<div class="list-item"><p class="item-name">No items found.</p></div>';
                return;
            }
            items.forEach(item => {
                const listItem = document.createElement('a'); // Use <a> tag for semantics and hover
                listItem.className = 'list-item';
                
                listItem.addEventListener('click', (e) => {
                    e.preventDefault(); 
                    
                   let htmlFile = item.fileName.replace(/\.md$/i, '.html');
                    window.location.href = `contentFiles/${htmlFile}`;
                    
                    // Prevent default link behavior
                    // const page = item.type === 'calculate' ? 'detail.html' : 'description.html';
                    // window.location.href = `${page}?fileName=${item.fileName}`;
                });

                const icon = document.createElement('img');
               icon.className = 'item-icon';
              icon.alt = item.type === 'calculate' ? 'Calculate' : 'Info';
                 icon.src = item.type === 'calculate'
             ? 'images/calculate.png'
             : 'images/info.png';

                
                const nameParagraph = document.createElement('p');
                nameParagraph.className = 'item-name';
                nameParagraph.textContent = item.name;

                listItem.appendChild(icon);
                listItem.appendChild(nameParagraph);
                listContainer.appendChild(listItem);
            });
        }
        
        searchBox.addEventListener('input', (event) => {
            const searchTerm = event.target.value.toLowerCase();
            const filteredList = itemsList.filter(item => 
                item.name.toLowerCase().includes(searchTerm)
            );
            renderList(filteredList);
        });

        // Initial render
        renderList(itemsList);
    </script>
