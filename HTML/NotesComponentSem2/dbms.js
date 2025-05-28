console.log('DCN Script started loading');

// Wait for both DOM and dark mode to be ready
window.addEventListener('load', function() {
    console.log('Window loaded');
    
    const notes = [
        { title: "Lec 1 ", id: "1XSDJO1L92vXsiPSq3jgpVA2WikDcCf1e", type: "slides" },
        { title: "Lec 2 ", id: "1XNfFgeCe7i1f-Fsg1MZMcbPX6iLen43Z", type: "slides" },
        { title: "Lec 3 ", id: "1XG-BN_ZHVBjWF_nGylRXHNNf1eZdvmIj", type: "slides" },
        { title: "Lec 4 ", id: "1XbD1bbuPS9IWiMqffsAz8r2ragtX8kl6", type: "slides" },
        { title: "Lec 5 ", id: "1XXb-2VUZ7HP92D4mM8bBgq9_Ihsg2iu1", type: "slides" },
        { title: "Lec 6 ", id: "1X319rct9ql9WoAJnKoJq359y660VSIh4", type: "slides" },
        { title: "Lec 7 ", id: "h1X2jBtM0kSAB6Jy8c1hfURvwH3pLp3BQv", type: "slides" },
        { title: "Lec 8 ", id: "1gGP_0G3fCtwm8iyKyr0rZmuDv0WThYXd", type: "slides" },
        { title: "Lec 9 ", id: "1gNsaj4izsk1VpDYHm_EprPMXBT7ccwUb", type: "pdf" },
        { title: "Lec 10", id: "1gS2amghNRWmyDD0C_sB-bZmWmJgJnvBP", type: "pdf" },
        { title: "Lec 11", id: "1g2Fx1v2qTqJX2Lz7dXsMVRU83i73cS6y", type: "pdf" },
      ];
      
      
      
      
      
    console.log('Notes array created:', notes);

    const tableBody = document.getElementById('notesTableBody');
    console.log('Table body element:', tableBody);

    // Function to get Google Drive URL based on document type
    function getDriveUrl(fileId, type) {
        if (type === 'doc') {
            return `https://docs.google.com/document/d/${fileId}/preview`;
        } else if (type === 'slides') {
            return `https://docs.google.com/presentation/d/${fileId}/preview`;
        } else {
            return `https://drive.google.com/file/d/${fileId}/preview`;
        }
    }

    // Function to render notes in the table
    function renderNotes() {
        console.log('Rendering notes...');
        if (!tableBody) {
            console.error('Table body element not found!');
            return;
        }

        tableBody.innerHTML = '';
        notes.forEach((note, index) => {
            const driveUrl = getDriveUrl(note.id, note.type);
            console.log('Creating row for:', note.title, 'with URL:', driveUrl);
            
            const row = document.createElement('tr');
            row.style.cursor = 'pointer';

            // Add a class to the first row for styling
            if (index === 0) {
                row.classList.add('first-data-row');
            }
            
            // Create button element
            const button = document.createElement('button');
            button.className = 'view-btn';
            button.textContent = note.type === 'doc' ? 'View Doc' : note.type === 'slides' ? 'View Slides' : 'View PDF';
            button.onclick = (e) => {
                e.stopPropagation();
                console.log('Button clicked, opening URL:', driveUrl);
                window.open(driveUrl, '_blank');
            };
            
            row.innerHTML = `
                <td>${note.title}</td>
                <td></td>
            `;
            
            // Add button to the last cell
            const lastCell = row.querySelector('td:last-child');
            lastCell.appendChild(button);
            
            // Make the entire row clickable
            row.addEventListener('click', () => {
                console.log('Row clicked, opening URL:', driveUrl);
                window.open(driveUrl, '_blank');
            });
            
            tableBody.appendChild(row);
        });
        console.log('Notes rendered');
    }

    // Initial render
    renderNotes();
}); 