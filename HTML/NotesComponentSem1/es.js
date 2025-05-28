console.log('DCN Script started loading');

// Wait for both DOM and dark mode to be ready
window.addEventListener('load', function() {
    console.log('Window loaded');
    
    // Sample notes data - Replace with your actual data
    const notes = [
        { title: "Natural Resources Types", id: "1Hq5FvjEXung0jvqCSwPxPzJjD34vCsPX", type: "slides" },
        { title: "Concept of Ecosystem", id: "1HpANSyyx3znRckhJQE7AwtN-dSD87jwc", type: "slides" },
        { title: "Natural Resources", id: "1HlCEPPWu-9IvqdzUZZZJI1HYObtYDfSY", type: "slides" },
        { title: "Natural Resources 2", id: "1HfvloN8xoYWPSAnzNiAoUbWRBtdGQ9F6", type: "slides" },
        { title: "Biodiversity and Conservation", id: "1HfCoP1SKyXqN5JTzcu0e849YkeqL4yYP", type: "slides" },
        { title: "Introduction", id: "1HeUVC4lbKpGpqp1aaqIojT_Cgbyy91-1", type: "slides" },
        { title: "Hotspots", id: "1HdSP39YDsvSzjmpHNwTP91Hbje7g1PnS", type: "slides" }
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