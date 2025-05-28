console.log('DCN Script started loading');

// Wait for both DOM and dark mode to be ready
window.addEventListener('load', function() {
    console.log('Window loaded');
    
    // Sample notes data - Replace with your actual data
    const notes = [
        { title: "Introduction", id: "1Mxe6KA7IaJxr4VboQOewwVhW9Wc7MCLP", type: "slides" },
        { title: "XP and Scrum", id: "1Mf5GXg_8XynZYnB4NsSw5UV7euQCi6WV", type: "slides" },
        { title: "Agile Model", id: "1MZuA9Bchqp3wBLns89U60OTNcboWy0pH", type: "slides" },
        { title: "Software Process Model", id: "1MQRgDaZD7ariVz6_Jv6V0DeImH2mGMZX", type: "slides" },
        { title: "Software Process", id: "1MIqHi3FqtHc9QA1wMTzDlyTSSC0wkacO", type: "slides" },
        { title: "Requirement Engineering", id: "1UCXq0XrHbInZ2UDRxPmcvP2gsjpjOwzP", type: "slides" },
        { title: "Project Management Concept", id: "1U9Jw-jRV6tMecQkKo9HHlGmwAfGiA9uO", type: "slides" },
        { title: "Sofrware Metrices", id: "1UCgYR89Nq3Y2fEBTT-h5EabVGndCWHQn", type: "slides" },
        { title: "Cocomo Model", id: "1OpEdAdrRqrH_9yyHwchNQV8PBaYMm15z", type: "slides" },
        { title: "Quality", id: "1Oqt2lMq2c1pLim4NWCIgvk5f2m5eMrrG", type: "slides" },
        { title: "Software Texting", id: "1OqpMwSKxNAqvIK0cekgml-UvJImq6pok", type: "slides" },
        { title: "Risk Management", id: "1Oq4pJozhdZmb1dqAUZYRveBlrXX6u7AM", type: "slides" }
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