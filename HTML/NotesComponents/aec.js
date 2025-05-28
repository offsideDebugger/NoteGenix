console.log('Script started loading');

// Wait for both DOM and dark mode to be ready
window.addEventListener('load', function() {
    console.log('Window loaded');
    
    // Sample notes data - Replace with your actual data
    const notes = [
        { title: "English For Business Communication", id: "1cKY-4rgCWtKgeAK_0SH_z0WzWikEZduk" },
        { title: "English for EnterPreneurship", id: "1c9lgu8Dca4uZSiwpaCYgf3tLyydnvy8z" },
        { title: "Guide to both", id: "1c7RvRlZmsvS_7nsizWodItNL1hlaoQt8" }
      ];
      
      

    console.log('Notes array created:', notes);

    const tableBody = document.getElementById('notesTableBody');
    console.log('Table body element:', tableBody);

    // Function to get Google Drive URL
    function getDriveUrl(fileId) {
        return `https://drive.google.com/file/d/${fileId}/preview`;
    }

    // Function to render notes in the table
    function renderNotes() {
        console.log('Rendering notes...');
        if (!tableBody) {
            console.error('Table body element not found!');
            return;
        }

        tableBody.innerHTML = '';
        notes.forEach(note => {
            const driveUrl = getDriveUrl(note.id);
            console.log('Creating row for:', note.title, 'with URL:', driveUrl);
            
            const row = document.createElement('tr');
            row.style.cursor = 'pointer';
            
            // Create button element
            const button = document.createElement('button');
            button.className = 'view-btn';
            button.textContent = 'View PDF';
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