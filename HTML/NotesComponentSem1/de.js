console.log('DCN Script started loading');

// Wait for both DOM and dark mode to be ready
window.addEventListener('load', function() {
    console.log('Window loaded');
    
    // Sample notes data - Replace with your actual data
   // Section 3
const notes=[

    { title: "DF UNI1", id: "10CmeIy4LO5ne4LT16ootb_N2bJOjssYK", type: "pdf" },
    { title: "Unit 1", id: "1LWQSgBStY_928LEAxSLS0kO_tbgvNlVh", type: "slides" },
    { title: "Unit 2", id: "1LpftDV0_3HqGX1Nm6OU5wu-74oie8QOw", type: "slides" },
    { title: "Unit 3", id: "1Lp0kH1nLEfQWHYqfFgTdtVFoNpMwQEfG", type: "slides" },
    { title: "K MAP examples", id: "1MJsN2EafVvbsyjX3P0SclhgK39v0BhNJ", type: "pdf" },
    { title: "K MAP", id: "1MJRFzQSbbeDxSQkYBVmng7p6G8DMtop3", type: "slides" },
    { title: "Boolean Algebra", id: "1LtZqE3NS842wviMk3v7rWd5Nv_H7qjLc", type: "slides" },  
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