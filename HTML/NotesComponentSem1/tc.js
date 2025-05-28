console.log('DCN Script started loading');

// Wait for both DOM and dark mode to be ready
window.addEventListener('load', function() {
    console.log('Window loaded');
    
    // Sample notes data - Replace with your actual data
    const notes = [
        { title: "Email Writing", id: "1raKPTkb9Sc72YnlIc0yAPMyg8tYM7QDR", type: "slides" },
        { title: "Technical Communication", id: "1nNCFSS5CKW4T5X_K4Axz5c159qZsvJOM", type: "slides" },
        { title: "Communication", id: "1dNgWKrZY2l8Z-Dklt3ZdJpua5mqGkuUU", type: "slides" },
        { title: "7cs of Effective Coms", id: "1TVMk73Xq1kBu-llzii9ODJzQWXC0XvU1", type: "pdf" },
        { title: "Technical Report", id: "1Sbn1zPmvMQ2rZW_mvp7O5MuhoXNcwiz_", type: "pdf" },
        { title: "Writing Email", id: "1S6OLyMSqcdhrrIweN1xZq2_gxpH6MSMe", type: "pdf" },
        { title: "Manuals", id: "1PzzIuBsbk_IVN4f9X6V3j_TWOKZhvZS4", type: "slides" },
        { title: "Useful Email Phrases", id: "1PQ11Hbg_LCvo2Tka4mxc8dVsY7fVNcwi", type: "pdf" },
        { title: "Email Etiquettes", id: "1JG-8fmBSqGrP0JzzAKEL5z-E73SF34n6", type: "pdf" },
        { title: "Technical Report", id: "19MGzlG0v9r49kHeib9zXXe66qxkYHKcf", type: "pdf" },
        { title: "Technical Communication Reference Book", id: "1-jvMLlEW1pOf_al-xYkO8PpBT9y-Ry2l", type: "pdf" }
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