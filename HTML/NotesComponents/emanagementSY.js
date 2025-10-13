console.log('Script started loading');

// Wait for both DOM and dark mode to be ready
window.addEventListener('load', function() {
    console.log('Window loaded');
    
    // Sample notes data - Replace with your actual data
    const notes = [
        {
          title: "Collection and Transportation of E-waste",
          id: "1pC5CB5fxnZ2SyhaW1jRcE6vqKFsmexJb"
        },
        {
          title: "Incinerator",
          id: "1G-G5qVXntyRjRw_kw9T8lQQe_pLFZJYa"
        },
        {
          title: "Landfill",
          id: "1l6Z9uo1EpV59Y8dr0vQtHV5jsMCYpUK4"
        },
        {
          title: "Lead Battery Recycling Techniques",
          id: "17kyPBKu8mIsQNjdA-hH0voqgLO_t0Qw7"
        },
        {
          title: "The E-waste Rules",
          id: "15BIE_M7yPV57h1M3zSUby-0OQ_KNr_OZ"
        },
        {
          title: "Circular Economy Approaches",
          id: "1rjns2cJJAIcgKSchiXpiJws5Rh7jiYjQ"
        },
        {
            title:"Mid Term Notes",
            id:"15qkcIA6BbdXzFc8RLQfN502B9toLECQ0"
        }
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
